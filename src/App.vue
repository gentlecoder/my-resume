<template>
  <div id="app">
    <div id="content">
      <pre contenteditable id="style-text" ref="styleEl" v-html="text.styleText" @input="editStyle"></pre>
      <pre
        ref="workTextEL"
        id="work-text"
        v-html="text.workText"
        :class="['text',!isMarked?'rotate-in':'rotate-out']"
        @scroll.passive="scroll"
      ></pre>
      <pre
        ref="workMarkEL"
        id="work-mark"
        v-html="text.workMark"
        :class="['md',!isMarked?'rotate-out':'rotate-in']"
        @scroll.passive="scroll"
      ></pre>
    </div>
    <VFooter
      class="footer"
      @pause-animation="pauseAnimation"
      @skip-animation="animationSkipped=true"
      :pauseContent="pauseContent"
    ></VFooter>
  </div>
</template>

<script>
import VFooter from "./components/VFooter.vue";
import {
  default as writeChar,
  writeSimpleChar,
  handleChar
} from "./utils/writeChar";
import getPrefix from "./utils/getPrefix";
import resume from "./docs/resume";
import marked from "marked";
// let style01 = require("./docs/styles0.css");
// console.log(style01);
const isDev = window.location.hostname === "localhost";
let endOfSentence = /[\.\?\!]\s$/;
let comma = /\D[\,]\s$/;
let endOfBlock = /[^\/]\n\n$/;

export default {
  name: "app",
  components: {
    VFooter
  },
  data() {
    return {
      speed: isDev ? 16 : 16,
      styles: [],
      text: {
        styleText: "",
        workText: "",
        workMark: "",
        pgpText: ""
      },
      browserPrefix: "",
      isMarked: false,
      animationSkipped: false,
      done: false,
      paused: false,
      pauseContent: "Pause ||",
      scroll: () => {},
      scrollCount: 0
    };
  },
  watch: {
    // text: {
    //   deep: true,
    //   handler: function(newVal, oldVal) {
    //     console.log("newValue", newVal);
    //     console.log("oldValue", oldVal);
    //   }
    // }
  },
  methods: {
    getBrowserPrefix() {
      // Ghetto per-browser prefixing
      this.browserPrefix = getPrefix(); // could be empty string, which is fine
      this.styles = this.styles.map(function(text) {
        return text.replace(/-webkit-/g, this.browserPrefix);
      }, this);
    },
    async startAnimation() {
      try {
        await this.writeTo(
          this.text,
          this.styles[0],
          0,
          this.speed,
          "styleText",
          1
        );
        await this.writeTo(this.text, resume, 0, this.speed, "workText", 1);
        await this.writeTo(
          this.text,
          this.styles[1],
          0,
          this.speed,
          "styleText",
          1
        );
        this.renderMarkdown();
        await new Promise((resolve, reject) => {
          setTimeout(resolve, 1000);
        });
        await this.writeTo(
          this.text,
          this.styles[2],
          0,
          this.speed,
          "styleText",
          1
        );
        await this.writeTo(
          this.text,
          this.styles[3],
          0,
          this.speed,
          "styleText",
          1
        );
      } catch (e) {
        // Flow control straight from the ghettos of Milwaukee
        if (e.message === "SKIP IT") {
          this.skipAllAnimations();
        } else {
          throw e;
        }
      }
    },
    async writeTo(
      textObj,
      message,
      index,
      interval,
      textType,
      charsPerInterval
    ) {
      if (this.animationSkipped) {
        // Lol who needs proper flow control
        throw new Error("SKIP IT");
      }
      // Write a character or multiple characters to the buffer.
      let chars = message.slice(index, index + charsPerInterval);
      index += charsPerInterval;

      // Ensure we stay scrolled to the bottom.
      this.$refs.styleEl.scrollTop = this.$refs.styleEl.scrollHeight;
      // Object.keys(this.$refs).forEach(key => {
      //   this.$refs[key].scrollTop = this.$refs[key].scrollHeight;
      // });

      // If this is going to <style> it's more complex; otherwise, just write.
      if (textType) {
        writeChar(textObj, chars, textType);
      } else {
        writeSimpleChar(textObj, chars);
      }

      // Schedule another write.
      if (index < message.length) {
        let thisInterval = interval;
        let thisSlice = message.slice(index - 2, index + 1);
        if (comma.test(thisSlice)) thisInterval = interval * 30;
        if (endOfBlock.test(thisSlice)) thisInterval = interval * 50;
        if (endOfSentence.test(thisSlice)) thisInterval = interval * 70;

        do {
          await new Promise(resolve => {
            setTimeout(resolve, thisInterval);
          });
        } while (this.pause);

        return this.writeTo(
          textObj,
          message,
          index,
          interval,
          textType,
          charsPerInterval
        );
      }
    },
    pauseAnimation() {
      this.pause = !this.pause;
      this.pauseContent = this.pause ? "Resume >>" : "Pause ||";
    },
    renderMarkdown() {
      this.text.workMark = marked(this.text.workText);
      this.isMarked = true;
    },
    editStyle() {
      document.getElementById("myStyle").textContent = document.getElementById(
        "style-text"
      ).textContent;
    },
    skipAllAnimations() {
      if (this.done) return;
      this.done = true;
      this.isMarked = true;
      let txt = this.styles.join("\n");
      document.getElementById("myStyle").textContent =
        "#work-text * { " + this.browserPrefix + "transition: none; }" + txt;
      let styleHTML = "";
      for (let i = 0; i < txt.length; i++) {
        styleHTML = handleChar(styleHTML, txt[i]);
      }
      this.text.styleText = styleHTML;
      this.text.workText = resume;
      this.text.workMark = marked(resume);
    },
    handleScroll(ev) {
      if (
        ev.target.clientHeight + ev.target.scrollTop ===
        ev.target.scrollHeight
      ) {
        this.isMarked = !this.isMarked;
        ev.target.scrollTop = 0;
      }
    },
    debounceScroll(fn, time = 2000, immediate = false) {
      let timer;
      return (...args) => {
        if (immediate) fn.call(this, ...args);
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => fn.call(this, ...args), time);
      };
    }
  },
  created() {
    this.styles = [0, 1, 2, 3].map(function(i) {
      return require("./docs/styles" + i + ".js").default;
    });
    this.scroll = this.debounceScroll(this.handleScroll);
  },
  mounted() {
    this.getBrowserPrefix();
    this.startAnimation();
  }
};
</script>

<style>
html,
body {
  margin-top: 0;
  height: 100%;
  overflow: hidden;
}

pre {
  overflow: auto;
  max-height: 90%;
  width: 100%;
  border-radius: 1px; /* Prevents bad clipping in Chrome */
}

#content {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 20px;
}

.footer {
  position: absolute;
  bottom: 0;
  height: 20px;
  left: 0;
  right: 0;
  padding: 0 10px;
}
</style>

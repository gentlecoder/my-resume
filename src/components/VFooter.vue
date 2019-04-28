<template>
  <div>
    <a href="#" id="pause-resume" @click="pause">{{pauseContent}}</a>
    <a href="#" id="skip-animation" @click="skipAnimation">Skip Animation --></a>
    <span style="float:right">
      <a href="http://gentlecoder.cn/" target="_blank">Blog</a>
      <a href="https://segmentfault.com/u/gentlecoder" target="_blank">SegmentFault</a>
      <a href="https://codepen.io/gentlecoder/pens/forked/" target="_blank">CodePen</a>
      <a href="https://juejin.im/user/5ad543f26fb9a028b92da0ae" target="_blank">掘金</a>
      <a href="https://github.com/gentlecoder" target="_blank">GitHub</a>
    </span>
  </div>
</template>

<script>
export default {
  name: "VFooter",
  props: { pauseContent: String },
  data() {
    return {};
  },
  methods: {
    pause() {
      this.$emit("pause-animation");
    },
    skipAnimation() {
      this.$emit("skip-animation");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a:after {
  content: "";
  padding-right: 5px;
  margin-right: 5px;
  border-right-width: 1px;
  border-right-style: solid;
  border-color: inherit;
}

a:last-of-type:after {
  border: none;
}
</style>

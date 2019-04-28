const style3 = `
/**
 * We're almost done.
 */

pre:hover {
  box-shadow: 0px 0px 40px 5px rgba(255,255,255,0.4);
}

#skip-animation, #pause-resume {
  display: none;
}

/**
 * I hope you enjoyed this.
 *
 * Thanks to Jake Albaugh, who was the first (that I know of) to do
 * a page like this. Some of the autotyping and syntax highlighting
 * code is based off his work.
 *
 * See more of Jake's work at http://codepen.io/jakealbaugh/
 */

/**
 * By the way, you can edit this box. Try adding new CSS!
 *
 * For example,
 *
 * The property 'text-shadow' takes the parameters:
 * 'x', 'y', 'blur', 'color'.
 *
 * So if I wanted to mirror the values,
 * I could place a shadow 15px under it,
 * with a little blur for effect:
 */

.value {
  text-shadow: 0px 15px 1px white;
}

/**
 * It doesn't look very well.
 * 
 * let's reset it.
 */

.value {
  text-shadow: none;
}

/**
 * And of course you can also do this:
 */

h1 {
  border-bottom: none !important;
  background-image: linear-gradient(
    to right,
    #d81159,
    #e53a40 10%,
    #ffbc42 20%,
    #75d701 30%,
    #30a9de 40%,
    #d81159 50%,
    #e53a40 60%,
    #ffbc42 70%,
    #75d701 80%,
    #30a9de 90%,
    #d81159
  );
  -webkit-background-clip: text;
  color: transparent !important;
  background-size: 200% 100%;
  line-height: 40px;
  overflow: hidden;
  animation: flowlight 5s linear infinite;
}

@keyframes flowlight {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -100% 0;
  }
}

/**
 * So interesting~
 * 
 * (*^o^*) ( ´▽｀) 。・°°・(＞_＜)・°°・。
 * 
 * The most important thing is ...
 */

h1::after {
  white-space: nowrap;
  -webkit-text-stroke: 0;
  background: transparent !important;
  content: "Hire Me Please~ Hire Me Please~" !important;
  display: block !important;
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: deeppink;
  text-underline-position: under;
  position: absolute;
  top: 0;
  animation: indent 5s infinite linear !important;
}

@keyframes indent {
  100% {
      text-indent: -100px;
  }
}

/**
 * Try it out~ There's lots you can do.
 * Try playing with text sizes, shadows, animations, or just
 * break the page. I won't hold it against you.
 */

h1 {
  -webkit-text-stroke: 1px aliceblue;
}

`;
export default style3;

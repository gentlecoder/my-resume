const style0 = `
/**
 *
 * Hey. My name's YinCheng Deng. I'm a web developer.
 *
 * I build interactive websites.
 *
 * How about some live coding?
 */

/**
 * Let's begin. We start by animating... well, everything.
 */

* {
  -webkit-transition: all 1s;
}

/**
 * That didn't do much. But you'll see.
 *
 * Black on white is really boring,
 * so let's do something about it.
 */

html {
  background: #477dad;
}

/***
 * Hold on...
 */

pre, a {
  color: white;
}

/**
 * That's better. Sorry about your eyes.
 *
 * Working in this big empty space is tough.
 *
 * I'm going to make a nice area for us to work in.
 */

pre:not(:empty) {
  overflow: auto;
  background: rgb(48, 48, 48);
  border: 1px solid #ccc;
  max-height: 44.6%;
  width: 47%;
  font-size: 14px;
  font-family: monospace;
  padding: 10px 10px 20px;
  box-shadow: -4px 4px 2px 0 rgba(0,0,0,0.3);
  white-space: pre-wrap;
  outline: 0;
}

/**
 * Okay. We're going to start filling up the screen.
 * Let's get ready to do some work.
 */

#style-text {
  -webkit-transform: translateX(95%);
  position: absolute;
}

/**
 * This is good, but all the text is white!
 * Let's make it even more readable.
 */

.comment       { color: #857F6B; font-style: italic; }
.selector      { color: #E69F0F; }
.selector .key { color: #64D5EA; }
.key           { color: #64D5EA; }
.value         { color: #BE84F2; }
.value.px      { color: #F92772; }

/**
 * Now we're getting somewhere.
 * Time to get a little perspective.
 */

body {
  -webkit-perspective: 1000px;
}

#style-text {
  -webkit-transform: translateX(98.5%) rotateY(-10deg);
  -webkit-transform-origin: right;
  max-height: 94.5%;
}

/**
 * So, let's talk something about myself. That's the key of this paper.
 * The pretty colors are something not so important.
 */

pre:not(#style-text) {
  -webkit-transform: rotateY(10deg);
  -webkit-transform-origin: left;
  max-height: 94.5%;
}
`;
export default style0;

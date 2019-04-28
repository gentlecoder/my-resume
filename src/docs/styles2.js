const style2 = `
/**
 * The text could use some tweaks.
 */

.md {
  font-family: "Helvetica Neue", Helvetica, sans-serif;
}

.md h1, .md h2, .md h3, .md h4, .md h5, .md h6 {
  display: inline-block;
  color: #ddd;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
}

.md li {
  margin: 5px 0;
}

.md h2, .md h3, .md h4, .md h5, .md h6, .md ul, .md p {
  margin: 0px;
}

/**
 * That's better.
 * 
 * Let's make it more awesome.
 */

@keyframes move {
  80% {
      bottom: -25px;
      transform: translate(400px, 0);
  }
  93% {
      transform: translate(400px, 3px);
      opacity: 1;
  }
  100% {
      transform: translate(350px, 150px);
      opacity: 0;
  }
}

.md h1 {
  border-bottom: 12px solid #fff;
  transform: skewY(5deg);
  font-size: 6em;
  margin-top: 50%;
  transform: translate(0, -50%);
}

.md h1::before {
  position: absolute;
  content: "";
  bottom: -20px;
  width: 10px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
  transform: translate(0, 0);
  animation: move 7.5s ease-in-out infinite;
}

.md h1::after {
  position: absolute;
  content: "";
  left: 0;
  bottom: -20px;
  width: 10px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
  transform: translate(0, 0);
  animation: move 7.5s ease-in-out 1s infinite;
}

/**
 * It seems not so good.
 * 
 * More works need to be done.
 */

#work-mark {
  background-color: #000;
  filter: blur(4px) contrast(23);
}

/**
 * So my name is Deng YinCheng. Just Rember Me~. And if you are interested in me,
 * Please contact me, and grant me a job interview at your convenience.
 * 
 * Oh, If you want to contact me, use the phone numbers and email address on the left.
 *
 * And wait for a moment, let's repaint the information page.
 */

.md h1::before {
  display: none;
}

.md h1::after {
  display: none;
}

.md h1 {
  border-bottom: 5px solid #fff;
  transform: skewY(0deg);
  font-size: 2em;
  margin-top: 0;
}

#work-mark {
  background-color: rgb(48, 48, 48);
  filter: none;
}

/**
 * Looking forward to your contact.
 */

`;
export default style2;

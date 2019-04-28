const style1 = `
/**
 * That markdown on the left doesn't look great. Let's render it.
 */

#content {
  transform-style: preserve-3d;
  transform: perspective(800px);
}

#work-mark {
  position: absolute;
  top: 0;
}

@keyframes rotate-in {
  0% {
    transform: rotateY(-180deg);
  }
  100%{
    transform: rotateY(-350deg);
  }
}

@keyframes rotate-out {
  0% {
    transform: rotateY(0deg);
  }
  100%{
    transform: rotateY(-180deg);
  }
}

.rotate-in {
  animation: rotate-in 1s ease-in-out forwards;
}

.rotate-out {
  animation: rotate-out 1s ease-in-out forwards;
}

/**
 * Alright. We're ready.
 *
 * 3...
 * 2...
 * 1...
 *
 * .
 * ....faked you out.
 *
 * Okay here we go!
 *
 */
`;
export default style1;

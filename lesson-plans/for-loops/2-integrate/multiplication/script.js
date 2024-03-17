import { readNumber, display } from '../../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  debugger;

  // read user values
  let left=readNumber('left');
  let right=readNumber('right');

  let value=left*right;
  let displays=display('product',value)
  // use a for loop to multiply the two numbers

  // display the product
});

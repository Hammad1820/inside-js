import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  // read user values
  let character=readString('user-text');
  let repeat = readNumber('number-of-times')
  let after = '';

  // repeat the characters in the text

  for (let i=0; i>=character.length; i++) {
    for (let j=0; j<=repeat; j++) {
      after += character[i];
    }
  }
  display('repeated-output', after);
  // display the text with repeated characters
});

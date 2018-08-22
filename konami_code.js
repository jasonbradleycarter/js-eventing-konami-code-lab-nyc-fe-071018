const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

// we have an array of key codes (event.which)
// add an event listener somewhere so that when we press this, something happens
// we need to keep track of where we are in the combo

function init() {
  // tracker keeps track of where we are in the array
  const tracker = 0;
  // Write your JavaScript code inside the init() function
  const body = document.querySelector('body');
  body.addEventListener('keydown', (event) => {
    if (event.which === code[tracker]) {
      console.log('Success!');
      tracker++;
    } else {
      console.log('youve messed up :(');
      tracker = 0;
    }
  });
}

init();
const pressed = [];
   const secretCode = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'a',
  'b',
];

   // listen for keyup event and when it happens, run function
   window.addEventListener('keyup', (e) => {
     // telling us the name of the key pressed
     console.log(e.key)
     // push pressed item into an array
     pressed.push(e.key);
     // max characters we are looking for - keep array at this length
     pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
     console.log(pressed);
     // check if array contains secret code to perform action
     if(pressed.join('').includes(secretCode)) {
       console.log('THATS IT');
       cornify_add();
     }
   })
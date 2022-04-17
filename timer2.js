/*
**setup a keyboard listending event. I should learn to use KeyboardEvent constructor later.
*/
 const startListening = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data",handleUserInput);
  return stdin;
 }


 /*
 **logic of handling keyboard input
 */
const handleUserInput = function (key) {
  console.log("Event started, listening to keyboard.")
  if ("0123456789".includes(key)) {
    console.log(key);
    setTimeout(() => {
      process.stdout.write("This is supposed to be a beep blah");
    }, Number(key)*1000);
    console.log(`beeping in ${key} seconds`);  
  }
  if (key === "b") {
    process.stdout.write("This is supposed to be a beep blah");
    console.log(key);
  }
  if(key === "\u0003") {
    process.exit();
  }
}

startListening();








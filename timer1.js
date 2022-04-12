let timeArray = process.argv.slice(2);
for (let i = 0; i < timeArray.length; i++){
  if (Number(timeArray[i]) >= 0 && typeof(Number(timeArray[i])) !== "NaN") {
    setTimeout (() => {
      process.stdout.write("this is a new line" + "\n");
    },timeArray[i]);
  }
}



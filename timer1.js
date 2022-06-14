const inputNum = process.argv.slice(2);
if (inputNum === undefined) {
  return;
}
for (let char of inputNum) {
  if (char < 0 || isNaN(char)) {
    continue;
  }
  char = Number(char);
  setTimeout(() => {
    // print the char here
    process.stdout.write('\x07');

  }, char * 1000);
}
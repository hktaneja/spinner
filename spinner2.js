const spinCharacters = ['|', '/', '-', '\\', '|', '/', '-', '\\'];
let timer = 100;

for (let i = 0; i < spinCharacters.length; i++) {
  if (i === spinCharacters.length - 1) {
    setTimeout(() => {
      process.stdout.write(`\r${spinCharacters[i]}\n`);
    }, timer);
  } else {
    setTimeout(() => {
      process.stdout.write(`\r${spinCharacters[i]}   `);
    }, timer);
  }
  timer += 200
}
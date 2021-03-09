const sentence = "hello there from lighthouse labs";

const delay = (sentence) => {
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
      if (i === sentence.length - 1) {
        process.stdout.write("\n");
      }
    }, i * 50);
  }
};

console.log(delay(sentence));

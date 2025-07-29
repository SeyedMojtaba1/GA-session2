function say_hello() {
  return "Hello, World!";
}

if (require.main === module) {
  console.log(say_hello());
}

module.exports = say_hello;

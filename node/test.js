const say_hello = require("./index");

if (say_hello() === "Hello, World!") {
  console.log("Test passed!");
  process.exit(0);
} else {
  console.log("Test failed!");
  process.exit(1);
}

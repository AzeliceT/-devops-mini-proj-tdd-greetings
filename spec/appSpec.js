import { Main } from "../src/app.js";

describe("A suite of tests for the greet function of the main class", function () {
  it("greet function should return 'Hello, Bob.' when given 'Bob'", function () {
    let name = "Bob";
    let main = new Main();
    let result = main.greet(name);

    expect(result).toBe(`Hello, ${name}.`);
  });

  it("greet function should return 'Hello, my friend.' when given null, undefined or empty", function () {
    let main = new Main();
    let result = main.greet();

    expect(result).toBe("Hello, my friend.");
  });

  it("greet function should return 'HELLO, JERRY!' when given 'JERRY'", function () {
    let name = "JERRY";
    let main = new Main();
    let result = main.greet(name);
    expect(result).toBe(`HELLO, ${name.toUpperCase()}!`);
  });

  it("greet function should return 'Hello, Jill and Jane.' when given ['Jill', 'Jane']", function () {
    let name = ["Jill", "Jane"];
    let main = new Main();
    let result = main.greet(name);

    expect(result).toBe(`Hello, ${name[0]} and ${name[1]}.`);
  });

  it("greet function should return 'Hello, Amy, Brian and Charlotte.' when given ['Amy', 'Brian', 'Charlotte']", function () {
    let name = ["Amy", "Brian", "Charlotte"];
    let main = new Main();
    let result = main.greet(name);

    expect(result).toBe(`Hello, ${name[0]}, ${name[1]} and ${name[2]}.`);
  });

  it("greet function should return 'Hello, Amy and Charlotte. AND HELLO BRIAN !' when given ['Amy', 'BRIAN', 'Charlotte']", function () {
    let name = ["Amy", "BRIAN", "Charlotte"];

    let main = new Main();
    let result = main.greet(name);

    expect(result).toBe(
      `Hello, ${name[0]} and ${name[2]}. AND HELLO ${name[1]} !`
    );
  });

  it("greet function should return 'Bonjour, Marie.' when given ['Marie','fr']", function () {
    let name = ["Marie", "fr"];

    let main = new Main();
    let result = main.greet(name);

    expect(result).toBe(`Bonjour, ${name[0]}.`);
  });
});

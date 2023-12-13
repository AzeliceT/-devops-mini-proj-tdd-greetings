const greet = require("../src/app")

describe("A suite of tests for the greet function of the main class", function () {
    test("greet function should return 'Hello, Bob.' when given 'Bob'", function () {
        const name = "Bob"
        const result = greet(name)

        expect(result).toBe(`Hello, ${name}.`)
    })

    test("greet function should return 'Hello, my friend.' when given null, undefined or empty", function () {
        const result = greet()

        expect(result).toBe(`Hello, my friend.`)
    })

    test("greet function should return 'HELLO, JERRY!' when given 'JERRY'", function () {
        const name = "JERRY"
        const result = greet(name)
        expect(result).toBe(`HELLO, ${name.toUpperCase()}!`)
    })

    test("greet function should return 'Hello, Jill and Jane.' when given ['Jill', 'Jane']", function () {
        const name = ["Jill", "Jane"]
        const result = greet(name)

        expect(result).toBe(`Hello, ${name[0]} and ${name[1]}.`)
    })

    test("greet function should return 'Hello, Amy, Brian and Charlotte.' when given ['Amy', 'Brian', 'Charlotte']", function () {
        const name = ["Amy", "Brian", "Charlotte"]
        const result = greet(name)

        expect(result).toBe(`Hello, ${name[0]}, ${name[1]} and ${name[2]}.`)
    })

    test("greet function should return 'Hello, Amy and Charlotte. AND HELLO BRIAN !' when given ['Amy', 'BRIAN', 'Charlotte']", function () {
        const name = ["Amy", "BRIAN", "Charlotte"]

        const result = greet(name)

        expect(result).toBe(
            `Hello, ${name[0]} and ${name[2]}. AND HELLO ${name[1]} !`
        )
    })

    test("greet function should return 'Bonjour, Marie.' when given ['Marie','fr']", function () {
        const name = ["Marie", "fr"]

        const result = greet(name)

        expect(result).toBe(`Bonjour, ${name[0]}.`)
    })
})

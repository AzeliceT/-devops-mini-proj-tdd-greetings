import {Main} from '../src/app.js';

describe("A suite of tests for the greet function of the main class", function(){

    it("greet function should return 'Hello, Bob.' when given 'Bob'", function(){

        let name = "Bob";
        let main = new Main();
        let result = main.greet(name);

        expect(result).toBe(`Hello, ${name}.`);
    });
});
"use strict";
describe("Function", () => {
    function identity(value) {
        return value;
    }
    ;
    it("should support", () => {
        let result1 = identity("Hallo test");
        console.log(result1);
        let result2 = identity(1234);
        console.log(result2);
    });
});

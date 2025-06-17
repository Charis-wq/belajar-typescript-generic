"use strict";
describe("Class Generic", () => {
    class Box {
        constructor(content) {
            this.content = content;
            this.content = content;
        }
        getContact() {
            return this.content;
        }
    }
    it("should support", () => {
        let numberBox = new Box(12345);
        console.log(numberBox.getContact());
        let stringBox = new Box("Abdul Charis");
        console.log(stringBox.getContact());
    });
});

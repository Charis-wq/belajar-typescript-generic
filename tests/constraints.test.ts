describe("Constraints Generic", () => {
    function logLength<T extends { length: number }>(item: T): void {
        console.log(item.length)
    }
    it("should support", () => {
        logLength("Hello");
        logLength([1,2,3,4,5]);
        //logLength(123456); //output error

    });
});
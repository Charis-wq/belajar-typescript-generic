describe("Default Generic", () => {
    function creatArray<T = string>(length: number, value: T): T[] {
        return Array(length).fill(value);

    }
    it("should support", () => {
        const string = creatArray(3, "Abdul");
        console.log(string);

        const number = creatArray(3, 23);
        console.log(number);


    });
});
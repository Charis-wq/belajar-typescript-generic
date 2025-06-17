describe("Function", () => {
    function identity<T>(value: T): T {
        return value;
    };
    it("should support", () => {
        let result1 = identity<string>("Hallo test");
        console.log(result1);

        let result2 = identity<number>(1234);
        console.log(result2);

    });
});
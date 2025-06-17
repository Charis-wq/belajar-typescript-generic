describe("Generic Interface", () => {
    interface Person<T, U, V> {
        name: T;
        age: U;
        married: V;

    }
    it("should support", () => {
        const person: Person<string, number, boolean> = {
            name: "Abdul",
            age: 30,
            married: false
        };

        console.log(person.name);
        console.log(person.age);
        console.log(person.married);

    })
})
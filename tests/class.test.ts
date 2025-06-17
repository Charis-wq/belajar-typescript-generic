describe("Class Generic", () => {
    class Box<T> {

        constructor( public content: T) {
            this.content = content;

        }

        getContact(): T {
            return this.content;
        }
    }
    it("should support", () => {
        let numberBox = new Box<number>(12345);
        console.log(numberBox.getContact());

        let stringBox = new Box<string>("Abdul Charis");
        console.log(stringBox.getContact());


    });
});
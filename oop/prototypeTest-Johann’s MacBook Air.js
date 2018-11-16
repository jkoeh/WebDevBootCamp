
describe("Prototype", function () {
    it("person test", function () {
       
        var person = new Person("Elie", "Schoppik", "purple", 34)
        var anotherPerson = new Person();
        expect(person.addToFamily(anotherPerson)).toBe(1);
        expect(person.addToFamily(anotherPerson)).toBe(1);
        expect(person.family.length).toBe(1);
        expect(person.addToFamily("test")).toBe(1);
        expect(person.addToFamily({})).toBe(1);
        expect(person.addToFamily([])).toBe(1);
        expect(person.addToFamily(false)).toBe(1);
        expect(person.family.length).toBe(1);
    });
   

});
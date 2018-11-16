describe("Constructor", function () {
    it("person construct test", function () {
        var person = new Person('john', 'koeh', 'navyblue', 7);
        expect(person.firstName).toBe('john');
        expect(person.lastName).toBe('koeh');
        expect(person.favoriteColor).toBe('navyblue');
        expect(person.favoriteNumber).toBe(7);

    });
    it("multiplyFavoriteNumber", function () {
        var person = new Person('john', 'koeh', 'navyblue', 7);
        expect(person.multiplyFavoriteNumber(2)).toBe(14);        
    });
    it("inheritance", function () {
        var child = new Child('john', 'koeh', 'navyblue', "sushi");
        expect(child.firstName).toBe('john');
        expect(child.lastName).toBe('koeh');
        expect(child.favoriteColor).toBe('navyblue');
        expect(child.favoriteFood).toBe("sushi");
      
    });

});

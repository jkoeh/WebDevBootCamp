describe("closure", function () {
    it("specialMultiply", function () {
        var result = specialMultiply(3,4);
        expect(result).toEqual(12);
        result = specialMultiply(3)(4);
        expect(result).toEqual(12);
        result = specialMultiply(3);
        expect(result).toEqual(jasmine.any(Function));

    });    

});

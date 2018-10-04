describe("arrowFunction", function () {
    it("tripleAndFilter", function () {
        var result = tripleAndFilter([1, 2, 2, 2, 2, 2, 5]);
        expect(result).toEqual([15]);

    });
    it("doubleOddNumbers", function(){
        var result = doubleOddNumbers([1, 2, 2, 2, 2, 2, 5]);
        expect(result).toEqual([2, 10]);
    })
   

});

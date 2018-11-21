describe("ES2015", function () {
    it("allArefinite", function () {
        var finiteNums = [4, -3, 2.2]
        var finiteNumsExceptOne = [4, -3, 2.2, NaN]
        expect(areAllNumbersFinite(finiteNums)).toBe(true);
        expect(areAllNumbersFinite(finiteNumsExceptOne)).toBe(false);
    });



});

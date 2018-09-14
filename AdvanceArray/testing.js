describe("someAndEvery", function () {
    it("Postive Test", function () {
        var result = hasOddNumber([1, 2, 2, 2, 2, 2, 4]);
        expect(result).toBe(true);

    });
    it("Negative Tes", function () {
        var result = hasOddNumber([2, 2, 2, 2, 2, 4]);
        expect(result).toBe(false);
    });

});

describe("reduce", function () {
    it("extractValue", function () {
        var arr = [{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }]
        expect(extractValue(arr, 'name')).toEqual(['Elie', 'Tim', 'Matt', 'Colt']);
    });
    it("vowelCount", function () {
        expect(vowelCount('Elie')).toEqual({ e: 2, i: 1 });
        expect(vowelCount('Tim')).toEqual({ i: 1 });
        expect(vowelCount('Matt')).toEqual({ a: 1 });
        expect(vowelCount('hmmm')).toEqual({});
        expect(vowelCount('I Am awesome and so are you')).toEqual({ i: 1, a: 4, e: 3, o: 3, u: 1 });
    });
    it("addKeyAndValue(arr, key, value)", function () {
        var arr = [{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }];

        var result = addKeyAndValue(arr, 'title', 'Instructor');
        var expectedResult =
            [
                { title: 'Instructor', name: 'Elie' },
                { title: 'Instructor', name: 'Tim' },
                { title: 'Instructor', name: 'Matt' },
                { title: 'Instructor', name: 'Colt' }
            ];
        expect(result).toEqual(expectedResult);
    });
    it("partition(arr, callback)", function () {
        function isEven(val) {
            return val % 2 === 0;
        }
        var arr = [1, 2, 3, 4, 5, 6, 7, 8];
        var result = partition(arr, isEven);
        var expectedresult = [[2, 4, 6, 8], [1, 3, 5, 7]];
        expect(result).toEqual(expectedresult);

        function isLongerThanThreeCharacters(val) {
            return val.length > 3;
        }

        var names = ['Elie', 'Colt', 'Tim', 'Matt'];

        result = partition(names, isLongerThanThreeCharacters);
        expectedresult = [['Elie', 'Colt', 'Matt'], ['Tim']]
        expect(result).toEqual(expectedresult);
    })
});


describe("destructuring", function () {
    it("displayStudentInfo", function () {
        var result = displayStudentInfo({first: 'Elie', last:'Schoppik'});
        expect(result).toBe('Your full name is Elie Schoppik');
    });
    it("printFullName", function () {
        var result = printFullName({first: 'Elie', last:'Schoppik'});
        expect(result).toBe('Your full name is Elie Schoppik');
    });
    it("createStudent", function () {
        expect(createStudent()).toBe('The student likes JavaScript and ES2015');
        expect(createStudent({likesES2015:false})).toBe('The student likes JavaScript!');
        expect(createStudent({likesJavaScript:false})).toBe('The student likes ES2015!');
        expect(createStudent({likesJavaScript:false, likesES2015:false})).toBe('The student does not like much...');
    });
    it("reverseArray", function () {
        expect(reverseArray([1,2,3,4,5])).toEqual([5,4,3,2,1])
        expect(reverseArray([1,2])).toEqual([2,1])
        expect(reverseArray([])).toEqual([])
        expect(reverseArray([1,2,3,4,5,6,7,8,9,10])).toEqual([10,9,8,7,6,5,4,3,2,1])
    });
    
    

});

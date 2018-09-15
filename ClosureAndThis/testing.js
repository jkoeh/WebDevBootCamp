describe("closure", function () {
    it("specialMultiply", function () {
        var result = specialMultiply(3, 4);
        expect(result).toEqual(12);
        result = specialMultiply(3)(4);
        expect(result).toEqual(12);
        result = specialMultiply(3);
        expect(result).toEqual(jasmine.any(Function));

    });

});
describe("call_apply_reduce", function () {
    it("arrayFrom", function () {
        var divs = document.getElementsByTagName('divs');
        var divArray = arrayFrom(divs);
        var newArray = divArray.map(function (val) {
            return val;
        });
        expect(divArray).toEqual(newArray);

    });
    it("sumEvenArguments", function () {
        expect(sumEvenArguments(1, 2, 3, 4)).toBe(6);
        expect(sumEvenArguments(1, 2, 6)).toBe(8);
        expect(sumEvenArguments(1, 2)).toBe(2);

    });
    it("invokeMax", function () {
        function add(a, b) {
            return a + b
        }

        var addOnlyThreeTimes = invokeMax(add, 3);
        expect(addOnlyThreeTimes(1, 2)).toBe(3);
        expect(addOnlyThreeTimes(2, 2)).toBe(4);
        expect(addOnlyThreeTimes(1, 2)).toBe(3);
        expect(addOnlyThreeTimes(1, 2)).toBe("Maxed Out!");

    });
    it("addOnce", function () {
        function add(a, b) {
            return a + b
        }

        var addOnce = once(add, this);
        expect(addOnce(2, 2)).toBe(4);
        expect(addOnce(2, 2)).toBe(undefined)
        expect(addOnce(2, 2)).toBe(undefined)

        function doMath(a, b, c) {
            return this.firstName + " adds " + (a + b + c)
        }

        var instructor = { firstName: "Elie" }
        var doMathOnce = once(doMath, instructor);
        expect(doMathOnce(1, 2, 3)).toBe("Elie adds 6");
        expect(doMathOnce(1, 2, 3)).toBe(undefined);
    });
    it("bind", function () {
        function firstNameFavoriteColor(favoriteColor) {
            return this.firstName + "'s favorite color is " + favoriteColor
        }

        var person = {
            firstName: 'Elie'
        }

        var bindFn = bind(firstNameFavoriteColor, person);
        bindFn('green') // "Elie's favorite color is green"

        var bindFn2 = bind(firstNameFavoriteColor, person, 'blue');
        bindFn2('green') // "Elie's favorite color is blue" 

        function addFourNumbers(a, b, c, d) {
            return a + b + c + d;
        }

        expect(bind(addFourNumbers, this, 1)(2, 3, 4)).toBe(10);// 10
        expect(bind(addFourNumbers, this, 1, 2)(3, 4)).toBe(10);// 10
        expect(bind(addFourNumbers, this, 1, 2, 3)(4)).toBe(10);// 10
        expect(bind(addFourNumbers, this, 1, 2, 3, 4)()).toBe(10); // 10
        expect(bind(addFourNumbers, this)(1, 2, 3, 4)).toBe(10);// 10
        expect(bind(addFourNumbers, this)(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toBe(10); // 10
    });

    it("flip", function () {
        function personSubtract(a,b,c){
            return this.firstName + " subtracts " + (a-b-c);
        }
        
        var person = {
            firstName: 'Elie'
        }
        
        var flipFn = flip(personSubtract, person);
        expect(flipFn(3,2,1)).toBe("Elie subtracts -4");
        
        var flipFn2 = flip(personSubtract, person, 5,6);
        expect(flipFn2(7,8)).toBe("Elie subtracts -4");
        
        function subtractFourNumbers(a,b,c,d){
            return a-b-c-d;
        }
    
        expect(flip(subtractFourNumbers,this,1)(2,3,4)).toBe(-2);
        expect(flip(subtractFourNumbers,this,1,2)(3,4)).toBe(-2);
        expect(flip(subtractFourNumbers,this,1,2,3)(4)).toBe(-2);
        expect(flip(subtractFourNumbers,this,1,2,3,4)()).toBe(-2);
        expect(flip(subtractFourNumbers,this)(1,2,3,4)).toBe(-2);
        expect(flip(subtractFourNumbers,this,1,2,3)(4,5,6,7)).toBe(-2);
        expect(flip(subtractFourNumbers,this)(1,2,3,4,5,6,7,8,9,10)).toBe(-2);
        expect(flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10)).toBe(-22);
    });
});
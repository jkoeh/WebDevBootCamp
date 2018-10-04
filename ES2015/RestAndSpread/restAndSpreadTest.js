describe("RestAndSpread", function () {
    it("smallestValue", function () {
      
        expect(smallestValue(4,1,12,0)).toBe(0);
        expect(smallestValue(5,4,1,121)).toBe(1);
        expect(smallestValue(4,2)).toBe(2);
        expect(smallestValue(99,12321,12,2)).toBe(2);

    });
    it("placeIndMid", function(){
        expect(placeInMiddle([1,2,6,7],[3,4,5])).toEqual([1,2,3,4,5,6,7]);
        expect(placeInMiddle([1],[3,4,5])).toEqual([3,4,5,1]);
        expect(placeInMiddle([1,6],[2,3,4,5])).toEqual([1,2,3,4,5,6]);
        expect(placeInMiddle([],[2,3,4,5])).toEqual([2,3,4,5]);
    })
   
    it("joinArray", function(){
        expect(joinArrays([1],[2],[3])).toEqual([1,2,3]);
        expect(joinArrays([1],[2],[3],[1],[2],[3])).toEqual([1,2,3,1,2,3]);
        expect(joinArrays([1,2,3],[4,5,6],[7,8,9])).toEqual([1,2,3,4,5,6,7,8,9]);
        expect(joinArrays([1],[3],[0],[7])).toEqual([1,3,0,7]);
    })
    it("sumEvenArgs", function(){
        expect(sumEvenArgs(1,2,3,4)).toEqual(6);
        expect(sumEvenArgs(1,2,6)).toEqual(8);
        expect(sumEvenArgs(1,2)).toEqual(2);
    })
    it("flip", function(){
        function personSubtract(a,b,c){
            return this.firstName + " subtracts " + (a-b-c);
        }
        
        var person = {
            firstName: 'Elie'
        }
        var subtractFourNumbers = function(a, b, c,d){
            return a-b-c-d;
        }
        var flipFn = flip(personSubtract, person);
        expect(flipFn(3,2,1)).toBe("Elie subtracts -4");
        
        var flipFn2 = flip(personSubtract, person, 5,6);
        expect(flipFn2(7,8)).toBe("Elie subtracts -4");
    
        expect(flip(subtractFourNumbers,this,1)(2,3,4)).toBe(-2);
        expect(flip(subtractFourNumbers,this,1,2)(3,4)).toBe(-2);
        expect(flip(subtractFourNumbers,this,1,2,3)(4)).toBe(-2);
        expect(flip(subtractFourNumbers,this,1,2,3,4)()).toBe(-2);
        expect(flip(subtractFourNumbers,this)(1,2,3,4)).toBe(-2);
        expect(flip(subtractFourNumbers,this,1,2,3)(4,5,6,7)).toBe(-2);
        expect(flip(subtractFourNumbers,this)(1,2,3,4,5,6,7,8,9,10)).toBe(-2);
        expect(flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10)).toBe(-22);
    })
    it("bind", function(){
        function firstNameFavoriteColor(favoriteColor){
            return this.firstName + "'s favorite color is " + favoriteColor
        }
        
        var person = {
            firstName: 'Elie'
        }
        
        var bindFn = bind(firstNameFavoriteColor, person);
        expect(bindFn('green')).toBe("Elie's favorite color is green");
        
        var bindFn2 = bind(firstNameFavoriteColor, person, 'blue');
        expect(bindFn2('green')).toBe("Elie's favorite color is blue");
        
        function addFourNumbers(a,b,c,d){
            return a+b+c+d;
        }
    
        expect(bind(addFourNumbers,this,1)(2,3,4)).toBe(10)
        expect(bind(addFourNumbers,this,1,2)(3,4)).toBe(10)
        expect(bind(addFourNumbers,this,1,2,3)(4)).toBe(10)
        expect(bind(addFourNumbers,this,1,2,3,4)()).toBe(10)
        expect(bind(addFourNumbers,this)(1,2,3,4)).toBe(10)
        expect(bind(addFourNumbers,this)(1,2,3,4,5,6,7,8,9,10)).toBe(10)
    })
});

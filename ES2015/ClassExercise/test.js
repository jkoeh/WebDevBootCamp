describe("destructuring", function () {
    it("Vehicle", function () {
        var vehicle = new Vehicle("Tractor", "John Deere", 1999)
        expect(vehicle.toString()).toBe('The make, model, and year are Tractor John Deere 1999');
    });
    
    
    

});

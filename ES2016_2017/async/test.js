describe("async", function () {
    it("hastMostFollowers", function () {
        let winner;
        hasMostFollowers('elie','tigarcia','colt').then(function(data){
            console.log(data);
        });
        expect(winner).toBe("Colt has the most followers with 424");
    });
});

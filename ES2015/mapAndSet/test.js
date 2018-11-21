describe("MessageBoard", function () {
    it("new upMessageBoard", function () {
        var m = new MessageBoard;
        expect(m.hasOwnProperty('messages')).toBe(true);
        expect(m.hasOwnProperty('id')).toBe(true);
        expect(m.id).toBe(1);
    });
    it("add Message", function () {
        var m = new MessageBoard;

        expect(m.addMessage('hello')).toBe(m);
        expect(m.messages.size).toBe(1);
        expect(m.addMessage('awesome!')).toBe(m);
        expect(m.addMessage('awesome!').addMessage('nice!').addMessage('cool!')).toBe(m);
    });
    it("find Message by id", function () {
        var m = new MessageBoard
        m.addMessage('hello!')
        m.addMessage('hi!')
        m.addMessage('whats up?')
        expect(m.findMessageById(1)).toBe('hello!');
        expect(m.findMessageById(2)).toBe('hi!');
        expect(m.findMessageById(3)).toBe('whats up?');
        expect(m.findMessageById(4)).toBe(undefined);
        expect(m.findMessageById()).toBe(undefined);
    });
    it("find Message by value", function () {
        var m = new MessageBoard
        m.addMessage('hello!')
        m.addMessage('hi!')
        m.addMessage('whats up?')
        expect(m.findMessageByValue('hello!')).toBe('hello!');
        expect(m.findMessageByValue('hi!')).toBe('hi!');
        expect(m.findMessageByValue('whats up?')).toBe('whats up?');
        expect(m.findMessageByValue('nothing here')).toBe(undefined);
        expect(m.findMessageByValue()).toBe(undefined);
    });
    it("delete Message by id", function () {
        var m = new MessageBoard
        m.addMessage('hello!')
        m.addMessage('hi!')
        m.addMessage('whats up?')
        m.removeMessage(1)
        m.removeMessage(2)
        expect(m.messages.size).toBe(1)

    });
    it("map conversion", function () {
        var m = new MessageBoard
        m.addMessage('hello!')
        m.addMessage('hi!')
        m.addMessage('whats up?')
        expect(m.messagesToArray()).toEqual(['hello!', 'hi!', 'whats up?']);

    });
    it("unique num", function () {
        expect(uniqueValues([1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6])).toBe(6);
    });
    it("has dup", function () {
        expect(hasDuplicates([1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6])).toBe(true);
        expect(hasDuplicates([1, 2, 3, 4, 5, 6])).toBe(false);
        expect(hasDuplicates([])).toBe(false);
    });
    it("count pairs", function () {
        expect(countPairs([8, 2, 6, 4, 10, 0], 10)).toBe(3);
        expect(countPairs([8, 2], 10)).toBe(1);
        expect(countPairs([1, 2], 10)).toBe(0);
        expect(countPairs([1, 2, 3, 4, 5], 10)).toBe(0);
        expect(countPairs([], 10)).toBe(0);
        expect(countPairs([5, 4, -10, 6, -20, 16], -4)).toBe(2);
        expect(countPairs([0, -4], -4)).toBe(1);
    });



});

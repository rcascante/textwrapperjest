//Text Wrapper
// A function that receives any text and
// a given width and returns the same
//text with \n

//TODO list
// textWrapper("hello", 7) = > "hello"
// textWrapper("hello", 2) = > "he\nllo"
// textWrapper("hello world", 7) = > "hello\nworld"
// textWrapper("hello world mates", 7) = > "hello\nworld\nmates"

function textWrapper() {
    return "hello";
}

describe('the test', () => {
    beforeEach((done) => {
        done();
    });
    it('should return the same text if it fits', () => {
        expect(textWrapper("hello", 7)).toBe("hello");
    });

    it('should return different lines if it does not fit', () => {
        expect(textWrapper("hello", 2)).toBe("he\nllo");
    });
});
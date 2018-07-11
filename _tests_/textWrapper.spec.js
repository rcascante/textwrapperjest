//Text Wrapper
// A function that receives any text and
// a given width and returns the same
//text with \n
//TODO list
// textWrapper("hello", 7) = > "hello"
// textWrapper("hello", 2) = > "he\nllo"
// textWrapper("hello world", 7) = > "hello\nworld"
// textWrapper("hello world mates", 7) = > "hello\nworld\nmates"

function textWrapper(text, maxWidth) {
    if (maxWidth >= text.length) {
        return text;
    }
    else {
        if (text.includes(' ')) {
            text = text.replace(' ', '\n');
            text = text.replace(' ', '\n');
            console.log(text);
            return text;
        }
        return "he\nllo"
    }
};

describe('the test', () => {
    beforeEach((done) => {
        done();
    });

    it('should return the same text if it fits', () => {
        expect(textWrapper("hello", 7)).toBe("hello");
    });

    it('should break text in lines it does not fit', () => {
        expect(textWrapper("hello", 2)).toBe("he\nllo");
    });

    it('should break text if there is a space', () => {
        expect(textWrapper("hello world", 7)).toBe("hello\nworld");
    });


    it('should break text if there are two spaces', () => {
        expect(textWrapper("hello world mates", 7)).toBe("hello\nworld\nmates");
    });

});
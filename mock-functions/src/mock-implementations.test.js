jest.mock('./mock-implementations'); // this happens automatically with automocking
const foo = require('./mock-implementations');

test('foo is a mock function', () => {
    // foo is a mock function
    foo.mockImplementation(() => 42);
    expect(foo()).toStrictEqual(42);
});

describe('mockImplementationOnce', () => {
    test('myMockFn 1', () => {
        const myMockFn = jest
            .fn()
            .mockImplementationOnce(cb => cb(null, true))
            .mockImplementationOnce(cb => cb(null, false));

        const results = [];
        myMockFn((err, val) => results.push(val)); // true
        myMockFn((err, val) => results.push(val)); // false

        expect(results).toEqual([true, false]);
    });

    test('myMockFn 2', () => {
        const myMockFn = jest
            .fn(() => 'default')
            .mockImplementationOnce(() => 'first call')
            .mockImplementationOnce(() => 'second call');

        const results = [myMockFn(), myMockFn(), myMockFn(), myMockFn()];
        expect(results).toEqual(['first call', 'second call', 'default', 'default']);
    });
});
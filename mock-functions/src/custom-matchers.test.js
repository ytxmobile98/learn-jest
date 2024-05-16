describe('custom matchers', () => {
    const mockFunc = jest.fn();

    const arg1 = 'arg1';
    const arg2 = 'arg2';

    test('toHaveBeenCalled', () => {
        mockFunc();
        expect(mockFunc).toHaveBeenCalled();
    });

    test('toHaveBeenCalledWith', () => {
        mockFunc(arg1, arg2);
        expect(mockFunc).toHaveBeenCalledWith(arg1, arg2);
    });

    test('toHaveBeenLastCalledWith', () => {
        mockFunc();
        mockFunc(arg1, arg2);
        expect(mockFunc).toHaveBeenLastCalledWith(arg1, arg2);
    });

    test('toMatchSnapshot', () => {
        mockFunc();
        expect(mockFunc).toMatchSnapshot();
    });
});

describe('custom matchers (inspecting the `.mock` property)', () => {
    const mockFunc = jest.fn();

    const arg1 = 'arg1';
    const arg2 = 'arg2';

    test('called at least once', () => {
        mockFunc();
        expect(mockFunc.mock.calls.length).toBeGreaterThan(0);
    });

    test('called with specific arguments', () => {
        mockFunc(arg1, arg2);
        expect(mockFunc.mock.calls).toContainEqual([arg1, arg2]);
    });

    test('the last call was called with specific arguments', () => {
        mockFunc();
        mockFunc(arg1, arg2);
        expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1]).toEqual([arg1, arg2]);
    });

    test('first arg of last call should be 42', () => {
        mockFunc(42, 43);
        expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1][0]).toBe(42);
    });

    test('check mock snapshot', () => {
        // A snapshot will check that a mock was invoked the same number of times,
        // in the same order, with the same arguments. It will also assert on the name.

        const mockFunc = jest.fn().mockName('a mock name');

        mockFunc(arg1, arg2);

        expect(mockFunc.mock.calls).toEqual([[arg1, arg2]]);
        expect(mockFunc.getMockName()).toBe('a mock name');
    });
});
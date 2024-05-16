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
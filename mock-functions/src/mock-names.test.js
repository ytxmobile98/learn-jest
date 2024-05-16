function removeAnsiEsc(str) {
    return str.replace(/\u001b[^m]*?m/g, '');
}

test('mockName', () => {
    const myMockFn = jest
        .fn()
        .mockReturnValue('default')
        .mockImplementation(scalar => 42 + scalar)
        .mockName('add42');

    try {
        expect(myMockFn).toHaveBeenCalled();
    } catch (error) {
        expect(removeAnsiEsc(error.message)).toContain('expect(add42).toHaveBeenCalled');
    }
});
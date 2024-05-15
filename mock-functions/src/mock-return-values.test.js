test('mock return values', () => {
    const myMock = jest.fn();
    expect(myMock()).toBeUndefined();

    myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

    expect([myMock(), myMock(), myMock(), myMock()]).toEqual([10, 'x', true, true]);
});

test('continuation passing', () => {
    const filterTestFn = jest.fn();

    // Make the mock return `true` for the first call,
    // and `false` for the second call
    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

    const result = [11, 12].filter(num => filterTestFn(num));

    expect(result).toEqual([11]);

    expect(filterTestFn.mock.calls[0][0]).toBe(11);
    expect(filterTestFn.mock.calls[1][0]).toBe(12);
});
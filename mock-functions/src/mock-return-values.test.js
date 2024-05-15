test('mock return values', () => {
    const myMock = jest.fn();
    expect(myMock()).toBeUndefined();

    myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

    expect([myMock(), myMock(), myMock(), myMock()]).toEqual([10, 'x', true, true]);
});
test.only('this will be the only test that runs', () => {
    expect(() => {
        expect(true).toBe(false);
    }).toThrow();
});

test('this test will not run', () => {
    expect('A').toBe('A');
});
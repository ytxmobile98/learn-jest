describe('mock property', () => {
    test('myMock1', () => {
        const myMock1 = jest.fn();
        const a = new myMock1();

        expect(myMock1.mock.instances).toHaveLength(1);
        expect(myMock1.mock.instances).toContain(a);
    });

    test('myMock2', () => {
        const myMock2 = jest.fn();
        const b = {};
        const bound = myMock2.bind(b);
        bound();

        expect(myMock2.mock.contexts).toHaveLength(1);
        expect(myMock2.mock.contexts).toContain(b);
    });
});
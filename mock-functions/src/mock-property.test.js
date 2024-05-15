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

describe('mock members', () => {
    test('mock members 1', () => {
        const someMockFunction = jest.fn((a, b) => 'return value');
        const element = undefined;

        someMockFunction('first arg', 'second arg');

        // The function was called exactly once
        expect(someMockFunction.mock.calls).toHaveLength(1);

        // The first arg of the first call to the function was 'first arg'
        expect(someMockFunction.mock.calls[0][0]).toBe('first arg');

        // The second arg of the first call to the function was 'second arg'
        expect(someMockFunction.mock.calls[0][1]).toBe('second arg');

        // The return value of the first call to the function was 'return value'
        expect(someMockFunction.mock.results[0].value).toBe('return value');

        // The function was called with a certain `this` context: the `element` object.
        expect(someMockFunction.mock.contexts[0]).toBe(element);
    });

    test('mock members 2', () => {
        const someMockFunction = jest.fn(function() {
            this.name = 'test';
        });

        new someMockFunction();
        new someMockFunction('test');

        // This function was instantiated exactly twice
        expect(someMockFunction.mock.instances.length).toBe(2);

        // The object returned by the first instantiation of this function
        // had a `name` property whose value was set to 'test'
        expect(someMockFunction.mock.instances[0].name).toBe('test');

        // The first argument of the last call to the function was 'test'
        expect(someMockFunction.mock.lastCall[0]).toBe('test');
    });
});
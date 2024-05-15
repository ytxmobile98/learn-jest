import defaultExport, { bar, foo } from './mock-partials';

jest.mock('./mock-partials', () => {
    const originalModule = jest.requireActual('./mock-partials');

    //Mock the default export and named export 'foo'
    return {
        __esModule: true,
        ...originalModule,
        default: jest.fn(() => 'mocked baz'),
        foo: 'mocked foo',
    };
});

test('should do a partial mock', () => {
    const defaultExportResult = defaultExport();
    expect(defaultExportResult).toBe('mocked baz');
    expect(defaultExport).toHaveBeenCalled();

    expect(foo).toBe('mocked foo');
    expect(bar()).toBe('bar');
});
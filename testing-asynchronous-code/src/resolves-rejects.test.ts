import { fetchData, fetchDataRejects, errorText, text, fetchDataWithCallback } from './fetch';

test('the data is peanut butter', () => {
    return expect(fetchData()).resolves.toBe(text);
});

test('the fetch fails with an error', () => {
    return expect(fetchDataRejects()).rejects.toMatch(errorText);
});
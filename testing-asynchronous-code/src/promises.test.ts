import { fetchData, text } from './fetch';

test('the data is peanut butter', () => {
    return fetchData().then(data => {
        expect(data).toBe(text);
    });
});
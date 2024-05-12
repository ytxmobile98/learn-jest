import { fetchData, fetchDataRejects, errorText, text } from './fetch';

test(`the data is peanut butter`, async () => {
    const data = await fetchData();
    expect(data).toBe(text);
});

test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
        await fetchDataRejects();
    } catch (error) {
        expect(error).toMatch(errorText);
    }
});

test('the data is peanut butter', async () => {
    await expect(fetchData()).resolves.toBe(text);
});

test('the fetch fails with an error', async () => {
    await expect(fetchDataRejects()).rejects.toMatch(errorText);
});
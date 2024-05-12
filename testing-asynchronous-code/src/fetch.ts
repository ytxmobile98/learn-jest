export const text = 'peanut butter';
export const errorText = 'error';

export function fetchData() {
    return Promise.resolve(text);
}

export function fetchDataRejects() {
    return Promise.reject(errorText);
}

export async function fetchDataWithCallback(callback: (error?: Error, data?: any) => void) {
    const data = await fetchData();
    callback(undefined, data);
}
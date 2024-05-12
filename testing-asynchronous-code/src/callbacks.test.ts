import { fetchDataWithCallback, text } from './fetch';

test('the data is peanut butter', done => {
    function callback(error?: Error, data?: any) {
        if (error) {
            done(error);
            return;
        }
        try {
            expect(data).toBe(text);
            done();
        } catch (error) {
            done(error);
        }
    }

    fetchDataWithCallback(callback);
});
import { test, expect } from "@playwright/test";
test.only('array test', async () => {
    const arr = [1, 2, 3, 4, 5];
    const expectedArr = [1, 2, 3, 4, 5];




    
    expect(arr).toEqual(expectedArr);
});

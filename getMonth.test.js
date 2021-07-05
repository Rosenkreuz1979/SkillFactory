
import { getMonth }  from './testcases/getmonth.js';

describe ('Checking Function of returning Month', () => {
    it('If a month is 2 returs "February"',() =>{
        expect(getMonth(2)).toBe("February"); //success
    }),
    it('If a month is 13 returns "Undefined"',()=>{
        expect(getMonth(13)).toBe("undefined"); //corner-case
    }),
    it('If a string is passed as a month number it returns "Undefined"',()=>{
        expect(getMonth("abcd")).toBe("undefined"); // fail
    });
});
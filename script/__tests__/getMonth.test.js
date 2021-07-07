import { getMonth }  from '../getmonth.js';

describe ('Checking Function of returning Month', () => {    
  
    it('If a month is 2 returs "February"',() =>{
        expect(getMonth(2)).toBe(`February`); 
    }),
    it('If a month is 14 returns "There are less than 14 Months in a Year"',()=>{
        expect(getMonth(14)).toBe(`There are less than 14 Months in a Year`); //corner-case
    }),
    it('If a string is passed as a month number it returns "You wrote a string"',()=>{
        expect(getMonth("abcd")).toBe(`You wrote a string!`); // fail
    });    
    
});
import { palindromeChecker } from './index'

describe('palindrome checker', () => {

    it('should exist', () => {
        expect(palindromeChecker).toBeDefined();
    });

    it ('returns true for single word palindrome examples - mom, Mom, MoM, xMomx', () => {
        ['mom', 'Mom', 'MoM', 'xMomx']
            .map((word) => palindromeChecker(word))
            .forEach((m) => expect(m).toEqual(true))
      });
    
    it('should return true with the input "Was It A Rat I Saw"', () => {
        expect(palindromeChecker("Was It A Rat I Saw")).toBe(true);
    })
    
    it('should return true with the input "Never Odd or Even"', () => {
        expect(palindromeChecker("Never Odd or Even")).toBe(true);
    });

    it('should return false with the input "Momx"', () => {
        expect(palindromeChecker('Momx')).toBe(false)
    })

    // "Never Odd or Even1" returns false 
    // "1Never Odd or Even1" returns true
})
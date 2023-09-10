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
    
    it('returns true for palindrome phrase examples - "Was It A Rat I Saw", and "Never Odd or Even"', () => {
        [
            "Was It A Rat I Saw",
            "Never Odd or Even"
        ].map((word) => palindromeChecker(word))
        .forEach((m) => expect(m).toEqual(true))
    })

    it('should return false with the input "Momx"', () => {
        expect(palindromeChecker('Momx')).toBe(false)
    })

    // "Never Odd or Even1" returns false 
    // "1Never Odd or Even1" returns true
})
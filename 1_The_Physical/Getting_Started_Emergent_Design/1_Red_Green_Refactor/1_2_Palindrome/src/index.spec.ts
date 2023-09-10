import { palindromeChecker } from './index'

describe('palindrome checker', () => {

    it('should exist', () => {
        expect(palindromeChecker).toBeDefined();
    });

    it('should return true with the input "mom"', () => {
        expect(palindromeChecker("mom")).toBe(true);
    })

    // "Mom" returns true
    // "MoM" returns true
    // "Momx" returns false
    // "xMomx" returns true
    // "Was It A Rat I Saw" returns true
    // "Never Odd or Even" returns true
    // "Never Odd or Even1" returns false 
    // "1Never Odd or Even1" returns true
})
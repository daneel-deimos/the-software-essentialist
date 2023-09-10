import { palindromeChecker } from './index'

describe('palindrome checker', () => {

    it('should exist', () => {
        expect(palindromeChecker).toBeDefined();
    });

    it('should return true with the input "mom"', () => {
        expect(palindromeChecker("mom")).toBe(true);
    })

    it('should return true with the input "Mom"', () => {
        expect(palindromeChecker("Mom")).toBe(true);
    })
    
    it('should return true with the input "MoM"', () => {
        expect(palindromeChecker("MoM")).toBe(true);
    });
    
    it('should return false with the input "xMomx"', () => {
        expect(palindromeChecker('xMomx')).toBe(false);
    })

    // "xMomx" returns true
    // "Was It A Rat I Saw" returns true
    // "Never Odd or Even" returns true
    // "Never Odd or Even1" returns false 
    // "1Never Odd or Even1" returns true
})
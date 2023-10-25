import { palindromeChecker } from './index'

describe('palindrome checker', () => {

    it('should exist', () => {
        expect(palindromeChecker).toBeDefined();
    });

    describe('Recognize palindromes of small words', () => {
        it.each(
            [
                ['mom', true],
                ['Mom', true],
                ['MoM', true],
                ['xMomx', true],
                ["Racecar", true],
                ["Mastery", false],
                ["Perseverence", false],
                ["Apple", false],
                ["supercalifragilisticexpialidocious", false]
            ]
        )("Knows that '%s' is a palindrome", (word, expectedResult) => {
            expect(palindromeChecker(word)).toBe(expectedResult);
        });
    });

    describe('Recognize palindromes of phrases containing multiple words', () => {
        it.each(
            [
                ["Was It A Rat I Saw", true],
                ["Never Odd or Even", true],
                ["1Never Odd or Even1", true],
                ["A Toyota's a Toyota", true],
                ["Never Odd or Even1", false],
                ["How now brown cow", false],
                ["The Human Torch was denied a bankloan", false]
            ]
        )("Knows that '%s' is a palindrome", (phrase, expectedResult) => {
            expect(palindromeChecker(phrase)).toBe(expectedResult);
        })
    })
})
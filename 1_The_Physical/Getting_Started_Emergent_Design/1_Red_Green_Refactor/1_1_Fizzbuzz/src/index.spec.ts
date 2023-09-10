import { fizzBuzz } from './fizzbuzz'

describe("fizzbuzz", () => {

    it('should return a string', () => {
        expect(typeof fizzBuzz(1)).toBe('string');
    })

    it('should return "Fizz" when provided with the value 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    })

    it('should return "Buzz" when provided with the value 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    })

    it('should return "FizzBuzz" when provided with the value 15', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    })

    it('should return "Fizz" when provided with the value 9', () => {
        expect(fizzBuzz(9)).toBe('Fizz');
    });

    it('should return "43" when provided with the value 43', () => {
        expect(fizzBuzz(43)).toBe('43');
    })

    it('should return "Fizz" when provided with the value 42', () => {
        expect(fizzBuzz(42)).toBe('Fizz');
    })

    it('should return "FizzBuzz" when provided with the value 45', () => {
        expect(fizzBuzz(45)).toBe('FizzBuzz')
    })

    it('should throw a RangeError when provided with the value 102', () => {
        expect(() => fizzBuzz(102)).toThrow(RangeError);
        expect(() => fizzBuzz(102)).toThrow('The argument must be between 1 and 100.');
    })
    
    it('should throw a RangeError when provided with the value -12', () => {
        expect(() => fizzBuzz(102)).toThrow(RangeError);
        expect(() => fizzBuzz(102)).toThrow('The argument must be between 1 and 100.');
    })
});

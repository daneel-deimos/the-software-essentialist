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
});

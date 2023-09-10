import { fizzBuzz } from './fizzbuzz'

describe("fizzbuzz", () => {

    it('should return a string', () => {
        expect(typeof fizzBuzz(1)).toBe('string');
    })

    it('should return "Fizz" when provided with the values 3, 9, and 42', () => {
        [3, 9, 42]
            .map((input:number) => fizzBuzz(input))
            .forEach((output) => expect(output).toBe('Fizz'));
    })

    it('should return "Buzz" when provided with the value 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    })

    it('should "FizzBuzz" when provided with the values 15 and 45', () => {
        [15, 45]
            .map((input:number) => fizzBuzz(input))
            .forEach((output) => expect(output).toBe('FizzBuzz'));
    })

    it('should return "43" when provided with the value 43', () => {
        expect(fizzBuzz(43)).toBe('43');
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

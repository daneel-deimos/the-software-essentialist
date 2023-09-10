import { fizzBuzz } from './fizzbuzz'

describe("fizzbuzz", () => {

    it('should return a string', () => {
        expect(typeof fizzBuzz(1)).toBe('string');
    })

    it('should return "Fizz" when provided with the value 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    })
});

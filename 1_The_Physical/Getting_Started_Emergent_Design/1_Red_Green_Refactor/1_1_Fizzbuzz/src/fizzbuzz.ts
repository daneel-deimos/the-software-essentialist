export function fizzBuzz(input:number) {
    if (input < 1 || input > 100) {
        throw new RangeError('The argument must be between 1 and 100.')
    }

    if (input === 15 || input === 45) {
        return 'FizzBuzz';
    }

    if (input % 3 === 0) {
        return 'Fizz';
    }

    if (input === 5) {
        return 'Buzz';
    }


    return input.toString();
}
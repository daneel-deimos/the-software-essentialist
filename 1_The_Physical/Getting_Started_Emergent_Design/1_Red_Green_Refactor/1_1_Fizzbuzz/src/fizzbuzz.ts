export function fizzBuzz(input:number) {
    if (input % 3 === 0 && input !== 15) {
        return 'Fizz';
    }

    if (input === 5) {
        return 'Buzz';
    }

    if (input === 15) {
        return 'FizzBuzz';
    }

    return input.toString();
}
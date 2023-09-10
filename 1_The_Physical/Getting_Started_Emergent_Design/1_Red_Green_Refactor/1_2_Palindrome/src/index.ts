export function palindromeChecker(input:string) {
    const reversed = input.toLowerCase().split("").reverse().join("");
    return input.toLowerCase() === reversed;
}
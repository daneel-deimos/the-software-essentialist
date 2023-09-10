export function palindromeChecker(input:string) {
    const formattedInput = input.toLowerCase().replace(/ /g, "");
    const reversed = input.toLowerCase().split("").reverse().join("").replace(/ /g, "");
    return formattedInput === reversed;
}
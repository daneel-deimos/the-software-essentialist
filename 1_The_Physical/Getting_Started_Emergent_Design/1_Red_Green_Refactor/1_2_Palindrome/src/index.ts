export function palindromeChecker(input:string) {
    const formattedInput = input.toLowerCase().replace(/ /g, "");
    const reversed = formattedInput.split("").reverse().join("");
    return formattedInput === reversed;
}
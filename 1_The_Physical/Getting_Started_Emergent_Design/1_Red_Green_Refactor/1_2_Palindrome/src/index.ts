export function palindromeChecker(input:string) {
    const formattedInput = input.toLowerCase().replace(/ /g, "").replace(/[^a-z0-9]/g, "");
    const reversed = formattedInput.split("").reverse().join("");
    return formattedInput === reversed;
}
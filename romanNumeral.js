let testInput = 399;

const romanNumerals = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
];

const result = [];
const intToRomanNumeral = (input) => {
    romanNumerals.forEach((arr) => {
        while (input >= arr[1]) {
            result.push(arr[0]);
            input -= arr[1];
        }
    });
    return result.join("");
}
console.log(intToRomanNumeral(testInput));
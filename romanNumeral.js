const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

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

const intToRomanNumeral = (input) => {
    const result = [];
    romanNumerals.forEach((arr) => {
        while (input >= arr[1]) {
            result.push(arr[0]);
            input -= arr[1];
        }
    });
    return result.join("");
}

const checkInput = () => {
    const inputStr = numberInput.value;
    const inputInt = parseInt(inputStr, 10);
    let msg;

    if (inputStr.length === 0  || inputStr.match(/e/g)) {
         msg = "Please enter a valid number";
    } else if (inputInt > 3999) {
         msg = "Please enter a number less than or equal to 3999";
    } else if (inputInt < 1) {
         msg = "Please enter a number greater than or equal to 1";
    } else {
         msg = intToRomanNumeral(inputInt);
    }

    updateUi(msg);
}

const updateUi = (msg) => {
    output.innerText = msg;
}
convertBtn.addEventListener("click", () => {
    checkInput();
});
numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        checkInput();
    }
});
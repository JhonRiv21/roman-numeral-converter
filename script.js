const inputElement = document.querySelector('#number');
const buttonElement = document.querySelector('#convert-btn');
const resultElement = document.querySelector('#output');
const inputValue = inputElement.value;

function isValidNumber(str, int) {
    let errorMsg = '';
    if (!str || str.match(/[e.]/g)) {
        errorMsg = "Please enter a valid number";
    } else if (int < 1) {
        errorMsg = "Please enter a number greater than or equal to 1";
    } else if (int >= 4000) {
        errorMsg = "Please enter a number less than or equal to 3999";
    } else {
        return true;
    }

    resultElement.innerText = errorMsg;
    console.log(errorMsg)
    return false;
}

function convertNumber(num) {
    let result = "";
    const dictionary = [
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
        ['I', 1],
    ];

    for (const [roman, value] of dictionary) {
        while (num >= value) {
            result += roman;
            num -= value;
        }
    }

    return result;
}

function resultNumber() {
    const str = inputElement.value.trim();
    const int = parseInt(str, 10);

    if (!isValidNumber(str, int)) return;
    const result = convertNumber(int);
    resultElement.innerText = result;
}


buttonElement.addEventListener('click', resultNumber)
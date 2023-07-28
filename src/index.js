module.exports = function toReadable(number) {
    const singleDigitNumbers = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };
    const doubleDigitNumbers = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    const numberAsString = String(number);
    return numberAsString.length < 2
        ? singleDigitNumbers[number]
        : numberAsString.length < 3 &&
          (numberAsString.startsWith("1") || numberAsString.endsWith("0"))
        ? doubleDigitNumbers[number]
        : numberAsString.length < 3 &&
          !(numberAsString.startsWith("1") && numberAsString.endsWith("0"))
        ? `${doubleDigitNumbers[numberAsString.slice(0, 1) + 0]} ${
              singleDigitNumbers[numberAsString.slice(1)]
          }`
        : numberAsString.endsWith("00")
        ? `${singleDigitNumbers[numberAsString[0]]} hundred`
        : numberAsString.endsWith("0")
        ? `${singleDigitNumbers[numberAsString[0]]} hundred ${
              doubleDigitNumbers[numberAsString.slice(1)]
          }`
        : numberAsString[1] === "1"
        ? `${singleDigitNumbers[numberAsString[0]]} hundred ${
              doubleDigitNumbers[numberAsString.slice(1)]
          }`
        : numberAsString[1] === "0"
        ? `${singleDigitNumbers[numberAsString[0]]} hundred ${
              singleDigitNumbers[numberAsString.slice(2)]
          }`
        : `${singleDigitNumbers[numberAsString[0]]} hundred ${
              doubleDigitNumbers[numberAsString.slice(1, 2) + 0]
          } ${singleDigitNumbers[numberAsString.slice(2)]}`;
};

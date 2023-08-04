module.exports = function toReadable (number) {
  let b = String(number);
  let numbersArray = b.split('');
  let resultArray = [];
  let emptyString = '';
  let simpleArray = [emptyString, "one","two","three","four","five","six","seven","eight","nine"];
  let onetyArray = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  let tenthArray = [emptyString, onetyArray, "twenty", "thirty","forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  
  if (numbersArray.length === 1) {
    if (number === 0) {
      return "zero"
    } else {
     return simpleArray[number]
    }
  } else if (numbersArray.length === 2) {
    if (numbersArray[0] === "1") {
      return `${onetyArray[+b[1]]}`
    } else {
    return (number%10 === 0) ? `${tenthArray[+b[0]]}${simpleArray[+b[1]]}` : `${tenthArray[+b[0]]} ${simpleArray[+b[1]]}`
    }
  } else if (numbersArray.length === 3) {
    if (numbersArray[1] === "1"){
      return `${simpleArray[+b[0]]} hundred ${onetyArray[+b[2]]}`
    } else if (numbersArray[1] === "0" && numbersArray[2] === "0") {
      return `${simpleArray[+b[0]]} hundred`
    } else if (numbersArray[1] === "0") {
      return `${simpleArray[+b[0]]} hundred ${simpleArray[+b[2]]}`
    } else {
     return (number%10 !== 0) ? `${simpleArray[+b[0]]} hundred ${tenthArray[+b[1]]} ${simpleArray[+b[2]]}` : `${simpleArray[+b[0]]} hundred ${tenthArray[+b[1]]}`
    }
  }
}
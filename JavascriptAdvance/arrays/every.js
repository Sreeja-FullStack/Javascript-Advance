const temperatures = [
    { degrees: 69, isRecordTemp: false }, 
    { degrees: 82, isRecordTemp: true }, // if it is false then result will be true.
    { degrees: 73, isRecordTemp: false }, 
    { degrees: 64, isRecordTemp: false }
];
//Cz every element should be either true or false(same or not)


const result = temperatures.every(temperature => !temperature.isRecordTemp); // true / false "NOT operator "!""
console.log(result);
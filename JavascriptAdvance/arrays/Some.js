const temperatures = [
    { degrees: 69, isRecordTemp: false }, 
    { degrees: 82, isRecordTemp: true }, //false
    { degrees: 73, isRecordTemp: false }, 
    { degrees: 64, isRecordTemp: false }// isrecordtemp set to boolean no need of comparing "true === true"
];


const result = temperatures.some(temperature => temperature.isRecordTemp); // true / false no need of comparing with " === true"
console.log(result);// result false if everything is false
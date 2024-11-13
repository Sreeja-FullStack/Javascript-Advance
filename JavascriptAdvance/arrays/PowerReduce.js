const numbers = [1, 2, 3, 4, 5, 6];

const doubledNumbers = numbers.map(num => num * 2);
    console.log('doubled numbers', doubledNumbers);
    console.log('numbers', numbers);
// const doubledNumbers = numbers.reduce((acc, num) => {
//   acc.push(num * 2);
//   return acc;
// }, []);
// console.log('doubled numbers', doubledNumbers);
// console.log('numbers', numbers);



// const greaterNumbers = numbers.reduce((acc, num) => {
//     if (num > 3) {
//       acc.push(num);
//     }  
    
//     return acc;
//   }, []);
//   console.log(greaterNumbers);

const greaterNumbers = numbers.reduce((acc, num) => num > 3 ? acc.concat(num) : acc, []);
console.log(greaterNumbers);
//for in loop
        // const obj = { one: 1, two: 2 };

        // for (const key in obj) {
        // console.log('value', obj[key]);
        // console.log('key', key)
        // }

// object.keys(), object.entries(), object.values()
const user = {
    name: 'John',
    age: 29  
  };
  
  const ageExist = Object.keys(user).includes('age') // using includes
  const values= Object.keys(user).map(key => user[key]); // using map
  console.log(values)
  console.log(ageExist)
  console.log(Object.keys(user));

// instead of above we can use object.values()
console.log(Object.values(user))



const monthlyExpenses = {
    food: 400,
    rent: 1700,
    insurance: 550,
    internet: 49,
    phone: 95  
  };

const Total = Object.values(monthlyExpenses).reduce(
    (acc, expenses) =>
    acc +expenses ,0);
console.log(Total)

// instead of above we can use object.values()
const user = {
    name: 'John',
    age: 29  
  };
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
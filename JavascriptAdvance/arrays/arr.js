const todos = [];

const todo1 = {
  text: 'Wash the dishes',
  complete: false  
};

const todo2 = {
  text: 'Do laundry',
  complete: false  
};

todos.push(todo1, todo2);
todos.pop(); // deletes last element)
// todos[1] = todo2;
// todos[0] = todo1;
const index = [todos.length - 1];
todos[index];
console.log(todos);
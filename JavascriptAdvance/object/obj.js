
// general declaration

const blue = '#00f';
const orange = '#f60';

// variables - boxes; objects - file cabinets
//nested object
objectname = {
    key : 'value',
    key:{
        key: 'value'
    }
}

const colorS = { // small "s"
  yellow: '#ff0',
  blue: blue, // => blue is enough
  orange: orange // =>orange is enough    
}
console.log(colors);

//destructuring the above object

const colors = { yellow: '#ff0', blue, orange };
// objectName.key => log => colors.yellow
console.log(colors);

// function
// const obj = {
//   sayHi() {
//     console.log('hi')  
//   }
// }

// obj.sayHi(); // here sayHi is a method in object so obj.method() 
// objectName.methodName();
window.prompt()// prompt and alert are methodname which has dot syntax
window.alert()
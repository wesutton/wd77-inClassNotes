/*
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.

*/

/* Silver
*/

let obj ={
    str: 'ABCD',
    num: 35, 
    bool: true,
    arr: [1, 'abcd', false, 20],
    objTwo: {
        one: 'string'
    
    }
}

console.log(typeof obj.str);

let typeValue = typeof  obj.str;
console.log(typeValue);

switch(typeof obj.num) {
    case 'string':
        console.log('string');
        break;
    case 'number':
            console.log('number');
            break;
    case 'boolean':
        console.log('boolean');
        break;
    case 'object':
        console.log('object');
        break;
    default: console.log('What are you?')
}

let value = typeof obj.num;

if(value === 'string') {
    console.log('This value is a string');
}else if (value === 'number'){
console.log('This value is a number');
}else if (value === 'booleen'){
    console.log('This value is a booleen');
}else if (value === 'object'){
    console.log('This value is a object');
}else {
    console.log('What are you?')
}
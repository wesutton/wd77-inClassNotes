
/*
My attempt
let FB = 15
for(FB = 15; FB<=15; FB++){
    if(FB%3==0 && FB%5 == 0){
        console.log('FizzBuzz');
    }else if(FB%5==0){
        console.log('Fizz');
    }else if(FB%3 == 0){
        console.log('Buzz')
    }else{
        console.log('Try another number!')
    }
}
*/

/*let FB = 5;

if(FB % 3 === 0 && FB & 5 === 0) {
    console.log('Fizz Buzz');
}else if (FB % 5 === 0){
    console.log('Buzz');
}else if (FB % 3 === 0) {
    console.log('Fizz');
}else{
    console.log('Try Again! :(')
}
*/


/* my attempt
for(FB = 9; FB<=9; FB++);
switch(FB) {
    case (FB%3==0):
        console.log('Fizz');
        break;
    case (FB%5 == 0):
        console.log('Buzz');
        break;
    case (FB%3==0 && FB%5 == 0):
        console.log('FizzBuzz');
        break;
    default:('Try another number')
}
*/

//let fb = 5;
//fb % 5 == 0 && fb % 3 == 0? console.log('Fizz Buzz') :
//fb % 3 == 0 ? console.log ('Fizz') :
//b % 5 == 0 ? console.log('Buzz') :
//console.log('try again')

//my attempt
//let FB = 9;

//for (FB = 9; FB<=9; FB++);
//FB%5===0 ? console.log('Fizz') :
//FB%3===0 ? console.log('Buzz') :
//FB%3===0 && FB%5 === 0 ? console.log('FizzBuzz') :
//console.log('Try another number!') ;

let fb = 5;
switch(true) {
    case (fb % 3 === 0 && fb % 5 === 0):
        console.log('Fizz Buzz');
        break;
    case (fb % 3 === 0):
        console.log('fizz');
        break;
    case (fb % 5 === 0):
        console.log('buzz');
        break;
}


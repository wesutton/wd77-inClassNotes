/*bronze
*/

const myName = "Will"
const myFriend = "Dakota"
console.log(`${myName}, ${myName.length} characters`);
console.log(`${myFriend}, ${myFriend.length} characters`);

/*silver
*/

if(myName.length < myFriend.length){
    console.log("My name is shorter than Dakota's");
}


if (myFriend.length > myName.length){
    console.log(myFriend + 'is longer than' + myName + 'by' + (myFriend.length - myName.length) + ' digits')
} else {
    console.log(myName + ' is longer than ' + 'by ' + (myName.length - MyFriend.length) + ' digits.')
}

let x=myName.length;
let y=myFriend.length;

let c = x-y;
let q = y-x;

if(x>y) {
    console.log(`${myName} is longer by ${c}.`);
}else if (y > x) {
    console.log(`${myFriend} is longer by ${q}.`);
}
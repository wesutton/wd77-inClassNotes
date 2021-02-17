let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

/*for (alphabet in alphabetArray){
    console.log(alphabet);
    console.log(alphabetArray[alphabet]);
*/

for(let i = 0; i < alphabet.length; i++) {
    console.log(alphabet[i]);
}

for(let i = 0; i < alphabet.length; i++){
    if(i % 2 === 0){
        console.log('EVEN:', alphabet[i]);
    }else {
        console.log('the index is an odd number')
    }
}

var arr = []
for(index in alphabet) {
    if(index % 2 === 0) {
        // console.log(arr);
        arr.push(alphabet[index]);
    }else {
        console.log(`The index ${index} is an odd number`);
    }
}
console.log(arr);
    
  /*  if (alphabet% 2 == 0){
    console.log ('even');
    }else{
        console.log( 'the index is odd');
    }
*/


 
/*   let newArray = []
    if 
    newArray[] =;
    console.log(newArray);
}
*/

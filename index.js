
/*let newArr = ['Guadalupe', 'Ollie', 'Aki'];
function writeCards(arrStr,eventName){
  eventName = 'surprise';

  for (let i = 0; i < newArr.length; i++){
    let arrStr = [...newArr];
    console.log(`Thank you, ${arrStr[i]}, for the wonderful ${eventName} gift!`);
    debugger;
  } 
  return arrStr;
}
writeCards();*/

const newArr = ['Guadalupe', 'Ollie', 'Aki'];


function writeCards(array){
  const arrStr = [];

  for (const user of newArr){
    arrStr.push(user);
    console.log(`Thank you, ${user}, for the wonderful surprise gift!`);
  } 
  return arrStr;
}
writeCards();

















/*(function countDown(num){
for (let i = 10; i >= 0; i--) {
  console.log ("Expected countDown " + "(" + i + ")" + " to log  " + i + " first");
  
  debugger;
}
return num;
}
countDown();*/


function countDown(){
  let i = 10;

  while (i >= 0){
    console.log ("Expected countDown " + "(" + i + ")" + " to log  " + i + " first");
    i--;
  }
}
countDown();





















/*
for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy Birthday to me!`);
  debugger;
}
*/

/*
const gifts = ['teddy bear', 'drone','doll'];

function wrapGifts(gifts){
  for (let i = 0; i < gifts.length; i++){
  console.log(`Wrapped ${gifts[i]} and added a bow`);
  debugger;
}
  return gifts;
}
wrapGifts(gifts);
*/

/*
const arrStr =["Guadalupe", "Ollie", "Aki"];

function writeCards(arrStr) {
  for (let i = 0; i < arrStr.length; i++){
  console.log(`Thank you, ${ arrStr[i]}, for the wonderful surprise gift!`);
  debugger;
  }
  return arrStr;
}
writeCards(arrStr);
*/

/*
const strArr = [];
strArr.push("Guadalupe", "Ollie", "Aki");
console.log(strArr);


function writeCards(strArr){
  for (let i = 0; i < strArr.length; i++){
    console.log(`Thank you, ${ strArr[i]}, for the wonderful surprise gift!`);
    debugger;
  }
  return strArr;

writeCards(strArr);



*/
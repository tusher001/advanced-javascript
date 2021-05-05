const numbers = [4,5,6,7,8,9];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i]*numbers[i];
//     console.log(element);
// }
// function square(element){
//     return element*element;
// }
// const square = element => element*element;
// const square = x => x*x;
// const result = numbers.map(x => x*x);
// const bigger = numbers.filter(x=> x>6)
const isThere = numbers.find(x=> x>6)
console.log(isThere);
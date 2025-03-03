// const myObj = {
//   highestNumber: (arr) => {
//    return arr.sort((a, b) => b - a).at(0)
//   }
// }

// console.log(myObj.highestNumber([2,1,4,3,6,7,8,90,65,34]));


// const myObj = {
//   lowestnumber:(arrays) => {
//     return arrays.sort ((a,b) => a-b).at(0)
//   }
//   }


// console.log(myObj.lowestnumber([2,1,4,3,6,7,8,90,65,34]));

// const myObj = {
//   lowestnumber:(arrays) => {
//     return arrays.map((a)=> a*a )
//   }
//   }


// console.log(myObj.lowestnumber([2,1,4,3,6,7,8,90,65,34]));


// const myObj = {
//   lowestnumber:(arrays) => {
//     return arrays.map((ar) => Math.pow(ar, 1/3) )
//   }
//   }


// console.log(myObj.lowestnumber([3,2,125]));

//  array (avg), hightest number, lowest number, square root, cuberoot, square, cube
// const num = {
//   avg: (arr)=> {
//     return arr.reduce((acc, curr) => acc + curr, 0) / arr.length
//   },


// }

// console.log(num.avg([1,2,3,4,5,6,7,8,9,10]));

// Number
// const num = {
//  myAge: (yearOfBirth) => {
//   if (typeof yearOfBirth !== 'number') {
//     return('number value please');
//   }else {
//     const currentYear = new Date().getFullYear();
//     const currentAge = currentYear - yearOfBirth
//     return(`You're ${currentAge} years old`)
//   }
//  }
// }

// console.log(num.myAge(1998));

// const bb = {
//   adult: (isAnAdult) => {
//     if (typeof isAnAdult !== 'boolean'){
//       return ('data type of input must be a boolean!');
//     }else if (isAnAdult === true){
//       return ("Yor're an adult");
//     }else {
//       return ("You're a minor")
//     }
//   },

//   address: (text) => {
//     if (typeof text !== 'object') {
//       return('data type of input must be an object!');
//     }else {
//       return text
//     }
//   }
// }

// // console.log(bb.adult('false'));
// console.log(bb.address({houseNumber: 56, streetName: 'Oluwa Street',}));


const myObject = {

  // Number Method
  addTwoNumbers: (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
      return('data type of input must be a number!');
    }else {
      return num1 + num2
    }
  },
  subtractTwoNumbers: (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
      return('data type of input must be a number!');
    }else {
      return num1 - num2
    }
  },
  checkAge: (yearOfBirth) => {
    const currentYear = new Date().getFullYear();
    const calAge = currentYear - yearOfBirth;
  
    if (typeof yearOfBirth !== 'number'){
      return ('data type of input must be a number!')
    }else {
      return `You are ${calAge} years old`
    }
  },

  // String Meth
  firstThreeLetter: (str) => {
    if (typeof str !== 'string'){
      return('data type of input must be a string!');
    }else {
      return str.slice(0, 3)
    }
  },
  capFirstLetter: (str) => {
    if (typeof str !== 'string'){
      return('data type of input must be a string!');
    }else {
      return str.slice(0, 1).toUpperCase() + str.slice(1)
    }
  },
  abbrOfWord: (str) => {
    if (typeof str !== 'string'){
      return('data type of input must be a string!');
    }else {
      return str.split(' ').map((x) => x.slice(0, 1)).join('')
    }
  },
  capLastLetter: (str) => {
    if (typeof str !== 'string'){
      return('data type of input must be a string!');
    }else {
      return str.slice(0, -1).toLowerCase() + str.slice(-1).toUpperCase()
    }
  },
  average: (arr) => {
    if (!Array.isArray(arr)){
      return('data type of input must be an array!');
    }else {
      return arr.reduce((acc, curr) => acc + curr, 0) / arr.length
    }
  },
  sumAllNumbers: (arr) => {
    if (!Array.isArray(arr)){
      return('data type of input must be an array!');
    }else {
      return arr.reduce((acc, curr) => acc + curr, 0)
    }
  },
  highestNumber: (arr) => {
    if (!Array.isArray(arr)){
      return('data type of input must be an array!');
    }else {
      return arr.sort((acc, curr) => curr - acc).at(0)
    }
  },
  lowestNumber: (arr) => {
    if (!Array.isArray(arr)){
      return('data type of input must be an array!');
    }else {
      return arr.sort((acc, curr) => acc - curr).at(0)
    }
  },
  squareOfNumbers: (arr) => {
    if (!Array.isArray(arr)){
      return('data type of input must be an array!');
    }else {
      return arr.map((num) => Math.pow(num, 2))
    }
  },
  cubeRootOfNumbers: (arr) => {
    if (!Array.isArray(arr)){
      return('data type of input must be an array!');
    }else {
      return arr.map((num) => Math.pow(num, (1/3)))
    }
  },
  sqrtOfNumbers: (arr) => {
    if (!Array.isArray(arr)){
      return('data type of input must be an array!');
    }else {
      return arr.map((num) => Math.pow(num, (1/2)))
    }
  },
  address: (text) => {
    if (typeof text !== 'object') {
      return('data type of input must be an object!');
    }else {
      return text
    }
  },
  info: (text) => {
    if (typeof text !== 'object') {
      return('data type of input must be an object!');
    }else {
      return text
    }
  },
  dob: (text) => {
    if (typeof text !== 'object') {
      return('data type of input must be an object!');
    }else {
      return text
    }
  },
  education: (text) => {
    if (typeof text !== 'object') {
      return('data type of input must be an object!');
    }else {
      return text
    }
  },
  relationship: (text) => {
    if (typeof text !== 'object') {
      return('data type of input must be an object!');
    }else {
      return text
    }
  },
  nationality: (text) => {
    if (typeof text !== 'object') {
      return('data type of input must be an object!');
    }else {
      return text
    }
  },
  gender: (text) => {
    if (typeof text !== 'object') {
      return('data type of input must be an object!');
    }else {
      return text
    }
  },
  adult: (isAnAdult) => {
    if (typeof isAnAdult !== 'boolean'){
      return ('data type of input must be a boolean!');
    }else if (isAnAdult === true){
      return ("Yor're an adult");
    }else {
      return ("You're a minor")
    }
  }
}

console.log('Addition: ' ,myObject.addTwoNumbers(5, 6));
console.log('Subtraction: ' ,myObject.subtractTwoNumbers(5, 6));
console.log(myObject.checkAge(1998));
console.log(myObject.firstThreeLetter('Christopher'));
console.log(myObject.capFirstLetter('daniella'));
console.log(myObject.abbrOfWord('The Curve Africa'));
console.log(myObject.capLastLetter('Africa'));
console.log('Sum: ',myObject.sumAllNumbers([2, 4, 6,]));
console.log('Average: ',myObject.average([2, 4, 6,]));
console.log('Highest Number: ',myObject.highestNumber([2, 4, 6,]));
console.log('Lowest Number: ',myObject.lowestNumber([2, 4, 6,]));
console.log('Square of number: ',myObject.squareOfNumbers([2, 4, 6, 20]));
console.log('Cube root of number: ',myObject.cubeRootOfNumbers([27]));
console.log('Square root of number: ',myObject.sqrtOfNumbers([4, 16, 25]));
console.log(myObject.adult(false));
console.log(myObject.address({houseNumber: 56, streetName: 'Oluwa Street',}));
console.log(myObject.info({firstname: 'Christopher', lastName: 'Ichiogu'}));
console.log(myObject.dob({monthOfBirth: 'June', yearOfBirth: 1996}));
console.log(myObject.education({school: 'The Curve Africa', stack: 'Backend'}));
console.log(myObject.relationship({status: 'Single'}));
console.log(myObject.nationality({country: 'Nigeria',state: 'Imo'}));
console.log(myObject.gender({sex: 'Male'}));
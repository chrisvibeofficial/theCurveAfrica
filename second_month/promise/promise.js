const processDate = (number, arrOfNumber, string) => {
  let  numberResult;
  let  arrOfNumberResult = [];
  let  stringResult;
  return new Promise ((resolve, reject) => {
    if (!number) {
      reject(console.log('Please input a number value'))
    }
    setTimeout(() => {
      numberResult = number * 2;
      console.log(numberResult);

      if (!Array) {
        reject(console.log('Please input an array value'))
      }
      setTimeout(() => {
        arrOfNumberResult = arrOfNumber.filter((e) => e % 2 === 1);
        resolve(arrOfNumberResult);        

        if (!string) {
          reject(console.log('Please input an array value'))
        } 
        setTimeout(() => {
          stringResult = string.split('').reverse().join('');
          resolve(console.log(stringResult));
        }, 5000)
      }, 3000)
     }, 1000)
  })
}

processDate(10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'christopher')
.then((result) => console.log(result))
.catch((error) => console.log(error))
const fs = require('fs');

const wordCount = (wordToCount) => {
  // fs.writeFile('./newFile.txt', wordToCount, 'utf-8', (err, data) => {
  //   if (err) {
  //     console.log('Error writing file...', err);
  //   }else {
  //     console.log('Successful');
  //   }
  // });
  
  let result;
  
  // fs.readFile('./newFile.txt', 'utf-8', (err, data) => {
  //   if (err) {
  //     console.log('Error error file...', err);
  //   }else {
  //     result = data.split(' ').length
  //   }
  
  //   fs.writeFile('./splittedFile.txt', result.toString(), 'utf-8', (err) => {
  //     if (err) {
  //       console.log('Error re-writing file...', err);
  //     }
  //   })
  // })
}

// wordCount();



const lineCount = (lineToCount) => {

  // fs.writeFile('./newFile2.txt', lineToCount, 'utf-8', (err, data) => {
  //   if (err) {
  //     console.log('Error writing file...', err);
  //   }else {
  //     console.log('Successful');
  //   }
  // });
  
  let result;
  
  // fs.readFile('./newFile2.txt', 'utf-8', (err, data) => {
  //   if (err) {
  //     console.log('Error error file...', err);
  //   }else {
  //     result = data.split('\n').length
  //   }
  
  //   fs.writeFile('./splittedFile2.txt', result.toString(), 'utf-8', (err) => {
  //     if (err) {
  //       console.log('Error re-writing file...', err);
  //     }
  //   })
  // })
}

// lineCount();


// const makeDirectory = (nameOfDirectoey) => {
//   fs.mkdir(nameOfDirectoey, (err) => {
//     if (err) {
//       console.log('Error creating directory...', err);
//     }
//   });
// }

// makeDirectory();


const countVowels = (words) => {
  let vowels = 0;
  let result;
  for (let i = 0; i < words.length; i++) {
    result = words[i].toLowerCase();
    if (result == 'a' || result == 'e' || result == 'i' || result == 'o' || result == 'u') {
      vowels++;
    }
  }
  return vowels
  // fs.writeFile('./result.txt', vowels.toString(), 'utf-8', (err) => {
  //   if (err) {
  //     console.log(err);
  //   }
  // })
}

// countVowels();


const sortNumbers = (numbers) => {
  let sum = 0;
  let highestNumber = numbers[0];
  let lowestNumber = numbers[0];
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i]
    if (numbers[i] > highestNumber) {
      highestNumber = numbers[i]
    } else if (numbers[i] < lowestNumber){
      lowestNumber = numbers[i]
    }
  }
  
  return `Sum: ${sum}\nHighest number: ${highestNumber}\nLowest number: ${lowestNumber}`
}

// sortNumbers();

// module.exports = {
//   wordCount, lineCount, countVowels, sortNumbers
// };


const loveMatcher = (maleName, femaleName) => {
  const matchingLetters = [];
  const male = maleName.toLowerCase();
  const female = femaleName.toLowerCase();

  for (let m = 0; m < male.length; m++) {
    for (let f = 0; f < female.length; f++) {
      if (male[m] !== female[f]) {
        matchingLetters.push(male[m])
      }
    }
  }
  
  const newMatchingLetters = [...new Set(matchingLetters)];
  const calculateLovePercentage = (newMatchingLetters.length / 100) * 100;
  
  if (calculateLovePercentage === 10) {
    console.log(`${male} and ${female} have Perfect Love for eachother!`);
  }else if (calculateLovePercentage > 6 && calculateLovePercentage < 10) {
    console.log(`${male} and ${female} Love for eachother is great!`);
  }else if (calculateLovePercentage >= 5 && calculateLovePercentage <= 6) {
    console.log(`Something can be done about ${male} and ${female} Love for eachother!`);
  }else {
    console.log('Please focus on your studies');
  }
}

loveMatcher('Kelvin', 'Daniella');


// numbers = [4, 1, 9];

//   const sum = numbers.reduce((acc, curr) => acc + curr, 1);
//   const highestNumber = Math.max(...numbers)
//   const lowestNumber = Math.min(...numbers)

  // console.log(`Sum: ${sum}\nHighest number: ${highestNumber}\nLowest number: ${lowestNumber}`);


  // let number = 0;
  // while (number <= 10) {
  //   number = number + 2
  //   console.log(number);
  // }



const fs = require('fs');

// Creating a file
// fs.writeFile('./organizer.txt', 'THIS FILE CONTAINS A LIST OF ITEMS TO ORGANIZE\n', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//   }
// })

// Appending more task into the file
// fs.appendFile('./organizer.txt', 'Task 1: I pray in the morning\nTask 2: I dress my bed\nTAsk 3: I brush my teeth\nTask 4: I prepare my breakfast', (err, data) => {
//   if (err) {
//     console.log(err);
//   }
// })

// Creating a backup file
// const originalFile = './organizer.txt';
// const backupFile = './backupOrganizer.txt';

// fs.readFile(originalFile, (err, data) => {
//   if (err) {
//     console.log(err);
//   }
  
//   fs.writeFile(backupFile, data, 'utf-8', (err) => {   
//     if (err) {
//       console.log(err);
//     }
//   })
// })

// Renaming the backup file
// fs.rename('./backupOrganizer.txt', 'finalBackup', (err) => {
// })

// Removing the previous file
// fs.unlink('./organizer.txt', (err) => {
//   if (err) {
//     console.log(err);
//   }
// })





// 1.
// fs.writeFile('./countWord.txt', 'The Quick Brown Fox Jumps Over A Lazy Dog', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//   }
// })

// const originalFile = './countWord.txt';
// const countedFile = './countedWord.txt'

// fs.readFile(originalFile, 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//   }else {
//   const wordsToCount = data.split(' ').length;

//   fs.writeFile(countedFile, wordsToCount.toString(), (err) => {
//     if (err) {
//       console.log(err);
//     }
//   })
// }
// })


// 2.
// const fs = require('fs');
// fs.writeFile('./countWord.txt', 'The Quick Brown Fox Jumps Over A Lazy Dog \nMy name is Christopher \nDaniella Sodade', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//   }
// })

// const originalFile = './countWord.txt';
// const countedFile = './countedWord.txt'

// fs.readFile(originalFile, 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//   }else {
//   const wordsToCount = data.split('\n').length;

//   fs.writeFile(countedFile, wordsToCount.toString(), 'utf-8', (err) => {
//     if (err) {
//       console.log(err);
//     }
//   })
// }
// })


// 3.
// fs.mkdir('./wilmer_hub', (err) => {
//   if (err) {
//     console.log(err);
//   }
// }) 


// 4



// 5.
// const numbers = [10, 25, 5, 30, 15, 35, 40, 65, 45, 9];

// const sum = numbers.reduce((acc, curr) => acc + curr, 1)
// const largestNum = numbers.sort((acc, curr) => curr - acc).at(0);
// const smallestNum = numbers.sort((acc, curr) => acc - curr).at(0);

// const num = `Sum: ${sum} \nLargest number: ${largestNum} \nSmallest number: ${smallestNum}`;

// fs.writeFile('./listOfNumber', '10, 25, 5, 30, 15, 35, 40, 65, 45, 9 \n', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//   }
// })

// fs.appendFile('./listOfNumber', num, 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//   }
// })
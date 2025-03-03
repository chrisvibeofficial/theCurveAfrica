// const student = [
//     {name: 'Christopher', gender: 'Male', stack: 'backend'},
//     {name: 'Nora', gender: 'Female', stack: 'frontend'},
//     {name: 'obinna', gender: 'Male', stack: 'frontend'},
//     {name: 'Ahmed', gender: 'Male', stack: 'backend'},
//     {name: 'Cynthia', gender: 'Female', stack: 'product design'},
//     {name: 'Mary', stack: 'product design'},
//     {name: 'Daniella', gender: 'Female', stack: 'backend'},
//     {name: 'Zaynab', gender: 'Female', stack: 'backend'},
//     {name: 'Victoria', stack: 'product design'},
//     {name: 'Edith', gender: 'Female', stack: 'frontend'},
//     {name: 'Paul', gender: 'Male', stack: 'frontend'},
//     {name: 'Investor', gender: 'Male', stack: 'backend'},
//     {name: 'Micheal', gender: 'Male', stack: 'product design'}
//   ];

//   const frontendStudent = student.filter((e) => e.stack === 'frontend')
//   console.log('Frontend Student: ', frontendStudent);

// const backendStudent = student.filter((e) => e.stack === 'backend')
// console.log('Backend Student: ', backendStudent);

// const productDesignStudent = student.filter((e) => e.stack === 'product design')
// console.log('Product Design Student: ', productDesignStudent);


// const fruit = [
//   {name: 'apple', quantity: 10, isFresh: true},
//   {name: 'banana', quantity: 5, isFresh: false},
//   {name: 'mango', quantity: 15, isFresh: true},
//   {name: 'orange', quantity: 8, isFresh: false}
// ]

// const fruitName = fruit.map((e) => e.name.slice(0,3));
// console.log('Task 1:', fruitName);

// const freshFruit = fruit.filter((e) => e.isFresh === true);
// console.log('Task 2: ', freshFruit);

// const fruitQuantities = fruit.map((e) => ({
//   name: e.name,
//   quantity: e.quantity
// }))
// console.log('Task 3: ', fruitQuantities);

// const fruitNames = fruit.map((e) => e.name.slice(0, -3) +
//   e.name.slice(-3, -2).toUpperCase() +
//   e.name.slice(-2, -1) +
//   e.name.slice(-1).toUpperCase());
// console.log('Task 4: ', fruitNames);



// Assignment
// 1
// const nums = [3, 1, 4, 4, 2, 5];

// function twoLargestDistinct() {
//   const distinctNums = [...new Set(nums)];
//   distinctNums.sort((a, b) => b - a);
//   console.log(distinctNums.slice(0, 2));
// }

// twoLargestDistinct();

// 2
// const fruits = ['apple', 'banana', 'mango', 'pear', 'pineapple', 'strawberry']

// const checkLength = () => {
//     const obj = {};
//     fruits.forEach((fruit) => {
//         obj[fruit] = fruit.length
//       })
//       console.log(obj);
//     }
    
// checkLength();

// 3
// const numbers = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]

// const num = () => {
//       const flatArr= numbers.flat()
//       console.log(flatArr);
//     }
  
//     num();
  
//     4
//     const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  
//     const sortNumber = () => {
//         const result = {even: [], odd: []}
//         numbers.forEach((num) => {
//             if (num % 2 === 0){
//           result.even.push(num)
//         }else{
//             result.odd.push(num)
//           }
//         })
//         console.log(result);
//       }
    
//       sortNumber();

//     5
//     const departments = [ 
//         { department: "HR", employees: [{ salary: 3000 }, { salary: 3500 }] }, 
//       { department: "IT", employees: [{ salary: 5000 }, { salary: 7000 }] } 
//     ];
    
//     function highestAverageSalary() {
//         let highestAvgSalaryDept;
//       let highestAvgSalary = 0;
//       for (const dept of departments) {
//           const totalSalary = dept.employees.reduce((sum, emp) => sum + emp.salary, 0);
//         const avgSalary = totalSalary / dept.employees.length;
//         if (avgSalary > highestAvgSalary) {
//           highestAvgSalary = avgSalary;
//           highestAvgSalaryDept = dept.department;
//         }
//       }
//       console.log(highestAvgSalaryDept);
//     }
    
//     highestAverageSalary();
    
//     6
//     const timeIntervals = [ 
//         { start: 1, end: 3 }, 
//       { start: 2, end: 5 }, 
//       { start: 6, end: 8 } 
//     ];

//     function totalTime() {
//         console.log(timeIntervals.reduce((sum, interval) => sum + (interval.end - interval.start), 0));
//     }
    
//     totalTime();

//     7
//     const people = [ 
//         { name: "Alice", age: 40, salary: 4000 }, 
//         { name: "Bob", age: 30, salary: 5000 }, 
//       { name: "Charlie", age: 50, salary: 3000 } 
//     ];

//     function oldestAboveAverage() {
//       const totalSalary = people.reduce((sum, person) => sum + person.salary, 0);
//       const averageSalary = totalSalary / people.length;
//       let oldestPerson;
//       let maxAge = 0;
//       for (const person of people) {
//         if (person.salary > averageSalary && person.age > maxAge) {
//           maxAge = person.age;
//           oldestPerson = person.name;
//         }
//       }
//       console.log(oldestPerson);
//     }
    
//     oldestAboveAverage();

//     8
//     const numbers = [1, 2, 3];

//     function cumulativeSum() {
//       const num = numbers.map((num, i) => numbers.slice(0, i + 1).reduce((sum, n) => sum + n, 0));
//       console.log(num);
//     }
    
//     cumulativeSum()
    
//     9
//       const studentGrade = [
//           {
//             name: 'Alice',
//             grade: [80, 90, 100]
//           },
//             {
//               name: 'Christopher',
//               grade: [76, 84, 49]
//             },
//               {
//     name: 'Edith',
//     grade: [20, 11, 50]
//   },
//     {
//       name: 'Investor',
//       grade: [80, 100, 20]
//     },
//     {
//       name: 'Mary',
//       grade: [110, 39, 27]
//   },
//     {
//       name: 'Chioma',
//       grade: [59, 22, 97]
//   },
// ]

// const checkStudentAverage = () => {
//   const averageScore = studentGrade.map((e) => ({
//       name: e.name,
//       average: e.grade.reduce((a, b) => a + b, 0) / e.grade.length
//   }))
//   console.log(averageScore);
// }

// checkStudentAverage();

// 10
// const words = ['Hello World', 'The Curve Africa', 'Information Technology', 'Laugh Out Load'];

// const acronyms = () => {
//       const abbr = words.map((e) => e.split(' ').map((word) => word[0]).join(''));
//       console.log(abbr);
//     }
  
//     acronyms();
  
//   11
//   const nums = [1, 2, 4]

//   function findSmallestMissingPositive() {
//       const numSet = new Set(nums);
//       let i = 1;
//       while (numSet.has(i)) {
//     i++;
//   }
//   console.log(i);
// }

// findSmallestMissingPositive();


// 12
// const numbers = [2, 4, 2, 7, 10, 6, 2, 6, 2, 1, 1, 4, 9, 10, 4, 3, 8, 9, 2, 5, 2, 7, 8, 2]
// const findMode = () => {
//  const frequency = {}
//  numbers.forEach((num) => {
//      frequency[num] = (frequency[num] || 0) + 1;
  
//    let maxFrequency = 0;
//    let mode;
//    Object.keys(frequency).forEach((key) => {
//        if(frequency[key] > maxFrequency){
//            maxFrequency = frequency[key]
//      mode = key;
//    }
//  })

//  console.log(mode);
// }

// findMode();

// 13
// const words = ['zebra', 'hen', 'goat', 'apple', 'banana', 'mango', 'pear', 'pineapple', 'strawberry']

// const sortWords = () => {
//    const sortedWords = words.sort();
//    console.log(sortedWords);
//   }
  
//   sortWords();
  
//   14
//   const arr = [
//       {category: 'A', value: 10},
//       {category: 'B', value: 35},
//   {category: 'A', value: 15},
//   {category: 'B', value: 20},
//   {category: 'A', value: 44},
//   {category: 'B', value: 12}
// ]

// const groupArr = () => {
//     const output = {};
//     for (const obj of arr){
//     if (!output[obj.category]){
//         output[obj.category] = 0
//       }
//       output[obj.category] += obj.value
//     }
//     console.log(output);
//   }
  
//   groupArr();
  
//   15
//   const words = ['listen', 'silent', 'enlist', 'rat', 'tar']
// const searchWords = () => {
//     const anagrams = {}
//     for (const word of words) {
//         const sortedWord = [...word].sort().join('');
//         if (!anagrams[sortedWord]) {
//       anagrams[sortedWord] = [];
//     }
//     anagrams[sortedWord].push(word);
//   }
//   console.log(anagrams);
// }
  
//   searchWords();



// Assignment
// 1
// const numbers = [1, 4, 6, 10, 4, 9, 2, 1, 5, 4, 6, 8, 5]

// const distinct = () => {
//   const num = [...new Set(numbers)].sort((acc, curr) => curr - acc).slice(0, 3)
//   console.log(num);
// }

// distinct();

// 2
// const str = ['banana', 'apple', 'kiwi', 'banana', 'apple', 'kiwi']

// const frequencyCheck = () => {
//   const obj ={};
//   const arr = str.forEach((e) => {
//     obj[e] = (obj[e] || 0) + 1
//   })
//   console.log(obj);
// }

// frequencyCheck();

// 3
// const numbers = [[1, [2, [3, [4]]]], 5]

// const flatArr = () => {
//   const num = numbers.flat(Infinity);
//   console.log(num);
// }

// flatArr();

// 4
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// const multiples = () => {
//   const obj = {divisibleBy3: [], divisibleBy2Not3: [], neither: []}

//   const num = numbers.forEach((e) => {
//     if (e % 3 === 0){
//       obj.divisibleBy3.push(e)
//     }else if (e % 2 === 0){
//       obj.divisibleBy2Not3.push(e)
//     }else {
//       obj.neither.push(e)
//     }
//   })
//   console.log(obj);
// }

// multiples();

// 5
// function findDepartmentWithMostEmployees() {
//   const departments = [
//       { department: "HR", employees: [{ salary: 3000 }, { salary: 3500 }] },
//       { department: "IT", employees: [{ salary: 5000 }, { salary: 7000 }, { salary: 8000 }] }
//   ];

//   const departmentWithMostEmployees = departments.reduce((max, current) => {
//       return (current.employees.length > max.employees.length) ? current : max;
//   });

//   return departmentWithMostEmployees.department;
// }

// console.log(findDepartmentWithMostEmployees());


// 6
// function findSecondOldestAboveAverageSalary() {
//   const people = [
//       { name: "Alice", age: 40, salary: 4000 },
//       { name: "Bob", age: 30, salary: 5000 },
//       { name: "Charlie", age: 50, salary: 3000 },
//       { name: "Dave", age: 45, salary: 6000 }
//   ];

//   const averageSalary = people.reduce((sum, person) => sum + person.salary, 0) / people.length;
//   const aboveAverageSalary = people.filter(person => person.salary > averageSalary).sort((a, b) => b.age - a.age);
  
//   return aboveAverageSalary.length < 2 ? null : aboveAverageSalary[1].name;
// }

// console.log(findSecondOldestAboveAverageSalary());

// 7
// function cumulativeProduct(arr) {
//   const result = [];
//   arr.reduce((product, num) => {
//       const cumulative = product * num;
//       result.push(cumulative);
//       return cumulative;
//   }, 1);
//   return result;
// }

// const input = [1, 2, 3, 4];
// const output = cumulativeProduct(input);
// console.log(output);

// 8
// function findPersonWithMedianGrade(people) {
//   const calculateMedian = (grades) => {
//       const sortedGrades = grades.slice().sort((a, b) => a - b);
//       const mid = Math.floor(sortedGrades.length / 2);
//       return sortedGrades.length % 2 !== 0 ? sortedGrades[mid] : (sortedGrades[mid - 1] + sortedGrades[mid]) / 2;
//   };

//   const medianGrades = people.map(person => ({
//       name: person.name,
//       medianGrade: calculateMedian(person.grades)
//   }));

//   medianGrades.sort((a, b) => a.medianGrade - b.medianGrade);

//   const mid = Math.floor(medianGrades.length / 2);
//   return medianGrades[mid].name;
// }

// const input = [
//   { name: "Alice", grades: [80, 90, 100] },
//   { name: "Bob", grades: [70, 85, 95] },
//   { name: "Charlie", grades: [60, 75, 80] }
// ];

// const result = findPersonWithMedianGrade(input);
// console.log(result);

// 9
// function getAcronymAndWordCount(strings) {
//   return strings.map(str => {
//       const words = str.split(' ');
//       const acronym = words.map(word => word[0]).join('').toUpperCase();
//       return { acronym, words: words.length };
//   });
// }

// const input1 = ["Hello World", "Data Science", "Artificial Intelligence"];
// const output1 = getAcronymAndWordCount(input1);
// console.log(output1);

// 10
// function findLongestString(strings) {
//   return strings.reduce((longest, current) => current.length > longest.length ? current : longest, "");
// }

// const input2 = ["apple", "banana", "pineapple", "kiwi"];
// const output2 = findLongestString(input2);
// console.log(output2);

// 11
// function firstNonRepeatingCharacter() {
//   const str = "swiss";
//   const charCount = {};

//   for (const char of str) {
//       charCount[char] = (charCount[char] || 0) + 1;
//   }

//   for (const char of str) {
//       if (charCount[char] === 1) {
//           return char;
//       }
//   }

//   return null;
// }

// console.log(firstNonRepeatingCharacter());

// 12
// function secondMostFrequentWord() {
//   const str = "the quick brown fox jumps over the lazy dog the quick brown";
//   const words = str.split(' ');
//   const wordCount = {};

//   for (const word of words) {
//       wordCount[word] = (wordCount[word] || 0) + 1;
//   }

//   const sortedWords = Object.keys(wordCount).sort((a, b) => wordCount[b] - wordCount[a]);

//   return sortedWords.length < 2 ? null : sortedWords[1];
// }

// console.log(secondMostFrequentWord());

// 13
// function findWordsOnOneRow() {
//   const words = ["type", "row", "queen", "sad"];
//   const rows = [
//       new Set('qwertyuiop'),
//       new Set('asdfghjkl'),
//       new Set('zxcvbnm')
//   ];

//   return words.filter(word => {
//       const lowerCaseWord = word.toLowerCase();
//       return rows.some(row => [...lowerCaseWord].every(char => row.has(char)));
//   });
// }

// console.log(findWordsOnOneRow());

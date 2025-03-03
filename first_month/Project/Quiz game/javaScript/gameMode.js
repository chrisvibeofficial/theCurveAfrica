const questions = [
  {
      question: "what is java script?",
      answers: [
          { text: "hypertext markup language", correct: false },
          { text: "a programing language", correct: true },
          { text: "the brain of a file", correct: false },
          { text: "none of the above", coreect: false },
      ]
  },

  {
      question: "What is the purpose of the HTML &lt;ul&gt; tag?",
      answers: [
          { text: "To create an ordered list", correct: false },
          { text: "To create an unordered list", correct: true },
          { text: "To add an image to the page", correct: false },
          { text: "To display a video", coreect: false },
      ]
  },

  {
      question: " Which CSS property is used to set the text color?",
      answers: [
          { text: "color", correct: true },
          { text: "text-color", correct: false },
          { text: "font-color", correct: false },
          { text: "background-color", coreect: false },
      ]
  },

  {
      question: "What is the purpose of the HTML &lt;ol&gt; tag?",
      answers: [
          { text: "To create an unordered list", correct: false },
          { text: "To create an ordered list", correct: true },
          { text: "To add an image to the page", correct: false },
          { text: "To display a video", coreect: false },
      ]
  },
  {
      question: "What is the purpose of JavaScript event loop?",
      answers: [
          { text: "To handle asynchronous code", correct: true },
          { text: "To handle synchronous code", correct: false },
          { text: "To handle errors and exceptions", correct: false },
          { text: "To handle user input", coreect: false },
      ]
  },

  {
      question: "Which CSS property is used to set the font size?",
      answers: [
          { text: "font-size", correct: true },
          { text: "text-size", correct: false },
          { text: "font-family", correct: false },
          { text: "text-family", coreect: false },
      ]
  },

  {
      question: "which of the following is a javascript keyword?",
      answers: [
          { text: "kind", correct: false },
          { text: "either", correct: false },
          { text: "let", correct: true },
          { text: "ben", coreect: false },
      ]
  },

  {
      question: "what is css?",
      answers: [
          { text: "cascadin control sheet", correct: false },
          { text: "hypertext markupn language", correct: false },
          { text: "cascading style sheet", correct: true },
          { text: "cascading sheet style", coreect: false },
      ]
  },

  {
      question: "how does javascript sees string?",
      answers: [
          { text: "text", correct: true },
          { text: "space", correct: false },
          { text: "number", correct: false },
          { text: "decimal", coreect: false },
      ]
  },

  {
      question: "what is the full meaning of URL?",
      answers: [
          { text: "universal locator", correct: false },
          { text: "unical restort locator", correct: false },
          { text: "uniform resource locator", correct: true },
          { text: "uniform reform location", coreect: false },
      ]
  },

  {
    question: "Write a JavaScript function to reverse a string.",
    answers: [
        { text: "function reverse(str) {return str.split('').reverse().join('');}", correct: true },
        { text: "function reverse(str) {return str.split('').join('');}", correct: false },
        { text: "function reverse(str) {return str.reverse();}", correct: false },
        { text: "function reverse(str) {return str.split('').reverse();}", coreect: false },
    ]
},

{
    question: "What is the purpose of the HTML &lt;table&gt; tag?",
    answers: [
        { text: "To create a list", correct: false },
        { text: "To add an image to the page", correct: false },
        { text: "To display data in a table", correct: true },
        { text: "To create a hyperlink", coreect: false },
    ]
},

{
    question: "Which HTML tag is used to create a hyperlink?",
    answers: [
        { text: "&lt;a&gt;", correct: true },
        { text: "&lt;img&gt;", correct: false },
        { text: "&lt;p&gt;", correct: false },
        { text: "&lt;h1&gt;", coreect: false },
    ]
},

{
    question: "What is the diffrence between monolithic architecture and microservices?",
    answers: [
        { text: "Monolithic is decentralized, microservices is centralized", correct: false },
        { text: "Monolithic is centralized, microservices is decentralized", correct: true },
        { text: "Monolithic is for small apps, microservices is for large apps", correct: false },
        { text: "Monolithic is for large apps, microservices is for small apps", coreect: false },
    ]
},

{
    question: "What is the difference between a div and a span?",
    answers: [
        { text: "Div is inline, span is block-level", correct: false },
        { text: "Div is block-level, span is inline", correct: true },
        { text: "Div is for text, span is for images", correct: false },
        { text: "Div is for images, span is for text", coreect: false },
    ]
},

];

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answers-button');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

function getRandomNumber() {
    if (numbers.length === 0) {
        throw new Error("All numbers have been used.");
    }
    else {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const randomNumber = numbers[randomIndex];
    numbers.splice(randomIndex, 1);
    return randomNumber;
    }
}
function startQuiz(){
    getRandomNumber();
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn')
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer)
  })
}

function resetState(){
    nextButton.style.display = 'none';
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    }
    else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = 'Play Again';    
    nextButton.style.display = 'block';
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }
    else{
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

 

startQuiz();
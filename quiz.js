// List of questions and options
const questions = [
  {
    question: "Who is the Prime Minister of India?",
    options: ["Asgar", "Sabbas", "Rahul", "Modi"],
    correctAnswer: "Modi",
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
    correctAnswer: "Blue Whale",
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Mount Everest", "Kangchenjunga", "Mount Kilimanjaro"],
    correctAnswer: "Mount Everest",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Diamond", "Iron", "Steel"],
    correctAnswer: "Diamond",
  },
  {
    question: "Who developed the theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Marie Curie"],
    correctAnswer: "Albert Einstein",
  },
  {
    question: "Which element has the chemical symbol O?",
    options: ["Oxygen", "Osmium", "Ozone", "Opium"],
    correctAnswer: "Oxygen",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correctAnswer: "Pacific",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "South Korea", "Vietnam"],
    correctAnswer: "Japan",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    correctAnswer: "Vatican City",
  },
  {
    question: "Which ocean is the Bermuda Triangle located in?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
      "Southern Ocean",
    ],
    correctAnswer: "Atlantic Ocean",
  },
  {
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7",
  },
  {
    question: "Which of these is not a primary color?",
    options: ["Red", "Yellow", "Green", "Blue"],
    correctAnswer: "Green",
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Earth", "Mercury", "Mars"],
    correctAnswer: "Mercury",
  },
  {
    question: "In which country was the first modern Olympic Games held?",
    options: ["USA", "France", "Greece", "Germany"],
    correctAnswer: "Greece",
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Jane Austen",
      "Mark Twain",
    ],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "What is the chemical formula for water?",
    options: ["CO2", "H2O", "O2", "H2SO4"],
    correctAnswer: "H2O",
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    options: ["Lion", "Tiger", "Elephant", "Bear"],
    correctAnswer: "Lion",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElem = document.getElementById("question");
const optionsElem = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultDiv = document.getElementById("result");
const questionNoElem = document.getElementById("questionNo");

// Display current question and options
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElem.textContent = currentQuestion.question;

  // Update question number
  questionNoElem.textContent = currentQuestionIndex + 1;

  // Clear previous options
  optionsElem.innerHTML = "";

  // Display new options
  currentQuestion.options.forEach((option, index) => {
    const optionElem = document.createElement("div");
    optionElem.classList.add("options");
    optionElem.innerHTML = `
        <input type="radio" id="option${index}" name="option" class="option" value="${option}">
        <label for="option${index}">${option}</label>
      `;
    optionsElem.appendChild(optionElem);
  });
}

nextBtn.addEventListener("click", function () {
  const selectedOption = document.querySelector("input[name='option']:checked");

  // Check if an option is selected
  if (!selectedOption) {
    alert("Please select an option!");
    return;
  }

  // Check if the answer is correct
  const selectedAnswer = selectedOption.value;
  if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
    score++;
  }

  // Move to next question
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  questionElem.textContent = "Quiz Completed!";
  optionsElem.innerHTML = "";
  nextBtn.style.display = "none";

  // Display final score and pass/fail message
  resultDiv.textContent = `You scored ${score} out of ${questions.length}. `;

  if (score >= 15) {
    resultDiv.style.color = "green";
    resultDiv.textContent += "Maje kro Job pakki hai!";
  } else {
    resultDiv.style.color = "red";
    resultDiv.textContent += "You failed. Better luck next time!";
  }
}

// Initial call to display the first question
displayQuestion();

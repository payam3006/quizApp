const q = console.log;

let index = -1;
let correctAnswers = 0;
let userAnswer = "";
let isSelected = true;

const questions = [
  {
    question: "Which language runs in a web browser?",
    answer: "JavaScript",
    choice1: "C",
    choice2: "JavaScript",
    choice3: "Java",
    choice4: "Python",
  },
  {
    question: "What dose CSS stand for?",
    answer: "Cascading Style Sheets",
    choice1: "Central Style Sheets",
    choice2: "Cascading Simple Sheets",
    choice3: "Cascading Style Sheets",
    choice4: "Cars SUVs Sibil!",
  },
  {
    question: "What dose HTML stand for?",
    answer: "Hyper Text Markup Language",
    choice1: "Hyper Text Markup Language",
    choice2: "Hyper Text Markdown Language",
    choice3: "Hooman Text Markup Language",
    choice4: "Hayedeh Text Markup Language",
  },
  {
    question: "What year was JavaScript launched?",
    answer: "1995",
    choice1: "1996",
    choice2: "1995",
    choice3: "1994",
    choice4: "none of my business!",
  },
];

function runQuestion(i) {
  if (i == questions.length) {
    if (userAnswer === questions[i - 1].answer) {
      correctAnswers += 1;
    }
    document.querySelector(
      "form"
    ).innerHTML = `<h4 class="question">You answered ${correctAnswers}/${questions.length} questions correctly</h4>
  
  <div class="btn" onclick="runQuestion(0)">Reload</div>`;
    index = -1;
    correctAnswers = 0;
    userAnswer = "";
    isSelected = true;
  } else {
    if (isSelected) {
      try {
        if (userAnswer === questions[i - 1].answer) {
          correctAnswers += 1;
        }
      } catch (error) {
        q(error);
      }
      document.querySelector("form").innerHTML = `<h4 class="question">${
        questions[i].question
      }</h4>
    <div class="choices">
        <label for="inp1" onclick="select()">
            <input id="inp1" type="radio" name="choices" value="${
              questions[i].choice1
            }" onchange="select()">
            ${questions[i].choice1}
        </label>
        <label for="inp2" onclick="select()">
            <input id="inp2" type="radio" name="choices" value="${
              questions[i].choice2
            }" onchange="select()">
            ${questions[i].choice2}
        </label>
        <label for="inp3" onclick="select()">
            <input id="inp3" type="radio" name="choices" value="${
              questions[i].choice3
            }" onchange="select()">
            ${questions[i].choice3}
        </label>
        <label for="inp4" onclick="select()">
            <input id="inp4" type="radio" name="choices" value="${
              questions[i].choice4
            }" onchange="select()">
            ${questions[i].choice4}
        </label>
    </div>
    <div class="btn" onclick="runQuestion(${i + 1})">Submit</div>`;
    }
    q(index);
    index += 1;
    q(index);
    isSelected = false;
  }
}

function select() {
  isSelected = true;
  for (let i = 1; i <= 4; i++) {
    if (document.querySelectorAll("input")[i - 1].checked) {
      if (i == 1) {
        userAnswer = questions[index].choice1;
      } else if (i == 2) {
        userAnswer = questions[index].choice2;
      } else if (i == 3) {
        userAnswer = questions[index].choice3;
      } else {
        userAnswer = questions[index].choice4;
      }
    }
  }
  q(userAnswer);

  // userAnswer = Text;
}

runQuestion(0);

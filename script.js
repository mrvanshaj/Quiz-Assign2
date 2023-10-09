console.log("Start");

const question_bank = [
    {
        question: "1. Which one of the following river flows between Vindhyan and Satpura ranges?",
        options: [
            { text: "Narmada", value: true },
            { text: "Mahanadi", value: false },
            { text: "Son", value: false },
            { text: "Netravati", value: false },
        ]
    },
    {
        question: "The Central Rice Research Station is situated in?",
        options: [
            { text: "Chennai", value: false },
            { text: "Cuttack", value: true },
            { text: "Bangalore", value: false },
            { text: "Quilon", value: false },
        ]
    },
    {
        question: "Question 3",
        options: [
            { text: "Answer A3", value: false },
            { text: "Answer B3", value: true },
            { text: "Answer C3", value: false },
            { text: "Answer D3", value: false },
        ]
    },
    {
        question: "Question 4",
        options: [
            { text: "Answer A4", value: false },
            { text: "Answer B4", value: false },
            { text: "Answer C4", value: true },
            { text: "Answer D4", value: false },
        ]
    },
    {
        question: "Question 5",
        options: [
            { text: "Answer A5", value: false },
            { text: "Answer B5", value: false },
            { text: "Answer C5", value: false },
            { text: "Answer D5", value: true },
        ]
    },
    {
        question: "Question 6",
        options: [
            { text: "Answer A6", value: true },
            { text: "Answer B6", value: false },
            { text: "Answer C6", value: false },
            { text: "Answer D6", value: false },
        ]
    },
    {
        question: "Question 7",
        options: [
            { text: "Answer A7", value: true },
            { text: "Answer B7", value: false },
            { text: "Answer C7", value: false },
            { text: "Answer D7", value: false },
        ]
    },
    {
        question: "Question 8",
        options: [
            { text: "Answer A8", value: true },
            { text: "Answer B8", value: false },
            { text: "Answer C8", value: false },
            { text: "Answer D8", value: false },
        ]
    },
    {
        question: "Question 9",
        options: [
            { text: "Answer A9", value: true },
            { text: "Answer B9", value: false },
            { text: "Answer C9", value: false },
            { text: "Answer D9", value: false },
        ]
    }
];

const question = document.getElementsByClassName("question")[0];
const optionA = document.getElementsByClassName("option")[0];
const optionB = document.getElementsByClassName("option")[1];
const optionC = document.getElementsByClassName("option")[2];
const optionD = document.getElementsByClassName("option")[3];
const option1 = document.getElementsByClassName("o-value")[0];
const option2 = document.getElementsByClassName("o-value")[1];
const option3 = document.getElementsByClassName("o-value")[2];
const option4 = document.getElementsByClassName("o-value")[3];
const timer = document.getElementById("timer");
const optn_container = document.getElementsByClassName("options-container")[0];
const startQuizButton = document.getElementById("start");
const nextButton = document.getElementsByClassName("next")[0];
let score = 0;
let currentQuestionIndex = 0;
let myTimer;

function startTimer() {
    const currentTime = Date.now();
    // const endTime = 600000 + currentTime;
    const endTime = 10000 + currentTime;
    myTimer = setInterval(countDownTimer, 1000);
    function countDownTimer() {
        const currentTime = Date.now();
        const remainTime = endTime - currentTime;
        const min = Math.floor(remainTime / 60000);
        const sec = Math.floor((remainTime - (min * 60000)) / 1000);
        console.log(`${min}:${sec}`);
        if (min == 0 && sec == 0) {
            clearInterval(myTimer);
            nextQuestion();
            timer.innerHTML = `Time is over`;
            optn_container.classList.add("disabled");

            // alert(`Your time has been up!`);
        } else {
            timer.innerHTML = `${min}:${sec}`;
        }
    }
}
function nextQuestion() {
    optn_container.classList.remove("disabled")
    clearInterval(myTimer);
    console.log("Next Button Clicked")
    startTimer();
    if (currentQuestionIndex < question_bank.length) {
        question.innerText = `${question_bank[currentQuestionIndex].question} and Your score is ${score} & current question index is ${currentQuestionIndex}`;
        option1.innerText = question_bank[currentQuestionIndex].options[0].text;
        option2.innerText = question_bank[currentQuestionIndex].options[1].text;
        option3.innerText = question_bank[currentQuestionIndex].options[2].text;
        option4.innerText = question_bank[currentQuestionIndex].options[3].text;
        optionA.classList.remove("bgred");
        optionA.classList.remove("bggreen");
        optionB.classList.remove("bgred");
        optionB.classList.remove("bggreen");
        optionC.classList.remove("bgred");
        optionC.classList.remove("bggreen");
        optionD.classList.remove("bgred");
        optionD.classList.remove("bggreen");
        optionA.classList.remove("disabled");
        optionB.classList.remove("disabled");
        optionC.classList.remove("disabled");
        optionD.classList.remove("disabled");
        currentQuestionIndex++;

    } else {
        optn_container.classList.add("hidden");
        question.innerText = `QUIZ ENDED | Your score is ${score}`;
        clearInterval(myTimer);
        timer.innerText = ""
        startQuizButton.classList.remove("hidden");
        nextButton.classList.add("hidden")
    }
}
function startQuiz() {
    currentQuestionIndex = 0;
    optn_container.classList.remove("hidden");
    question.classList.remove("hidden");
    startQuizButton.classList.add("hidden");
    nextButton.classList.remove("hidden");
    nextQuestion();
    console.log("Start Button Clicked")
}

function AnsCheck0() {
    console.log("Option 1 clicked");
    if (question_bank[currentQuestionIndex].options[0].value == true) {
        score++;
        console.log(score);
        optionA.classList.add("bggreen");
        optionA.classList.add("disabled");
        optionB.classList.add("disabled");
        optionC.classList.add("disabled");
        optionD.classList.add("disabled");
    } else {
        optionA.classList.add("bgred");
        optionA.classList.add("disabled");
        optionB.classList.add("disabled");
        optionC.classList.add("disabled");
        optionD.classList.add("disabled");
        if (question_bank[currentQuestionIndex].options[1].value == true) {
            optionB.classList.add("bggreen");
        }
        if (question_bank[currentQuestionIndex].options[2].value == true) {
            optionC.classList.add("bggreen");
        }
        if (question_bank[currentQuestionIndex].options[3].value == true) {
            optionD.classList.add("bggreen");
        }
    }
}
function AnsCheck1() {
    console.log("Option 2 clicked");
    if (question_bank[currentQuestionIndex].options[1].value == true) {
        score++;
        console.log(score);
        optionB.classList.add("bggreen");
        optionA.classList.add("disabled");
        optionB.classList.add("disabled");
        optionC.classList.add("disabled");
        optionD.classList.add("disabled");
    } else {
        optionB.classList.add("bgred");
        optionA.classList.add("disabled");
        optionB.classList.add("disabled");
        optionC.classList.add("disabled");
        optionD.classList.add("disabled");
        if (question_bank[currentQuestionIndex].options[0].value == true) {
            optionA.classList.add("bggreen");
        }
        if (question_bank[currentQuestionIndex].options[2].value == true) {
            optionC.classList.add("bggreen");
        }
        if (question_bank[currentQuestionIndex].options[3].value == true) {
            optionD.classList.add("bggreen");
        }
    }
}
function AnsCheck2() {
    console.log("Option 3 clicked");
    if (question_bank[currentQuestionIndex].options[2].value == true) {
        score++;
        console.log(score);
        optionC.classList.add("bggreen");
        optionA.classList.add("disabled");
        optionB.classList.add("disabled");
        optionC.classList.add("disabled");
        optionD.classList.add("disabled");
    } else {
        optionC.classList.add("bgred");
        optionA.classList.add("disabled");
        optionB.classList.add("disabled");
        optionC.classList.add("disabled");
        optionD.classList.add("disabled");
        if (question_bank[currentQuestionIndex].options[1].value == true) {
            optionB.classList.add("bggreen");
        }
        if (question_bank[currentQuestionIndex].options[0].value == true) {
            optionA.classList.add("bggreen");
        }
        if (question_bank[currentQuestionIndex].options[3].value == true) {
            optionD.classList.add("bggreen");
        }
    }
}
function AnsCheck3() {
    console.log("Option 4 clicked");
    if (question_bank[currentQuestionIndex].options[3].value == true) {
        score++;
        console.log(score);
        optionD.classList.add("bggreen");
        optionA.classList.add("disabled");
        optionB.classList.add("disabled");
        optionC.classList.add("disabled");
        optionD.classList.add("disabled");
    } else {
        optionD.classList.add("bgred");
        optionA.classList.add("disabled");
        optionB.classList.add("disabled");
        optionC.classList.add("disabled");
        optionD.classList.add("disabled");
        if (question_bank[currentQuestionIndex].options[1].value == true) {
            optionB.classList.add("bggreen");
        }
        if (question_bank[currentQuestionIndex].options[0].value == true) {
            optionA.classList.add("bggreen");
        }
        if (question_bank[currentQuestionIndex].options[2].value == true) {
            optionC.classList.add("bggreen");
        }
    }
}


startQuizButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);
optionA.addEventListener("click", AnsCheck0);
optionB.addEventListener("click", AnsCheck1);
optionC.addEventListener("click", AnsCheck2);
optionD.addEventListener("click", AnsCheck3);

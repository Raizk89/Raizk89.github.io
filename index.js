const quizData=[
    {
        question: "1. In what year was the first Kingdom Hearts game released?",
        a: "2000",
        b: "2002",
        c: "2004",
        d: "2005",
        correct: "b",
    },
    {
        question: "2. Who is the main protagonist of the Kingdom Hearts series?",
        a: "Riku",
        b: "Kairi",
        c: "Sora",
        d: "Donald Duck",
        correct: "c"
    },
    {
        question: "3. What is the name of the weapon that Sora wields?",
        a: "Keyblade",
        b: "Sword of Light",
        c: "Excalibur",
        d: "Buster Sword",
        correct: "a"
    },
    {
        question: "4. Which Disney characters are a party member in the Kingdom Hearts series?",
        a: "Goofy",
        b: "Mickey Mouse",
        c: "Donald Duck",
        d: "Pluto",
        correct: "a and c"
    },
    {
        question: "5. What is the name of the main antagonist in the Kingdom Hearts series?",
        a: "Xehanort",
        b: "Ansem",
        c: "Xemnas",
        d: "Maleficent",
        correct: "a"
    }
] ;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
    optionsElement.innerHTML = `
        <label><input type="radio" name="option" value="a"> ${question.a}</label><br>
        <label><input type="radio" name="option" value="b"> ${question.b}</label><br>
        <label><input type="radio" name="option" value="c"> ${question.c}</label><br>
        <label><input type="radio" name="option" value="d"> ${question.d}</label>
    `;
}
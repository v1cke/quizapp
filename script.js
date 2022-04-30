let questions = [
    {
        "question": "Wer hat Bitcoin erfunden?",
        "answer_1": "Edward Snowden",
        "answer_2": "Satoshi Nakamoto",
        "answer_3": "Sean Davis",
        "answer_4": "Kathy Hummels",
        "right_answer": 2
    },
    {
        "question": "Wer Fusbball Bundesliga Meister 2012?",
        "answer_1": "FC Bayern",
        "answer_2": "SV Werder Bremen",
        "answer_3": "Borussia Dortmund",
        "answer_4": "Schalke 04",
        "right_answer": 3
    },
    {
        "question": "Wieviele Nachbarländer hat Deutschland",
        "answer_1": "7",
        "answer_2": "5",
        "answer_3": "12",
        "answer_4": "9",
        "right_answer": 4
    },
    {
        "question": "Welches Land hat die meisten Inseln weltweit?",
        "answer_1": "Japan",
        "answer_2": "Australien",
        "answer_3": "Schweden",
        "answer_4": "Thailand",
        "right_answer": 3
    },
    {
        "question": "Wann wurde Netflix gegründet?",
        "answer_1": "1999",
        "answer_2": "2005",
        "answer_3": "1997",
        "answer_4": "2009",
        "right_answer": 3
    },
    {
        "question": "Wieviele Atemzüge nimmt der menschliche Körper durchschnittlich täglich?",
        "answer_1": "20.000",
        "answer_2": "36.000",
        "answer_3": "14.400",
        "answer_4": "24.000",
        "right_answer": 1
    }
];


let currentQuestion = 0;


function init() {
    document.getElementById('amountquestions').innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {
    let question = questions[currentQuestion]
    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer1').innerHTML = question['answer_1'];
    document.getElementById('answer2').innerHTML = question['answer_2'];
    document.getElementById('answer3').innerHTML = question['answer_3'];
    document.getElementById('answer4').innerHTML = question['answer_4'];
    document.getElementById('currentQuestionPage').innerHTML = currentQuestion+1;
}


function nextQuestion() {
    currentQuestion ++;
    showQuestion();
}
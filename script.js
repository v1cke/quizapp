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
        "question": "Wer war Fussball Bundesliga Meister 2012?",
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
let rightQuestions = 0;
let audio_right = new Audio('right.mp3');
let audio_wrong = new Audio('wrong.mp3');


function init() {
    document.getElementById('amountquestions').innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {

    if (currentQuestion >= questions.length) {
        templateQuestionFinished()
    } else {
        templateProgressbar();
        templateNextQuestion();
    }
}


function nextQuestion() {
    currentQuestion++;
    document.getElementById('nextBtn').disabled = true;     // Button für nächste Frage deaktiviert
    templateCleanAnswers();
    showQuestion();
}


function answer(selection) {
    let question = questions[currentQuestion];              // packt die array Nr. in die Variable question         
    let selectedAnswerNo = selection.slice(-1);             // die letzte Zahl aus "answer_1/2/3/4" wird extrahiert
    let i = question['right_answer']                        // die zahl der richtigen Antwort wird zu Variable i
    if (selectedAnswerNo == i) {
        document.getElementById(selection).parentNode.classList.add('bg-success'); // das übergordnete Element kriegt eine Background Color
        audio_right.play();
        rightQuestions++;
    }
    else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById('answer_' + i).parentNode.classList.add('bg-success');
        audio_wrong.play();
    }
    document.getElementById('nextBtn').disabled = false;        // der Button für die näöchste Frage wird aktiviert
}


function templateCleanAnswers() {       // setzt die Farbmarkierungen der Antworten zurück
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}


function templateProgressbar() {
    let percent = currentQuestion / questions.length;       //Prozentsatz ausrechnen
    percent = Math.round(percent * 100);                // Prozent aufrunden
    document.getElementById('progressBar').innerHTML = `${percent} %`;  // Progress % Zahl als Text
    document.getElementById('progressBar').style = `width: ${percent}%`; // Progress bar in % entsprechent auffüllen
}


function templateNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    document.getElementById('currentQuestionPage').innerHTML = currentQuestion + 1;  //aktuelle Seite ist immer Array-Nr. +1
}


function templateQuestionFinished() {
    document.getElementById('quizBody').innerHTML = /*html*/ `
        <div class="text-center"> Du hast alle Fragen beantwortet. Vielen Dank für die Teilnahme</div> 
        <div class="text-center">Du hast <b>${rightQuestions}</b> von <b>${questions.length}</b> Fragen richtig beantwortet</div>
        <div class="btn-center"><button type="button" class="btn btn-outline-secondary" onclick="window.location.reload()">Spiel erneut spielen</button></div>
        `;
    document.getElementById('quizImg').src = 'img/win.jpg';
    document.getElementById('progressBar').innerHTML = `100%`;
    document.getElementById('progressBar').style = `width: 100%`;
}
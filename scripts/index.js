var counterQuestion = 0
var qwestions = [
    {
        "qwes":"1 + 2 + 3 + 4 = ?",
        "ans1": 22,
        "ans2": 13,
        "ans3": 10,
        "ans4": 32,
        "rightAns": 10,
    },
    {
        "qwes":"8 + 9 - 6 + 3 - 2 = ?",
        "ans1": 33,
        "ans2": 12,
        "ans3": 27,
        "ans4": 14,
        "rightAns": 12,
    },
    {
        "qwes":"(9 * 3) + (15 / 3) - 7 = ?",
        "ans1": 65,
        "ans2": 43,
        "ans3": 25,
        "ans4": 30,
        "rightAns": 25,
    },
    {
        "qwes":"3 + (9 * 4) - (35 / 7) + 12 = ?",
        "ans1": 46,
        "ans2": 37,
        "ans3": 14,
        "ans4": 84,
        "rightAns": 46,
    },
    {
        "qwes": "5 (6 / 3 + 4 - 2) / 2 * 5 + 3 = ?",
        "ans1": 91,
        "ans2": 87,
        "ans3": 53,
        "ans4": 67,
        "rightAns": 53,
    },
]
var qwestion = document.getElementById("qwestion")
var answer1 = document.getElementById("answer1")
var answer2 = document.getElementById("answer2")
var answer3 = document.getElementById("answer3")
var answer4 = document.getElementById("answer4")
var answerR
var panner = document.getElementsByClassName("gamePaner")[0]
var caption = document.getElementById("caption")
var captionBtn = document.getElementById("start")
var answersGroup = document.getElementsByClassName("answer")
var questionNumber = 0
var timer
var callDown
var score = document.getElementById("score")
var scoreCounter = 3
var secTimer

function question() {
        questionNumber = questionNumber + 1
        document.getElementById("questionNumber").innerHTML = "Question number:" + questionNumber
        qwestion.innerHTML = qwestions[counterQuestion].qwes
        answer1.innerHTML = qwestions[counterQuestion].ans1
        answer2.innerHTML = qwestions[counterQuestion].ans2
        answer3.innerHTML = qwestions[counterQuestion].ans3
        answer4.innerHTML = qwestions[counterQuestion].ans4
        answerR = qwestions[counterQuestion].rightAns
        counterQuestion = counterQuestion + 1 
}
function start(){
    panner.style.display = "none"
    document.getElementById("questionNumber").innerHTML = "Question number:" + questionNumber
    callDown = setTimeout(function(){
        wrongAnswer()
    }, 15000)
    callDownTimer()
}
function rightAnswer(){
    clearTimeout(callDown)
    clearInterval(secTimer)
    setTimeout(function(){
        captionBtn.style.display = "inline-block"
    }, 2500)
    panner.style.display = "block"
    captionBtn.innerHTML = "Next"
    caption.innerHTML = "Great job"
    scoreCounter = scoreCounter + 3
    score.innerHTML = "Score: " + scoreCounter
    document.getElementById("rightSound").play()
    question()
}
function wrongAnswer(){
    clearTimeout(callDown)
    clearInterval(secTimer)
    setTimeout(function(){
        captionBtn.style.display = "inline-block"
    }, 2500)
    panner.style.display = "block"
    captionBtn.innerHTML = "Retry"
    caption.innerHTML = "Oh sorry!"
    scoreCounter = scoreCounter - 3
    score.innerHTML = "Score: " + scoreCounter
    document.getElementById("wrongAnswer").play()
    if(scoreCounter <= 0){
        questionNumber = 1
        counterQuestion = 0
        scoreCounter = "Score: " + 0
        score.innerHTML = scoreCounter
        document.getElementById("questionNumber").innerHTML = "Question number: " + questionNumber
        qwestion.innerHTML = qwestions[counterQuestion].qwes
        answer1.innerHTML = qwestions[counterQuestion].ans1
        answer2.innerHTML = qwestions[counterQuestion].ans2
        answer3.innerHTML = qwestions[counterQuestion].ans3
        answer4.innerHTML = qwestions[counterQuestion].ans4
        answerR = qwestions[counterQuestion].rightAns
    }else{
        return
    }
}
function callDownTimer(){
    var sec = document.getElementById("callDownTimer")
    var secCounter = 15
    secTimer = setInterval(function (){
        secCounter  = secCounter - 1
        sec.innerHTML = secCounter
        if (secCounter == 0) {
            clearInterval(secTimer)
        }
    }, 1000)
}
function game(ans){
    captionBtn.style.display = "none"
    if(questionNumber <= qwestions.length-1){
        if(answerR == parseInt(ans)){
        rightAnswer()
    }else{
        wrongAnswer()
    }
    }else{
        clearTimeout(callDown)
        panner.style.display = "inline"
        caption.innerHTML = "Congratulations"
        captionBtn.style.display = "none"
    }
}

question()
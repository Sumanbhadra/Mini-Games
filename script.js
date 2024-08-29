
const userChoiceImg = document.getElementById('user-choice');
const oppChoiceImg = document.getElementById('opponent-choice');
const resultText = document.getElementById('result-text');

const choiceScissor = document.getElementById('scissor');
const choiceRock = document.getElementById('rock');
const choicePaper = document.getElementById('paper');

const userScore = document.getElementById('user-score')
const oppScore = document.getElementById('opponent-score')

choiceScissor.addEventListener('click',userChoice);
choicePaper.addEventListener('click',userChoice);
choiceRock.addEventListener('click',userChoice);

let userwinScore = 0
let oppwinScore = 0


function userChoice(){
  choiceScissor.classList.remove('active');
  choiceRock.classList.remove('active');
  choicePaper.classList.remove('active');
  this.classList.add('active');

  userChoiceImg.src = `assets/${this.id}.jpg`;

  oppChoice(this.id);


}

const choice = ["paper","scissor","rock"];

function oppChoice(user){
  let index = Math.floor(Math.random()*3);
  oppChoiceImg.src = `assets/${choice[index]}.jpg`;

  result(user,choice[index])

}

function result(user, opp) {
  if (user === opp) {
      draw();
  } else if (
      (user === "rock" && opp === "scissor") ||
      (user === "paper" && opp === "rock") ||
      (user === "scissor" && opp === "paper")
  ) {
      win();
  } else {
      lose();
  }
}


function win(){
  
  userwinScore += 1
  userScore.innerText = userwinScore;
  resultText.innerHTML = "You won 🏆"

}
function lose(){
  oppwinScore +=1
  oppScore.innerText = oppwinScore;
  resultText.innerHTML = "You lost 🥺"
}
function draw(){
  userScore.innerText = userwinScore;
  resultText.innerHTML = "Draw  🤝"
}
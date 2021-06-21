var GameState = 0;
var AllContestants , ContestantCount;
var Answer;
var quiz;
var database;
function setup(){
  createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}
function draw(){
  background("BLACK");
  if(ContestantCount == 2){
    Quiz.update(1);
  }
  if(GameState == 1){
    quiz.play();
    clear();
  }
}

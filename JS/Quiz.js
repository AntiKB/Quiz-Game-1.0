class Quiz {
  constructor(){

  }
  getState(){
    var GameStateRef  = database.ref('GameState');
    GameStateRef.on("value",function(data){
       GameState = data.val();
    })
  }
  update(state){
    database.ref('/').update({
      GameState: state
    });
  }
  async start(){
    if(GameState == 0){
      var contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      var question = new Question();
      question.display();
    }
  }
  play(){
    Question.title.show();
    Question.input1.show();
    Question.input2.show();
    Question.buttton.show();
    Question.button.show();
    Question.question.show();
    Question.option1.show();
    Question.option2.show();
    Question.option3.show();
    Question.option4.show();

    background("WHITE");

    //write code to show a heading for showing the result of Quiz

    contestant.getContestantInfo;

    if(AllContestants != undefined){
      fill("BLUE");
      textSize(50);
      text("!NOTE : Conetstant who has answered CORRECT are highlighted in GREEN color!",130,230);
    }

    for(var plr in AllContestants){
      var CorrectAnswer = "2";
      if(CorrectAnswer == AllContestants[plr].answer)
        fill("GREEN");
      else
        fill("RED");
    }
  }
}
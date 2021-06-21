class Contestant{
  constructor(){
    this.index = null;
    this.answer = 0;
    this.name = null;
  }
  getCount(){
    var ContestantCountRef = database.ref('ContestantCount');
    ContestantCountRef.on("value",(data)=>{
      ContestantCount = data.val();
    })
  }
  updateCount(Count){
    database.ref('/').update({
      ContestantCount: Count
    });
  }
  update(){
    var ContestantIndex = "Contestants/Contestant" + this.index;
    database.ref(ContestantIndex).set({
      name:this.name,
      answer:this.answer
    });
  }
  static getPlayerInfo(){
    var ContestantInfoRef = database.ref('Contestants');
    ContestantInfoRef.on("value",(data)=>{
      AllContestants = data.val();
    })
  }
}

//method needed to listen for each button
function Player(){
  this.score=0;
  this.incrementScore=function(){
     this.score+=15;
  };
  this.resetScore=function(){
      this.score=0;
  };
}
//logic for tennis match
//3 states regular, deuce, advnatage
function Game(){
  var Person1=new Player();
  var Person2=new Player();
  this.scorePerson1=function(){Person1.incrementScore();};
  this.scorePerson2=function(){Person2.incrementScore();};
  this.resetScore=function(){
      Person1.resetScore();
    Person2.resetScore();
  };
  this.testScore=function(){
    //if the game is over
    if(Person1.score>45&&Person2.score<=30||Person2.score>45&&Person1.score<=30){
      this.resetScore();
    }
    //deuce state
    if(Person1.score==45&&Person2.score==45){
      Person1.score=30;
      Person2.score=30;
    }
  };
  this.getScoreString=function(){
    return "Player 1: "+Person1.score+"\nPlayer 2: "+Person2.score;
  };
}

var game=new Game();
simply.on('singleClick', function(e) {
  switch(e.button){
    case 'up':
      game.scorePerson1();
      break;
    case 'down':
      game.scorePerson2();
      break;
    case 'select':
      game.resetScore();
      break;
  }
  game.testScore();
  console.log(game.getScoreString());
  simply.text({
  title: 'Tennis Score',
    body: game.getScoreString(),
}, true);
});
 game.testScore();
  simply.text({
  title: 'Tennis Score',
    body: game.getScoreString(),
}, true);

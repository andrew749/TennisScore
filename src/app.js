//method needed to listen for each button
function Person(){
  this.score=0;
    this.incrementScore=function(){
      this.score+=15;
    };
  this.resetScore=function(){
      this.score=0;
  };
}
var Player1=new Person();
var Player2=new Person();
simply.on('singleClick', function(e) {
  simply.subtitle(e.button);
  switch(e.button){
    case 'up':
      Player1.incrementScore();
      break;
    case 'down':
      Player2.incrementScore();
      break;
    case 'select':
      Player1.reset();
      Player2.reset();
      break;
  }
  simply.text({
  title: 'Tennis Score',
    body: "Player 1:  "+Player1.score+"\n Player 2:  "+Player2.score,
}, true);
});
simply.text({
  title: 'Tennis Score',
  body: "Player 1:  "+Player1.score+"\n Player 2:  "+Player2.score,
}, true);

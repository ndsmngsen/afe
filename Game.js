class Game{

constructor(){
    this.angle=0
    this.coinTouch=false;
    
}
getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();
    //add more and change values later
   bkground=createSprite(400,400,400,400)
   bkground.addImage(background_image);
    //walls(check where it starts and make invisible)
    topWall=createSprite(0,0,400,20)
    bottomWall=createSprite(0,400,400,20)
    rightWall=createSprite(400,0,20,400)
    leftWall=createSprite(0,0,20,400)

    //striker and red coin
    striker = createSprite(200,30,15,15);
    striker.addImage(striker_image);
    striker.scale= 0.4
    redCoin=createSprite(200,200,10,10)
    redCoin.addImage(redCoin_image)
    redCoin.scale=0.1
    // the turnmarker(make invisible)
    turnMarker=createSprite(200,30,10,10)
    //(invisible)

    //inner bar and outer bar(controls power)

    //holes(make invisible later)
    hole1=createSprite(0,0,10,10)
    hole2=createSprite(400,0,10,10)
    hole2=createSprite(0,400,10,10)
    hole2=createSprite(400,400,10,10)


    //black and white coins
    this.createCoins()
    

  }
handleElements(){
form.hide();
// might add more
}
play(){
  this.handleElements();
    this.handleResetButton();

    Player.getPlayersInfo();
    player.getWinConditions();
    player.getPlayerPoints();
    if (allPlayers !== undefined) {
      var index = 0;
      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;
      }
      //properties of everything(bouncing off)
      striker.bounce

      // adding points
      
 
  //win conditions
  if (player.playerPoints=9) {
    gameState = 2;
    Player.updateWinConditions();
    player.update();
  }
  //space to release(do later)(release function)
  if(keyCode == 32){
    this.release()
    this.moveStrikerEachTurn()
  }
   
   //friction
    if(striker.velocityY>0){
     this.negFrictionY()
    }
    if(striker.velocityY<0){
      this.posFrictionY()
     }
     if(striker.velocityX<0){
      this.posFrictionX()
     }
     if(striker.velocityY>0){
      this.negFrictionX()
     }
     
    
     //when striker stops(add if black and white coin velocity === 0 later)
     if(striker.velocityX===0&&striker.velocityY===0
      &&redCoin.velocityX===0&&redCoin.velocityY===0){
       striker.y=turnMarker.y
     }
     //control conditions
if(player.positionY===turnMarker.y){
  this.handlePlayerControls()
  this.release()
}
//adjusting bar
if(turnMarker.y===30){
 //outer bar
outerBar.y = turnMarker.y - 10;
 //inner bar
 outerBar.y = turnMarker.y - 10;
}
if(turnMarker.y===370){
//outer bar
outerBar.y = turnMarker.y + 10;
//inner bar
innerBar.y = turnMarker.y + 10;
}
//condition for coin falling(may make easier by creating center of gravity)





   drawSprites();
  }
}
handlePlayerControls(){
//rotation and changing angles(make angle number later)
if (keyIsDown(RIGHT_ARROW)) {
 angle += 4
 striker.rotate(angle)
}

if (keyIsDown(LEFT_ARROW)) {
  angle -= 4
  striker.rotate(angle)
}
//adjusting x position of striker
striker=World.mouseX
//adjusting power of the striker through the length of bar(outer bar height is 20)
if (keyIsDown(UP_ARROW)&&innerbar.height<20) {
  innerBar.height += 1;
}

if (keyIsDown(DOWN_ARROW)&&innerbar.height>0) {
  innerBar.height -= 1;
}
}
moveStrikerEachTurn(){
//move striker between players every turn(add if velocity of black coins and white coins is 0 too)
if(turnMarker.y===30&&this.coinTouch===false){
turnMarker.y=370
}
if(turnMarker.y===370&&this.coinTouch===false){
  turnMarker.y=30
}
}
release(){
if(innerBar.height=0){
  //striker.velocityY=1
  striker.velocityX=0.1||-0.1
} 
if(innerBar.height=1){
  striker.velocityY=2
  striker.velocityX=0.2||-0.2
} 
if(innerBar.height=2){
  striker.velocityY=3
  striker.velocityX=0.3||-0.3
} 
if(innerBar.height=3){
  striker.velocityY=4
  striker.velocityX=0.4||-0.4
} 
if(innerBar.height=4){
  striker.velocityY=5
  striker.velocityX=0.5||-0.5
} 
if(innerBar.height=5){
  striker.velocityY=6
  striker.velocityX=0.6||-0.6
} 
if(innerBar.height=6){
  striker.velocityY=7
  striker.velocityX=0.7||-0.7
} 
if(innerBar.height=7){
  striker.velocityY=8
  striker.velocityX=0.8||-0.8
} 
if(innerBar.height=8){
  striker.velocityY=9
  striker.velocityX=0.9||-0.9
} 
if(innerBar.height=9){
  striker.velocityY=10
  striker.velocityX=1||-1
} 
if(innerBar.height=10){
  striker.velocityY=11
  striker.velocityX=1.1||-1.1
} 
if(innerBar.height=11){
  striker.velocityY=12
  striker.velocityX=1.2||-1.2
} 
if(innerBar.height=12){
  striker.velocityY=13
  striker.velocityX=1.3||-1.3
} 
if(innerBar.height=13){
  striker.velocityY=14
  striker.velocityX=1.4||-1.4
} 
if(innerBar.height=14){
  striker.velocityY=15
  striker.velocityX=1.5||-1.5
} 
if(innerBar.height=15){
  striker.velocityY=16
  striker.velocityX=1.6||-1.6
} 
if(innerBar.height=16){
  striker.velocityY=17
  striker.velocityX=1.7||-1.7
} 
if(innerBar.height=17){
  striker.velocityY=18
  striker.velocityX=1.8||-1.8
} 
if(innerBar.height=18){
  striker.velocityY=19
  striker.velocityX=1.9||-1.9

} 
if(innerBar.height=19){
  striker.velocityY=20
  striker.velocityX=2||-2
} 
if(innerBar.height=20){
  striker.velocityY=21
  striker.velocityX=3||-3
} 


}

coinFall(){
 //removes coin




}

getCoinsOnBoard(){
  //refer to player class
}
giveBlackpoints(){
//refering to player class 

}
giveWhitePoints(){
//refering to player class
}
displayScore(){

}

reset(){
//resets coins after round is done

}
negFrictionY(){
striker.velocityY+=0.1
}
posFrictionY(){
  striker.velocityY-=0.1
  }
  negFrictionX(){
    striker.velocityX-=0.1
  }
  posFrictionX(){
    striker.velocityX+=0.1
  }
  //bounce off white coins too
 
  
  
  
    createCoins(){
      var redCoin = createSprite(200,200,20,20);
      redCoin.addImage(redCoin_image)
      redCoin.scale=0.05;
      var bc1 =createSprite(180,200,20,20);
      bc1.addImage(blackCoin_image)
      bc1.scale=0.05;
      var bc2 =createSprite(220,200,20,20);
      bc2.addImage(blackCoin_image)
      bc2.scale=0.05;
      var wc1 =createSprite(240,200,20,20);
      wc1.addImage(whiteCoin_image)
      wc1.scale=0.05;
      var bc3 =createSprite(160,200,20,20);
      bc3.addImage(blackCoin_image)
      bc3.scale=0.05;
      
      
      //spawn top and bottom--4
      
      var wc2 =createSprite(170,220,20,20);
      wc2.addImage(whiteCoin_image)
      wc2.scale=0.05;
       
       var wc3 =createSprite(190,220,20,20);
       wc3.addImage(whiteCoin_image)
      wc3.scale=0.05;
      var bc4 =createSprite(210,220,20,20);
      bc4.addImage(blackCoin_image)
      bc4.scale=0.05;
      var wc4=createSprite(230,220,20,20);
      wc4.addImage(whiteCoin_image)
      wc4.scale=0.05;
      
      
      //---2nd 
      //spawn top and bottom--4
      
      var wc6 =createSprite(170,180,20,20);
      wc6.addImage(whiteCoin_image)
      wc6.scale=0.05;
       
       var wc7 =createSprite(190,180,20,20);
       wc7.addImage(whiteCoin_image)
      wc7.scale=0.05;
      var bc5 =createSprite(210,180,20,20);
      bc5.addImage(blackCoin_image)
      bc5.scale=0.05;
      var wc8=createSprite(230,180,20,20);
      wc8.addImage(whiteCoin_image)
      wc8.scale=0.05;
      
      
      //final row
       var bc6 =createSprite(180,160,20,20);
       bc6.addImage(blackCoin_image)
      bc6.scale=0.05;
       var wc8 =createSprite(200,160,20,20);
       wc8.addImage(whitwCoin_image)
      wc8.scale=0.05;
       var bc7 =createSprite(220,160,20,20);
       bc7.addImage(blackCoin_image)
      bc7.scale=0.05;
      
    //---2nd 
     //final row
       var bc8 =createSprite(180,240,20,20);
       bc8.addImage(blackCoin_image)
      bc8.scale=0.05;
       var wc9 =createSprite(200,240,20,20);
       wc9.addImage(whiteCoin_image)
      wc9.scale=0.05;
       var bc9 =createSprite(220,240,20,20);
       bc9.addImage(blackCoin_image)
      bc9.scale=0.05;
    }



restart(){
  //restarts the entire game

}
}

//variables
var canvas;
var database
var gameState;
var form
var player
var playerCount;
var allPlayers;
var background_image
var striker_image
var redCoin_image
var blackCoin_image
var whiteCoin_image
var bkground
var redCoin
var bc1,bc2,bc3,bc4,bc5,bc6,bc7,bc8,bc9
var wc1,wc2,wc3,wc4,wc5,wc6,wc7,wc8,wc9
var topWall
var bottomWall
var leftWall
var rightWall
var striker
var turnMarker
//may take out
var whiteCoins=[]
var blackCoins=[]
var fallenCoins=[]



function preload(){
  background_image=loadImage("gameBackround.png")
  striker_image=loadImage("striker.png")
  redCoin_image=loadImage("redCoin.png")
  blackCoin_image=loadImage("blackCoin.png")
  whiteCoin_image=loadImage("whiteCoin.png")
}



function setup() {
  canvas=createCanvas(400,400);


  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}


function draw() 
{
  background(background_image);
//gameState
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.end();
  }

}



var  gameState = 0, database ,playerCount ;
var player , game ,form;
var infoContent , distance = 0;
var car1 , car2 , car3 , car4
var allCars


function setup(){
    createCanvas(displayWidth,displayHeight);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if (playerCount === 4){
        game.update(1);

    }
    if(gameState == 1 ){
        clear();
        game.play();
    }
    //background("white");
    
}


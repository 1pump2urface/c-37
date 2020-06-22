class Game{
    constructor(){}
    getState(){
        var stateRef = database.ref('GameState');
        stateRef.on("value", function(data){
            gameState = data.val();
        })
    }
    update(state){
        database.ref('/').update({
       GameState:state })
    }
    async start(){
        if (gameState == 0){
             player = new Player();
             var countRef = await database.ref('playerCount').once("value")
             if (countRef.exists()){
                 playerCount = countRef.val();
                 player.getCount();
             }
            
             form = new Form();
             form.display();
        }
        car1 = createSprite(100 , 200);
        car2 = createSprite(300 , 200);
        car3 = createSprite(500 , 200);
        car4 = createSprite(700 , 200);
        allCars = [car1 , car2 , car3 , car4]
    }
    play(){
        form.hide();
        textSize(21);
        text("game has begun", 120 , 120);
        Player.getInfo();
        if (infoContent !== undefined){
            var index = 0
            var x = 0
            var y ;
            for (var plr in infoContent){
                index = index + 1

                x = x + 200
                y = displayHeight - infoContent[plr].distance 
                allCars[index - 1].x = x
                allCars[index - 1].y = y 
                if (index == player.index){
                    allCars [index -1].shapeColor = "purple"
                    camera.position.x = displayWidth/2;
                    camera.position.y = allCars[index - 1].y 

                }
                      }

        }
 
        if(keyIsDown(UP_ARROW)&& player.index !== null){
            player.distance += 70;
            player.updateName();
        }
        drawSprites();
    }
    
}
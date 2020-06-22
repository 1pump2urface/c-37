class Form{
    constructor(){
         this.input = createInput("name");
         this.button = createButton("press here");
         this.greeting = createElement('h3');

    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title = createElement('h2')
        title.html("carRacingGame")
        title.position(250,30);
        
        this.input.position(displayWidth/2,displayHeight/2);
       
        this.button.position(displayWidth/2, displayHeight/2 + 100);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
             player.name = this.input.value();
            playerCount+= 1
            player.index = playerCount;
            player.updateName();
            player.updateCount(playerCount);
            
            this.greeting.html("Hello Player"+ player.name);
            this.greeting.position(displayWidth/2,displayHeight/2);
        })
    }
}
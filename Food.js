class Food{
    constructor(){
       this.foodStock= 0;
       this.lastfed;
       this.image=loadImage("images/Milk(2).png");
    }

    updateFoodStock(foodStock){
        if(foodStock<0){
            foodStock=0;
        }

        this.foodStock= foodStock;
        
        
    }

    bedRoom(){
        background(bedroomI,550,500);
    }

    garden(){
        background(gardenI,550,500);
    }

    washroom(){
        background(washI,550,500);
    }

    getFedTime(lastFed){
        this.lastFed=lastFed;
    }

    

    getFoodStock(){
        return this.foodStock;
    }

    display(){
        var x =80,y=100;

        imageMode(CENTER);
        image(this.image,720,220,70,70);

        if(this.foodStock !== 0){
             for(var i=0;i<this.foodStock; i++){
                 if(i% 10 ===0){
                     x = 80;
                     y=y+50;
                 }
                image(this.image,x,y,50,50);
                x=x+30;  
             }
        }

    }
}
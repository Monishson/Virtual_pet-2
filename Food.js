class Food{
    constructor(){
       this.foodStock=0;
       this.lastFed;
       this.image=loadImage("images/Milk.png");
    }
    getFoodStock(){

    }
    updateFood(){

    }
    deductFood(){

    }
    display(){
        imageMode(CENTER);
        image(this.image,720,220,70,70);
    }
}
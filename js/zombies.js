class Zombie {
constructor(x, y, w, h){
    this.image = zombieImg
    this.x = x
    this.y = y
    this.width = w
    this.height = h
    this.random_index = undefined
}

    _setX(){
        if(worldImg.src == background5_Image.src){
            this.y -= 120
        }
    }

    _moveLeft(){
        setInterval(()=> this.x -= 18, 100)
    }

    _select_Random_Index(randomIndex){
        this.random_index = randomIndex
    }
}



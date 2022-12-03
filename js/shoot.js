class Bullet {
    constructor(x,y,w=8,h=8) {
        this.image = 0
        this.x = x
        this.y = y
        this.width = w
        this.height = h
    }

    _shoot(){
        this.x += 15
    }


}
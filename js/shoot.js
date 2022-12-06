class Bullet {
    constructor() {
        this.image = bulletImg
        this.x = undefined
        this.y = undefined
        this.width = 8
        this.height = 8
        this.direction = undefined
    }

    _direction(position){
        if(position[position.length-1]==('L')){
            this.direction = 'L'
            }
            else{
                this.direction = 'R'
            }
    }

    _position(avatar){
        if(this.direction==('R')){
            this.x = avatar.x + avatar.width}
        else{
            this.x = avatar.x
        }
        this.y = avatar.y+ 130
    
    }

    _shoot(){ 
        if(this.direction==('R')){
            this.x += 15
        }
        else{
            this.x -= 15
        }
    }

}
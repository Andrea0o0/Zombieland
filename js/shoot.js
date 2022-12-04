class Bullet {
    constructor() {
        this.image = bulletImg
        this.x = undefined
        this.y = undefined
        this.width = 8
        this.height = 8
        this.direction = undefined
    }

    _direction(){
        console.log(movement)
        if(movement[movement.length-2]==('R')){
            this.direction = 'R'
            }
            else{
                this.direction = 'L'
            }
    }

    _position(avatar){
        this.x = avatar.x + avatar.width
        this.y = avatar.y+130
          // _bullet_PositionX(){
    //     if(movement.includes('R')){
    //         return this.avatar.x + this.avatar.width
    //     }
    //     else{
    //         return this.avatar.x
    //     }
    // }
    }

    _shoot(){
        console.log(this.direction)
        if(this.direction==('R')){
            this.x += 15
        }
        else{
            this.x -= 15
        }
    }

}
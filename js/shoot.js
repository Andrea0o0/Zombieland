
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
        if(position[position.length-1]==('L')){
            this.direction = 'L'
            }
            else{
                this.direction = 'R'
            }
        if(position.length>50){
        position.slice(position.length-50,position.length)
        }
    }

    _position(avatar){
        if(this.direction==('R')){
            this.x = avatar.x + avatar.width}
        else{
            this.x = avatar.x
        }
        this.y = avatar.y+130
    
    }

    _shoot(){ 
        // console.log(this.direction)
        if(this.direction==('R')){
            this.x += 15
        }
        else{
            this.x -= 15
        }
    }

}
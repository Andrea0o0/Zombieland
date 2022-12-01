class Player {
    constructor(name,x,y,width,height) {
        this.name = name
        this.image = avatarImg
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }

    moveRight(){
        if(movement.includes('R') && movement.includes('U')==false){
            this.x = this.x + 10
        }
        if(this.x > canvasGame.width){
            this.x = 0 - this.width
        }
    
    }

    moveLeft(){
        if(movement.includes('L') && movement.includes('U')==false){
            this.x = this.x - 10
        }
        if(this.x + this.width+10 < 0){
            this.x = canvasGame.width
        }
    } 

    moveUp(){
        let vY = ((this.y/2)/(4*8))
        let yGravity = [(0),(-vY*8),(0),(-vY*7),(0),(-vY*6),(0),(-vY*5),(0),(-vY*4),(0),(-vY*3),(0),(-vY*2),(0),(-vY),(0),(0),(0),(0),(0),(vY*2),(0),(0),(vY*3),(0),(vY*4),(0),(vY*5),(0),(vY*6),(0),(vY*7),(0),(vY*8),(0),(vY),(0)]


        if(index >= yGravity.length){
            this.y = canvasGame.height-this.height
            movement = ''
            index = 0
        }
        else if(movement.includes('U') && movement.includes('R')){
            this.x += 5
        }
        else if(movement.includes('U') && movement.includes('L')){
            this.x -= 5
        }
            this.y += yGravity[index]
            index++
        }
        
    }

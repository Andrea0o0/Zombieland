class Player {
    constructor(name,x,y,width,height) {
        this.name = name
        this.image = avatarImg
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.lives = 100
        this.bullets_shoots = 10
    }


    moveRight(){
        if(movement.includes('R') && movement.includes('U')==false){
            this.x = this.x + 10
        }
        if(this.x > canvasGame.width){
            this.x = 0 - this.width
        }

        avatarImg.src = avatar.run_Right[i]
        i++
    }

    moveLeft(){
        if(movement.includes('L') && movement.includes('U')==false){
            this.x = this.x - 10
        }
        if(this.x + this.width+10 < 0){
            this.x = canvasGame.width
        }
        avatarImg.src = avatar.run_Left[i]
        i++
    } 

    moveUp(){
        let vY
        if(worldImg.src == background5_Image.src){
            vY = (((this.y+120)/1.8)/(4*8))
        }
        else{
            vY = ((this.y/1.8)/(4*8))
        }
        let yGravity = [(0),(-vY*8),(0),(-vY*10),(0),(-vY*8),(0),(-vY*5),(0),(-vY*4),(0),(-vY*3),(0),(-vY*2),(0),(-vY),(0),(0),(0),(0),(0),(vY*2),(0),(0),(vY*3),(0),(vY*4),(0),(vY*5),(0),(vY*6),(0),(vY*7),(0),(vY*8),(0),(vY),(0)]

        if(avatar_type.includes('S')){
            movement.replaceAll('L','')
            movement.replaceAll('R','')
        }

        if(index >= yGravity.length){
            if(worldImg.src == background5_Image.src){
                this.y = canvasGame.height-this.height-150}
            else{
                this.y = canvasGame.height-this.height-30
            }
            movement = ''
            index = 0
        }
        else if(movement.includes('U') && movement.includes('R')){
            this.x += 10
            avatarImg.src = avatar.static_Right[0]
        }
        else if(movement.includes('U') && movement.includes('L')){
            this.x -= 10
            avatarImg.src = avatar.static_Left[0]
        }
            this.y += yGravity[index]
            index++
            i
            avatar_type = ''
        }


        
    }

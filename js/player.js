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
        
        //INDEX Y FOR GRAVITY
        this.index_gravity = 0
        //MOVEMENTS (LEFT,RIGHT,UP)
        this.movement = ''
        //STATUS MOVEMENT (STATIC,RUN)
        this.img_type = 'S'
        //INDEX IMG STATUS
        this.i_image = 0
    }


    moveRight(){
        if(this.i_image >= avatar.run_Right.length-1){
            this.i_image = 0
        }
        if(this.movement.includes('R') && this.movement.includes('U')==false){
            this.x = this.x + 10
        }
        if(this.x > canvasGame.width){
            this.x = 0 - this.width
        }

        avatarImg.src = avatar.run_Right[this.i_image]
        this.i_image++
    }

    moveLeft(){
        if(this.i_image >= avatar.run_Right.length-1){
            this.i_image = 0
        }
        if(this.movement.includes('L') && this.movement.includes('U')==false){
            this.x = this.x - 10
        }
        if(this.x + this.width+10 < 0){
            this.x = canvasGame.width
        }
        avatarImg.src = avatar.run_Left[this.i_image]
        this.i_image++
    } 

    moveUp(){
        if(this.i_image >= avatar.run_Right.length-1){
            this.i_image = 0
        }
            // DEFINE VELOCITY of Y (GRAVITY)
            let vY
            if(worldImg.src == background5_Image.src){
                vY = (((this.y+120)/1.8)/(4*8))
            }

            else{
                vY = ((this.y/1.8)/(4*8))
            }

            // FORMULA GRAVITY
            let yGravity = [(0),(-vY*8),(0),(-vY*10),(0),(-vY*8),(0),(-vY*5),(0),(-vY*4),(0),(-vY*3),(0),(-vY*2),(0),(-vY),(0),(0),(0),(0),(0),(vY*2),(0),(0),(vY*3),(0),(vY*4),(0),(vY*5),(0),(vY*6),(0),(vY*7),(0),(vY*8),(0),(vY),(0)]


            if(this.img_type.includes('S')){
                this.movement.replaceAll('L','')
                this.movement.replaceAll('R','')
            }

            if(this.index_gravity >= yGravity.length){
                if(worldImg.src == background5_Image.src){
                    this.y = canvasGame.height-this.height-150}
                else{
                    this.y = canvasGame.height-this.height-30
                }
                this.movement = ''
                this.index_gravity = 0
            }

            else if(this.movement.includes('U') && this.movement.includes('R')){
                this.x += 10
                avatarImg.src = avatar.static_Right[0]
            }
            
            else if(this.movement.includes('U') && this.movement.includes('L')){
                this.x -= 10
                avatarImg.src = avatar.static_Left[0]
            }

        this.y += yGravity[this.index_gravity]
        this.index_gravity++
        this.img_type = ''
        }


        
    }

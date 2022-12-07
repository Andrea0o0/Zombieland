class Game {
    constructor(ctx,avatar,world,bullets,hearts,timer) {
        //CTX
        this.ctx = ctx

        //AVATAR
        this.avatar = new Player(avatar.name,avatar.x,avatar.y,avatar.width,avatar.height)

        //WORLD
        this.world = new World(0,0,world.width)

        //ZOMBIES
        this.zombies = []
        //INDEX ZOMBIE RANDOM
        this.zombie_i_Random = undefined
        //INDEX ZOMBIES IMAGES
        this.iZombies = 0

        //BULLETS
        this.bullets = []
        //POSITION BULLET
        this.position = '' 
        
        //TOOLS
        //BULLET LINE
        this.bulletsline = bullets
        //HEARTS LINE
        this.hearts = hearts
        //TIMER
        this.timer = timer
        this.timer_setInterval = 1
        // INDEX IMG TIMER
        this.itimer = 0 
        

        //SETINTERVALS
        this.generateInterval = null
        this.timerIntervalZombies = null
        this.timerInterval = null
        this.move_Up_avatar = null

        //STATUS - WIN || LOSE - AVATAR
        this.status_avatar = false
  
    }

    _setInterval(){
    this.timerInterval = setInterval(() => {
        if(this.itimer>timer.img.length-1){
            this.status_avatar = 'winner'
        }
       else{
       timerImg.src = timer.img[this.itimer].src
        console.log(this.itimer)
        this.itimer++

        }
    },
       1000)
    }        
    
    _createZombies(){
        let timetocreate = 0

        this.generateInterval = setInterval(() => {  
            if(timetocreate<this.timer_setInterval){
                timetocreate +=200
            }
            else{
                if(this.itimer<timer.img.length*0.5){
                    this.zombie_i_Random = Math.floor(Math.random()*(zombie.length-2))
                }
                else if(this.itimer<timer.img.length*0.7){
                    this.zombie_i_Random = Math.floor(Math.random()*(zombie.length-1))
                }
                else{
                    this.zombie_i_Random = Math.floor(Math.random()*(zombie.length-2))+2
                }

            
                const newZombie = new Zombie(
                    zombie[this.zombie_i_Random].x,
                    zombie[this.zombie_i_Random].y,
                    zombie[this.zombie_i_Random].width,
                    zombie[this.zombie_i_Random].height)
                    
                newZombie._setX()
                newZombie._moveLeft()
                newZombie._select_Random_Index(this.zombie_i_Random)
                this.zombies.push(newZombie)
                // console.log(this.zombies)
                timetocreate=0
            }
    },200)      
    

        this.timerIntervalZombies = setInterval(() => {
            let min_speed = 9000
            let max_speed = 4000
            this.timer_setInterval = min_speed-((min_speed-max_speed)*(this.itimer/(timer.img.length-1)))
            },0)
         
            this.zombie_i_Random = Math.floor(Math.random()*(zombie.length-2))
        const newZombie = new Zombie(
            zombie[this.zombie_i_Random].x,
            zombie[this.zombie_i_Random].y,
            zombie[this.zombie_i_Random].width,
            zombie[this.zombie_i_Random].height)
   
        newZombie._setX()
        newZombie._moveLeft()
        newZombie._select_Random_Index(this.zombie_i_Random)
        this.zombies.push(newZombie)

        }

    _drawZombies(){
        this.zombies.forEach((elem,i) => {
            if(this.iZombies<=zombie[elem.random_index].img.length-1){
                zombieImg.src = zombie[elem.random_index].img[Math.round(this.iZombies)]
                this.iZombies += 0.03
            }
            else{
                this.iZombies = 0
            }
            this.ctx.drawImage(zombieImg,elem.x,elem.y,elem.width,elem.height)
        })
    }
    
    _assignControls(){
    document.addEventListener('keydown',(event) => {
        switch (event.code){
            case 'ArrowRight':
                this.avatar.moveRight()
                this.avatar.movement += 'R'
                this.avatar.img_type += 'R'
                this.position += this.avatar.movement
                break
            case 'ArrowLeft':
                this.avatar.moveLeft()
                this.avatar.movement += 'L'
                this.avatar.img_type += 'R'
                this.position += this.avatar.movement
                break
            case 'Space':
                this.avatar.moveUp()
                this.avatar.movement =  'U'
                this.avatar.img_type += 'S'
                break
            case 'Enter':
                if(this.avatar.bullets_shoots>0){
                const newbullet = new Bullet()
                newbullet._direction(this.position)
                if(this.position.length>50){
                    this.position.slice(this.position.length-50,this.position.length)
                    }
                newbullet._position(this.avatar)
                this.bullets.push(newbullet)
                this.avatar.bullets_shoots--
                this.avatar.img_type += 'S'
                }
                if(this.status_avatar == 'winner'||this.status_avatar == 'loser'){
                    console.log('itworks')
                    this._RestartGame()
                    gamePage.style = 'display:none'
                    canvasGame.classList.add('hidden')
                    startPage.style = 'display:flex'
                }
                break
            default:
                this.avatar.img_type += 'S'
                break
            }
        })
    }

    _checkCollisions(){
        this.zombies.forEach((zombiee) => {
        if((zombiee.x<this.avatar.x + this.avatar.width-10&&this.avatar.x<zombiee.x + zombiee.width-10)&&(zombiee.y<this.avatar.y + this.avatar.height-10&&this.avatar.y<zombiee.y + zombiee.height-10))
        {
            if(this.avatar.lives > 3){
                this.avatar.lives --
            }
            else{
            this.status_avatar = 'loser'
            }
            
        }
            this.bullets.forEach((bullet) => {
            if((zombiee.x<bullet.x + bullet.width&&bullet.x<zombiee.x + zombiee.width)&&(zombiee.y<bullet.y + bullet.height&&bullet.y<zombiee.y + zombiee.height)){
                zombiee.y -= canvasGame.height
                bullet.y -= canvasGame.height
            }})
        })
    }

    _drawBullets(){
        this.bullets.forEach((bullet) => {
            bullet._shoot()
            this.ctx.drawImage(bullet.image,bullet.x,bullet.y,bullet.width,bullet.height) 
        })
    }

    _drawTools(){
        if(this.avatar.lives>4){
            heartsImg.src = this.hearts.img[Math.round(this.avatar.lives*0.1)-1]
        }
        else{
            heartsImg.src = '/images/TOOLS/EMPTY.png'
        }
        //DRAW LIVES LINE
        this.ctx.drawImage(heartsImg,this.hearts.x,this.hearts.y,this.hearts.width,this.hearts.height)

        //DRAW BULLETS LINE
        if(this.avatar.bullets_shoots>0){
            bulletslineImg.src = this.bulletsline.img[this.avatar.bullets_shoots-1]
        }
        else{
            bulletslineImg.src = '/images/TOOLS/EMPTY.png'
        }
        this.ctx.drawImage(bulletslineImg,this.bulletsline.x,this.bulletsline.y,this.bulletsline.width,this.bulletsline.height)
    }

    _drawTimer(){
        this.ctx.drawImage(timerImg,this.timer.x,this.timer.y,this.timer.width,this.timer.height)
    }

    _drawAvatar() {
        this.ctx.drawImage(this.world.image,0,0,canvasGame.width,canvasGame.height)
        
        if(this.avatar.i_image >= avatar.run_Right.length-1){
            this.avatar.i_image = 0
        }

            this.ctx.drawImage(this.avatar.image,this.avatar.x,this.avatar.y,this.avatar.width,this.avatar.height)
            
    }

    _RestartGame(){
        //AVATAR
        this.avatar = new Player(avatar.name,avatar.x,avatar.y,avatar.width,avatar.height)

            //INDEX Y FOR GRAVITY
            this.avatar.index_gravity = 0
            //MOVEMENTS (LEFT,RIGHT,UP)
            this.avatar.movement = ''
            //STATUS MOVEMENT (STATIC,RUN)
            this.avatar.img_type = 'S'
            //INDEX IMG STATUS
            this.avatar.i_image = 0
            this.avatar.lives = 100
            this.avatar.bullets_shoots = 10

        //WORLD
        this.world = new World(0,0,world.width)

        //ZOMBIES
        this.zombies = []
        //INDEX ZOMBIES IMAGES
        this.iZombies = 0

        //BULLETS
        this.bullets = []
        //POSITION BULLET
        this.position = '' 
        
        this.timer_setInterval = 1
        // INDEX IMG TIMER
        this.itimer = 0 

        //SETINTERVALS
        this.generateInterval = null
        this.timerIntervalZombies = null
        this.timerInterval = null
        this.move_Up_avatar = null

        //STATUS - WIN || LOSE - AVATAR
        this.status_avatar = false     
        
    }

  
    _define_X_background(){
        if(worldImg.src == background5_Image.src){
            this.avatar.y -= 120
       }
        
    }

    _clear_Intervals(){
        clearInterval(this.generateInterval)
        clearInterval(this.timerInterval)
        clearInterval(this.timerIntervalZombies)
        clearInterval(this.move_Up_avatar)
    }

    _win(){
        let win_page = new Image()
        win_page.src = '/images/TOOLS/WIN_PAGE.svg'
        this.ctx.drawImage(win_page,420,100,900,500)
    }

    _gameOver() {
        let game_Over = new Image()
            game_Over.src = '/images/TOOLS/GAME_OVER.svg'
            this.ctx.drawImage(game_Over,450,0,800,600)
      }

    _clean() {
        this.ctx.clearRect(0, 0, 800, 600)
      }

    _update() {
        if(this.status_avatar==false){
        if(this.avatar.movement.includes('U')){
            this.move_Up_avatar = setInterval(this.avatar.moveUp(),100)
        }
        this._clean()
        this._checkCollisions()
        this._drawAvatar()
        this._drawZombies()
        this._drawTools()
        this._drawTimer()
        this._drawBullets() 
        
    }
    else if(this.status_avatar == 'winner') {
        this._clear_Intervals()
        this._win()
    }
    else if(this.status_avatar == 'loser') {
        this._clear_Intervals()
        this._gameOver()
    }
    window.requestAnimationFrame(() => this._update())
    }
    
    start() {
    this._assignControls()
    this._update()
    this._setInterval()
    this._createZombies()
    this._define_X_background()
    
    }
}
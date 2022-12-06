let i = 0
let zombie_i_Random
class Game {
    constructor(ctx,avatar,world,zombie,bullets,hearts,timer) {
        this.ctx = ctx
        this.avatar = new Player(avatar.name,avatar.x,avatar.y,avatar.width,avatar.height)
        this.world = new World(0,0,world.width)
        this.zombies = []
        this.howmany_zombies = 0
        this.bullets = []
        this.bulletsline = bullets
        this.hearts = hearts
        this.timer = timer
        this.timer_setInterval = 1

        //SETINTERVALS
        this.generateInterval = null
        this.timerIntervalZombies = null
        this.timerInterval = null
        this.move_Up_avatar = null

        this.winner = false
  
    }

    _setInterval(){
    this.timerInterval = setInterval(() => {
        if(itimer>timer.img.length-1){
            this.winner = true
        }
       else{
       timerImg.src = timer.img[itimer].src
       itimer++
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
                if(itimer<timer.img.length*0.6){
                    zombie_i_Random = Math.floor(Math.random()*(zombie.length-2))
                }
                else if(itimer<timer.img.length*0.85){
                    zombie_i_Random = Math.floor(Math.random()*(zombie.length-1))
                }
                else{
                    zombie_i_Random = Math.floor(Math.random()*(zombie.length-2))+2
                }

            
                const newZombie = new Zombie(
                    zombie[zombie_i_Random].x,
                    zombie[zombie_i_Random].y,
                    zombie[zombie_i_Random].width,
                    zombie[zombie_i_Random].height)
                    
                newZombie._setX()
                newZombie._moveLeft()
                newZombie._select_Random_Index(zombie_i_Random)
                this.zombies.push(newZombie)
                // console.log(this.zombies)
                timetocreate=0
            }
    },200)      
    

        this.timerIntervalZombies = setInterval(() => {
            let min_speed = 9000
            let max_speed = 4000
            this.timer_setInterval = min_speed-((min_speed-max_speed)*(itimer/(timer.img.length-1)))
            },0)
         
            zombie_i_Random = Math.floor(Math.random()*(zombie.length-2))
        const newZombie = new Zombie(
            zombie[zombie_i_Random].x,
            zombie[zombie_i_Random].y,
            zombie[zombie_i_Random].width,
            zombie[zombie_i_Random].height)
   
        newZombie._setX()
        newZombie._moveLeft()
        newZombie._select_Random_Index(zombie_i_Random)
        this.zombies.push(newZombie)

        }

    _drawZombies(){
        this.zombies.forEach((elem,i) => {
            if(iZombies<=zombie[elem.random_index].img.length-1){
                zombieImg.src = zombie[elem.random_index].img[Math.round(iZombies)]
                iZombies += 0.05
            }
            else{
                iZombies = 0
            }
            this.ctx.drawImage(zombieImg,elem.x,elem.y,elem.width,elem.height)
        })
    }
    
    _assignControls(){
    document.addEventListener('keydown',(event) => {
        switch (event.code){
            case 'ArrowRight':
                this.avatar.moveRight()
                movement += 'R'
                avatar_type += 'R'
                position += movement
                break
            case 'ArrowLeft':
                this.avatar.moveLeft()
                movement += 'L'
                avatar_type += 'R'
                position += movement
                break
            case 'Space':
                this.avatar.moveUp()
                movement =  'U'
                avatar_type += 'S'
                break
            case 'Enter':
                if(this.avatar.bullets_shoots>0){
                const newbullet = new Bullet()
                newbullet._direction()
                newbullet._position(this.avatar)
                this.bullets.push(newbullet)
                this.avatar.bullets_shoots--
                avatar_type += 'S'
                }
                break
            default:
                avatar_type += 'S'
                break
            }
        })
    }

    _checkCollisions(){
        this.zombies.forEach((zombiee) => {
        if((zombiee.x<this.avatar.x + this.avatar.width-10&&this.avatar.x<zombiee.x + zombiee.width-10)&&(zombiee.y<this.avatar.y + this.avatar.height-10&&this.avatar.y<zombiee.y + zombiee.height-10))
        {
            if(this.avatar.lives > 0){
                this.avatar.lives --
            }
            else{
            this._clear_Intervals()
            this._gameOver()
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
  
        // console.log(this.avatar.image,i)

            this.ctx.drawImage(this.avatar.image,this.avatar.x,this.avatar.y,this.avatar.width,this.avatar.height)

        if(i>=avatar.run_Right.length-1){
            i=0
        }
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
        win_page.src = '/images/TOOLS/WIN_PAGE.png'
        this.ctx.drawImage(win_page,500,100,900,500)
    }

    _gameOver() {
        let game_Over = new Image()
            game_Over.src = '/images/TOOLS/GAME_OVER.png'
            this.ctx.drawImage(game_Over,400,0,900,600)
      }

    _clean() {
        this.ctx.clearRect(0, 0, 800, 600)
      }

    _update() {
        if(this.winner==false){
        if(movement.includes('U')){
            this.move_Up_avatar = setInterval(this.avatar.moveUp(),100)
        }
        this._clean()
        this._drawAvatar()
        this._drawZombies()
        this._checkCollisions()
        this._drawTools()
        this._drawTimer()
        this._drawBullets()
        
    }
    else{
        this._clear_Intervals()
        this._win()
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


        

       
          
 

  




let i = 0
class Game {
    constructor(ctx,avatar,world,zombie,bullets,hearts,timer) {
        this.ctx = ctx
        this.avatar = new Player(avatar.name,avatar.x,avatar.y,avatar.width,avatar.height)
        this.world = new World(0,0,world.width)
        this.zombies = []
        this.howmany_zombies = 0
        this.zombie = new Zombie(zombie.x,zombie.y,zombie.width,zombie.height)
        this.bullets = []
        this.bulletsline = bullets
        this.hearts = hearts
        this.timer = timer
        // Generate new zombies 
        // this.totalZombies = []
        // for(let i=0;i<n_zombies.value;i++){
        //     this.totalZombies.push(Math.ceil(Math.random()*(zombie.length))-1)
        //     }
    }

    _createZombies(){
        //Create Zombies
        if(iZombies<this.totalZombies.length){
            const newZombie = new Zombie(this.totalZombies)
            this.zombies.push(newZombie)
        }
    }

    // _bullet_PositionX(){
    //     if(movement.includes('R')){
    //         return this.avatar.x + this.avatar.width
    //     }
    //     else{
    //         return this.avatar.x
    //     }
    // }

    _drawZombies(){
        // this.zombies.forEach((elem,i) => {
        //     this.ctx.drawImage(this.zombies[i].image,elem.x,elem.y,elem.width,elem.height)
        // })
        this.ctx.drawImage(this.zombie.image,this.zombie.x,this.zombie.y,this.zombie.width,this.zombie.height)
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

        if((this.zombie.x<this.avatar.x + this.avatar.width-10&&this.avatar.x<this.zombie.x + this.zombie.width-10)&&(this.zombie.y<this.avatar.y + this.avatar.height-10&&this.avatar.y<this.zombie.y + this.zombie.height-10)){
            if(this.avatar.lives > 0){
                this.avatar.lives --
            }
            else{
                console.log('dead')

            }

            // gamePage.style = 'display:none'
            // losePage.style = 'display:flex'
            }
        
        this.bullets.forEach((bullet) => {
        if((this.zombie.x<bullet.x + bullet.width&&bullet.x<this.zombie.x + this.zombie.width)&&(this.zombie.y<bullet.y + bullet.height&&bullet.y<this.zombie.y + this.zombie.height)){
            gamePage.style = 'display:none'
            winPage.style = 'display:flex'
        }})
            

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

    _clean() {
        this.ctx.clearRect(0, 0, 800, 600)
      }

    _update() {
        if(this.avatar.lives>3){
        if(movement.includes('U')){
            setInterval(this.avatar.moveUp(),100)
        }
        this._clean()
        // this._createZombies()
        this._drawAvatar()
        this._drawZombies()
        this._checkCollisions()
        this._drawTools()
        this._drawTimer()
        this._drawBullets()
        if(this.avatar.x+this.avatar.width>=canvasGame.width){
            gamePage.style = 'display:none'
            winPage.style = 'display:flex'
        }
        // window.requestAnimationFrame(this._update.bind(this))
        
    }
    else{
        let game_Over = new Image()
        game_Over.src = '/images/TOOLS/GAME_OVER.png'
        this.ctx.drawImage(game_Over,500,0,900,600)
    }
    window.requestAnimationFrame(() => this._update())
    }
    
    start() {
    this._assignControls()
    this._update()
    this.zombie.moveLeft()
    
    }
}


        const timerInterval = setInterval(function() {
             if(itimer>timer.img.length){
            clearInterval(timerInterval)
            gamePage.style = 'display:none'
            winPage.style = 'display:flex'
             }
            else{
            timerImg.src = timer.img[itimer].src
            itimer++
             }
            },
            ((timer.img[itimer].seconds)*1000+waiter)/3)

       
          
 

  




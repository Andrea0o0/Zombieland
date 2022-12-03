class Game {
    constructor(ctx,avatar,world,zombie) {
        this.ctx = ctx
        this.avatar = new Player(avatar.name,avatar.x,avatar.y,avatar.width,avatar.height)
        this.world = new World(0,0,world.width)
        this.zombies = []
        this.howmany_zombies = 0
        this.zombie = new Zombie(zombie.x,zombie.y,zombie.width,zombie.height)
        this.bullets = []
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
                break
            case 'ArrowLeft':
                this.avatar.moveLeft()
                movement += 'L'
                break
            case 'Space':
                this.avatar.moveUp()
                movement += 'U'
                break
            case 'Enter':
                const newbullet = new Bullet((this.avatar.x+this.avatar.width),this.avatar.y+130)
                this.bullets.push(newbullet)
                break
            default:
                break
            }
        })
    }

    _checkCollisions(){

        if((this.zombie.x<this.avatar.x + this.avatar.width&&this.avatar.x<this.zombie.x + this.zombie.width)&&(this.zombie.y<this.avatar.y + this.avatar.height&&this.avatar.y<this.zombie.y + this.zombie.height)){
            gamePage.style = 'display:none'
            losePage.style = 'display:flex'
            }
        
        this.bullets.forEach((bullet) => {
        if((this.zombie.x<bullet.x + bullet.width&&bullet.x<this.zombie.x + this.zombie.width)&&(this.zombie.y<bullet.y + bullet.height&&bullet.y<this.zombie.y + this.zombie.height)){
            gamePage.style = 'display:none'
            winPage.style = 'display:flex'
        }})
            

        }

    _drawBullets(){
        console.log(this.bullets)
        this.bullets.forEach((bullet) => {
            bullet._shoot()
            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(bullet.x,bullet.y,bullet.width,bullet.height) 
        })
    }

    _drawAvatar() {
        this.ctx.drawImage(this.world.image,0,0,canvasGame.width,canvasGame.height,0,0,((canvasGame.width/this.world.width)*this.world.width),650)
        this.ctx.drawImage(this.avatar.image,this.avatar.x,this.avatar.y,this.avatar.width,this.avatar.height)
    }

    _clean() {
        this.ctx.clearRect(0, 0, 800, 600)
      }

    _update() {
        if(movement.includes('U')){
            setInterval(this.avatar.moveUp(),100)
        }
        
        this._clean()
        // this._createZombies()
        this._drawAvatar()
        this._drawZombies()
        this._checkCollisions()
        this._drawBullets()
        if(this.avatar.x+this.avatar.width>=canvasGame.width){
            gamePage.style = 'display:none'
            winPage.style = 'display:flex'
        }
        // window.requestAnimationFrame(this._update.bind(this))
        window.requestAnimationFrame(() => this._update())

    }
    
    start() {
    this._assignControls()
    this._update()
    this.zombie.moveLeft()
    }

}


        
 

  




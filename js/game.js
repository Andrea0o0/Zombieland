let i = 0
class Game {
    constructor(ctx,avatar,world,zombie,) {
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
                break
            case 'ArrowLeft':
                this.avatar.moveLeft()
                movement += 'L'
                avatar_type += 'R'
                break
            case 'Space':
                this.avatar.moveUp()
                movement += 'U'
                avatar_type += 'S'
                break
            case 'Enter':
                const newbullet = new Bullet()
                newbullet._direction()
                newbullet._position(this.avatar)
                this.bullets.push(newbullet)
                avatar_type += 'S'
                break
            default:
                avatar_type += 'S'
                break
            }
        })
    }

    _checkCollisions(){

        if((this.zombie.x<this.avatar.x + this.avatar.width&&this.avatar.x<this.zombie.x + this.zombie.width)&&(this.zombie.y<this.avatar.y + this.avatar.height&&this.avatar.y<this.zombie.y + this.zombie.height)){
            console.log("dead")
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

    _drawAvatar() {
        this.ctx.drawImage(this.world.image,0,0,canvasGame.width,canvasGame.height,0,0,((canvasGame.width/this.world.width)*this.world.width),650)
        if(avatar_type.includes('S')&&avatar_type.includes('L')&&i<avatar.static_Left.length){
            avatarImg.src = avatar.static_Left[i]
            i++
        }
        if(avatar_type.includes('S')&&avatar_type.includes('R')&&i<avatar.static_Right.length){
            avatarImg.src = avatar.static_Right[i]
            i++
        }
        if(i>=avatar.run_Right.length){
            i=0
        }
        if(avatar_type.includes('R')){
            avatar_type=""
        }
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


        
 

  




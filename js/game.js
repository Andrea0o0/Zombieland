class Game {
    constructor(ctx,avatar,world,zombie) {
        this.ctx = ctx
        this.avatar = new Player(avatar.name,avatar.x,avatar.y,avatar.width,avatar.height)
        this.world = new World(0,0,world.width)
        this.zombies = []
        this.howmany_zombies = 0
    
        // Generate new zombies 
        this.totalZombies = []
        for(let i=0;i<n_zombies.value;i++){
            this.totalZombies.push(Math.ceil(Math.random()*(zombie.length))-1)
            }
    }

    _createZombies(){
        //Create Zombies
        // console.log(this.totalZombies.length)
        // console.log(iZombies)
        if(iZombies<this.totalZombies.length){
            const newZombie = new Zombie(this.totalZombies)
            this.zombies.push(newZombie)
            console.log(this.zombies)
        }
    }

    _drawZombies(){
        this.ctx.drawImage(this.zombies[0].image,this.zombies[0].x,this.zombies[0].y,this.zombies[0].width,this.zombies[0].height)
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
            default:
                break
            }
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
        this._createZombies()
        this._drawZombies()
        this._drawAvatar()
        // window.requestAnimationFrame(this._update.bind(this))
        window.requestAnimationFrame(() => this._update())

    }
    
    start() {
    this._assignControls()
    this._update()

    }

}


        
 

  




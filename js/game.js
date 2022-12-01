
class Game {
    constructor(ctx,avatar,world) {
        console.log(world)
        this.ctx = ctx
        this.avatar = new Player(avatar.name,avatar.x,avatar.y,avatar.width,avatar.height)
        this.world = new World(0,0,world.width)
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
        this.ctx.drawImage(this.world.image,0,0,canvasGame.width,canvasGame.height,0,0,((canvasGame.width/this.world.width)*this.world.width),600)
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
        this._drawAvatar()
        // window.requestAnimationFrame(this._update.bind(this))
        window.requestAnimationFrame(() => this._update())

    }
    
    start() {
    this._assignControls()
    this._update()

    }

}


        
 

  




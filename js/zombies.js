const zombieImg = new Image()
let iZombies = 0

/*class Zombie {
    constructor(totalZombies) {
    
        zombieImg.src = zombie[totalZombies[iZombies]].img
        this.id = iZombies+1
        this.name = zombie[totalZombies[iZombies]].name
        this.image = zombieImg
        this.x = zombie[totalZombies[iZombies]].x
        this.y = zombie[totalZombies[iZombies]].y
        this.width = zombie[totalZombies[iZombies]].width
        this.height = zombie[totalZombies[iZombies]].height
        this.power2kill = zombie[totalZombies[iZombies]].power2kill
        this.zombieslives = zombie[totalZombies[iZombies]].lives
        iZombies++
        }

    
    //   // Generate new zombies 
    //   const totalZombies = []
    //   for(let i=0;i<n_zombies.value;i++){
    //       totalZombies.push(Math.ceil(Math.random()*(zombie.length))-1)
    //       }
    //   console.log(totalZombies)

    

}*/
class Zombie {
constructor(x, y, w, h){
    this.image = zombieImg
    this.x = x
    this.y = y
    this.width = w
    this.height = h
    this.random_index = undefined
}

_setX(){
    if(worldImg.src == background5_Image.src){
        this.y -= 120
   }
}

_moveLeft(){
    setInterval(()=> this.x -= 18, 100)
}

_select_Random_Index(randomIndex){
    this.random_index = randomIndex
}
}


const n_zombies = document.getElementById('zombies_number')

// console.log(n_zombies.value)
// console.log(Math.ceil(Math.random()*(zombie.length))-1)



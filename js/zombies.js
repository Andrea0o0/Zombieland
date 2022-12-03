const zombieImg = new Image()
let iZombies = 0

class Zombie {
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

    

}

const zombie = [
    {
        name:"BigZombie",
        x:50,
        y:50,
        width:300,
        height:200,
        img:"/images/ZOMBIES/craig-mullins-boss-02-death.gif",
        power2kill:5,
        lives:5
    },
    {
        name:"WalkingDead1",
        x:50,
        y:50,
        width:300,
        height:200,
        img:"/images/ZOMBIES/craig-mullins-z-helmet-blue-squash-wip-03.gif",
        power2kill:1,
        lives:1
    },
    {
        name:"WalkingDead2",
        x:50,
        y:50,
        width:300,
        height:200,
        img:"/images/ZOMBIES/craig-mullins-z-spikey-walk-v1.gif",
        power2kill:1,
        lives:1
    },
    {
        name:"Butcher",
        x:50,
        y:50,
        width:300,
        height:200,
        img:"/images/ZOMBIES/craig-mullins-zombie-boss-03-idle.gif",
        power2kill:2,
        lives:2
    },
    {
        name:"DogZombie",
        x:50,
        y:50,
        width:300,
        height:200,
        img:"/images/ZOMBIES/craig-mullins-zombie-dog-idle NO BACKGROUND.gif",
        power2kill:1,
        lives:1
    }
]

const n_zombies = document.getElementById('zombies_number')

// console.log(n_zombies.value)
// console.log(Math.ceil(Math.random()*(zombie.length))-1)



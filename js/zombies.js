const zombieImg = new Image()
class Zombie {
    constructor(name,x,y,width,height,img,power2kill,lives) {
        this.name = name
        this.image = zombieImg
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.power2kill = power2kill
        this.zombieslives = lives
    }


}

const zombie = [
    {
        name:"BigZombie",
        x:50,
        y:50,
        width:300,
        height:200,
        img:3,
        power2kill:5,
        lives:5
    },
    {
        name:"WalkingDead",
        x:50,
        y:50,
        width:300,
        height:200,
        img:3,
        power2kill:1,
        lives:1
    },
    {
        name:"Butcher",
        x:50,
        y:50,
        width:300,
        height:200,
        img:3,
        power2kill:2,
        lives:2
    },
    {
        name:"DogZombie",
        x:50,
        y:50,
        width:300,
        height:200,
        img:3,
        power2kill:1,
        lives:1
    }
]

console.log(zombie.length)



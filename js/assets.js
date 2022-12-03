//KILLERS - AVATARS
let avatar
let avatarImg = new Image()

const killerAndrea = {
    name:'Andrea',
    x:50,
    y:650-220,
    width:150,
    height:200,
    img:'/images/KILLERS AVATAR/craig-mullins-maggie-idle-02 NO BACKGROUND cut.gif'
}

const killerSally = {
    name:'Sally',
    x:50,
    y:650-220,
    width:150,
    height:200,
    img:'/images/KILLERS AVATAR/craig-mullins-michone-idle NO BACKGROUND cut.gif'
}

avatar = killerAndrea
avatarImg.src = killerAndrea.img

//BACKGROUNDS
let world
let worldImg = new Image()

// console.log(backgroundsize.naturalHeight)
// console.log(backgroundsize.naturalWidth)

//ZOMBIES
const zombie = 
    {
        name:"BigZombie",
        x:1450,
        y:650-180,
        width:200,
        height:180,
        img:"/images/ZOMBIES/craig-mullins-zombie-dog-idle NO BACKGROUND.gif",
        power2kill:5,
        lives:5
    }

//     {
//         name:"WalkingDead1",
//         x:150,
//         y:250,
//         width:300,
//         height:200,
//         img:"/images/ZOMBIES/craig-mullins-z-helmet-blue-squash-wip-03.gif",
//         power2kill:1,
//         lives:1
//     },
//     {
//         name:"WalkingDead2",
//         x:250,
//         y:250,
//         width:300,
//         height:200,
//         img:"/images/ZOMBIES/craig-mullins-z-spikey-walk-v1.gif",
//         power2kill:1,
//         lives:1
//     },
//     {
//         name:"Butcher",
//         x:350,
//         y:250,
//         width:300,
//         height:200,
//         img:"/images/ZOMBIES/craig-mullins-zombie-boss-03-idle.gif",
//         power2kill:2,
//         lives:2
//     },
//     {
//         name:"DogZombie",
//         x:450,
//         y:250,
//         width:300,
//         height:200,
//         img:"/images/ZOMBIES/craig-mullins-zombie-dog-idle NO BACKGROUND.gif",
//         power2kill:1,
//         lives:1
//     }
// ]
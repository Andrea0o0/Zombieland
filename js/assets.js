//KILLERS - AVATARS
let avatar
let avatarImg = new Image()
let avatar_type = 'S'

let bulletImg = new Image()
bulletImg.src = '/images/BULLET/Bullet.png'

const killerAndrea = {
    name:'Andrea',
    x:50,
    y:650-220,
    width:150,
    height:200,
    img:'/images/KILLERS AVATAR/craig-mullins-maggie-idle-02 NO BACKGROUND cut.gif',
    static_Right:[
        '/images/KILLERS AVATAR/ANDREA/STATIC/RIGHT/1.png',
        '/images/KILLERS AVATAR/ANDREA/STATIC/RIGHT/2.png',
        '/images/KILLERS AVATAR/ANDREA/STATIC/RIGHT/3.png',
        '/images/KILLERS AVATAR/ANDREA/STATIC/RIGHT/4.png',
        '/images/KILLERS AVATAR/ANDREA/STATIC/RIGHT/5.png',
        '/images/KILLERS AVATAR/ANDREA/STATIC/RIGHT/6.png',
        '/images/KILLERS AVATAR/ANDREA/STATIC/RIGHT/7.png',
        '/images/KILLERS AVATAR/ANDREA/STATIC/RIGHT/8.png'
    ],
    static_Left:[
        '/images/KILLERS AVATAR/ANDREA/STATIC/LEFT/1.png',
        '/images/KILLERS AVATAR/ANDREA/STATIC/LEFT/2.png',
        '/images/KILLERS AVATAR/ANDREA/STATIC/LEFT/3.png',
        '/images/KILLERS AVATAR/ANDREA/STATIC/LEFT/4.png',
        '/images/KILLERS AVATAR/ANDREA/STATIC/LEFT/5.png',
        '/images/KILLERS AVATAR/ANDREA/STATIC/LEFT/6.png',
        '/images/KILLERS AVATAR/ANDREA/STATIC/LEFT/7.png',
        '/images/KILLERS AVATAR/ANDREA/STATIC/LEFT/8.png',
    ],
    run_Right:[
        '/images/KILLERS AVATAR/ANDREA/RUN/RIGHT/1.png',
        '/images/KILLERS AVATAR/ANDREA/RUN/RIGHT/2.png',
        '/images/KILLERS AVATAR/ANDREA/RUN/RIGHT/3.png',
        '/images/KILLERS AVATAR/ANDREA/RUN/RIGHT/4.png',
        '/images/KILLERS AVATAR/ANDREA/RUN/RIGHT/5.png',
        '/images/KILLERS AVATAR/ANDREA/RUN/RIGHT/6.png',
        '/images/KILLERS AVATAR/ANDREA/RUN/RIGHT/7.png',
        '/images/KILLERS AVATAR/ANDREA/RUN/RIGHT/8.png',
    ],
    run_Left:[
        '/images/KILLERS AVATAR/ANDREA/RUN/LEFT/1.png',
        '/images/KILLERS AVATAR/ANDREA/RUN/LEFT/2.png',
        '/images/KILLERS AVATAR/ANDREA/RUN/LEFT/3.png',
        '/images/KILLERS AVATAR/ANDREA/RUN/LEFT/4.png',
        '/images/KILLERS AVATAR/ANDREA/RUN/LEFT/5.png',
        '/images/KILLERS AVATAR/ANDREA/RUN/LEFT/6.png',
        '/images/KILLERS AVATAR/ANDREA/RUN/LEFT/7.png',
        '/images/KILLERS AVATAR/ANDREA/RUN/LEFT/8.png',
    ]
}
let heartsImg = new Image()
const hearts = {
    x:500,
    y:20,
    width:400,
    height:70,
    img:[
        '/images/TOOLS/HEARTS/1 HEART.png',
        '/images/TOOLS/HEARTS/2 HEARTS.png',
        '/images/TOOLS/HEARTS/3 HEARTS.png',
        '/images/TOOLS/HEARTS/4 HEARTS.png',
        '/images/TOOLS/HEARTS/5 HEARTS.png',
        '/images/TOOLS/HEARTS/6 HEARTS.png',
        '/images/TOOLS/HEARTS/7 HEARTS.png',
        '/images/TOOLS/HEARTS/8 HEARTS.png',
        '/images/TOOLS/HEARTS/9 HEARTS.png',
        '/images/TOOLS/HEARTS/10 HEARTS.png'
    ]

}
let bulletslineImg = new Image()
const bulletsline = {
    x:950,
    y:20,
    width:400,
    height:70,
    img:[
        '/images/TOOLS/BULLETS/1 BULLET.png',
        '/images/TOOLS/BULLETS/2 BULLETS.png',
        '/images/TOOLS/BULLETS/3 BULLETS.png',
        '/images/TOOLS/BULLETS/4 BULLETS.png',
        '/images/TOOLS/BULLETS/5 BULLETS.png',
        '/images/TOOLS/BULLETS/6 BULLETS.png',
        '/images/TOOLS/BULLETS/7 BULLETS.png',
        '/images/TOOLS/BULLETS/8 BULLETS.png',
        '/images/TOOLS/BULLETS/9 BULLETS.png',
        '/images/TOOLS/BULLETS/10 BULLETS.png'
    ]

}

const killerSally = {
    name:'Sally',
    x:50,
    y:650-220,
    width:180,
    height:200,
    img:'/images/KILLERS AVATAR/craig-mullins-michone-idle NO BACKGROUND cut.gif',
    static_Right:[
        '/images/KILLERS AVATAR/SALLY/STATIC/RIGHT/1.png',
        '/images/KILLERS AVATAR/SALLY/STATIC/RIGHT/2.png',
        '/images/KILLERS AVATAR/SALLY/STATIC/RIGHT/3.png',
        '/images/KILLERS AVATAR/SALLY/STATIC/RIGHT/4.png',
        '/images/KILLERS AVATAR/SALLY/STATIC/RIGHT/5.png',
        '/images/KILLERS AVATAR/SALLY/STATIC/RIGHT/6.png',
        '/images/KILLERS AVATAR/SALLY/STATIC/RIGHT/7.png',
        '/images/KILLERS AVATAR/SALLY/STATIC/RIGHT/8.png'
    ],
    static_Left:[
        '/images/KILLERS AVATAR/SALLY/STATIC/LEFT/1.png',
        '/images/KILLERS AVATAR/SALLY/STATIC/LEFT/2.png',
        '/images/KILLERS AVATAR/SALLY/STATIC/LEFT/3.png',
        '/images/KILLERS AVATAR/SALLY/STATIC/LEFT/4.png',
        '/images/KILLERS AVATAR/SALLY/STATIC/LEFT/5.png',
        '/images/KILLERS AVATAR/SALLY/STATIC/LEFT/6.png',
        '/images/KILLERS AVATAR/SALLY/STATIC/LEFT/7.png',
        '/images/KILLERS AVATAR/SALLY/STATIC/LEFT/8.png',
    ],
    run_Right:[
        '/images/KILLERS AVATAR/SALLY/RUN/RIGHT/1.png',
        '/images/KILLERS AVATAR/SALLY/RUN/RIGHT/2.png',
        '/images/KILLERS AVATAR/SALLY/RUN/RIGHT/3.png',
        '/images/KILLERS AVATAR/SALLY/RUN/RIGHT/4.png',
        '/images/KILLERS AVATAR/SALLY/RUN/RIGHT/5.png',
        '/images/KILLERS AVATAR/SALLY/RUN/RIGHT/6.png',
        '/images/KILLERS AVATAR/SALLY/RUN/RIGHT/7.png',
        '/images/KILLERS AVATAR/SALLY/RUN/RIGHT/8.png'
    ],
    run_Left:[
        '/images/KILLERS AVATAR/SALLY/RUN/LEFT/1.png',
        '/images/KILLERS AVATAR/SALLY/RUN/LEFT/2.png',
        '/images/KILLERS AVATAR/SALLY/RUN/LEFT/3.png',
        '/images/KILLERS AVATAR/SALLY/RUN/LEFT/4.png',
        '/images/KILLERS AVATAR/SALLY/RUN/LEFT/5.png',
        '/images/KILLERS AVATAR/SALLY/RUN/LEFT/6.png',
        '/images/KILLERS AVATAR/SALLY/RUN/LEFT/7.png',
        '/images/KILLERS AVATAR/SALLY/RUN/LEFT/8.png',
    ]
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
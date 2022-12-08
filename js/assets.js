//AVATAR BUTTONS
const buttonKillerAndrea = document.getElementById('killer_Andrea')
const buttonKillerSally = document.getElementById('killer_Sally')

// BORDER BUTTONS
const borderKillerAndrea = document.getElementById('killer_Andrea_image')
const borderKillerSally = document.getElementById('killer_Sally_image')


// WORLDS IMAGES & WORLD BUTTONS

const background1_Image = document.getElementById('background_1_image')
const background2_Image = document.getElementById('background_2_image')
const background3_Image = document.getElementById('background_3_image')
const background4_Image = document.getElementById('background_4_image')
const background5_Image = document.getElementById('background_5_image')
const background6_Image = document.getElementById('background_6_image')


const background1 = document.getElementById('background_1')
const background2 = document.getElementById('background_2')
const background3 = document.getElementById('background_3')
const background4 = document.getElementById('background_4')
const background5 = document.getElementById('background_5')
const background6 = document.getElementById('background_6')


//GAME PAGE
const gamePage = document.getElementById('game-page')

//CANVAS
const canvasGame = document.getElementById('canvas-Game')

// const ctxAvatar = canvasAvatar.getContext('2d')
const ctx = canvasGame.getContext('2d')

// LANDING START PAGE
const startPage = document.getElementById('start-page')
const startAvatar = document.getElementById('start-landing_page')

// AVATAR PAGE
const avatarPage = document.getElementById('avatar-page')
const startGame = document.getElementById('start-game')


// BULLET IMAGES
let bulletImg = new Image()
bulletImg.src = '/images/BULLET/Bullet.png'

// AVATARS CONST

// AVATAR ANDREA CONST
const killerAndrea = {
    name:'Andrea',
    x:50,
    y:650-230,
    width:150,
    height:200,
    static_Right:[
        '/images/KILLERS AVATAR/ANDREA/STATIC/RIGHT/1.png'
    ],
    static_Left:[
        '/images/KILLERS AVATAR/ANDREA/STATIC/LEFT/1.png'
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

// AVATAR SALLY CONST
const killerSally = {
    name:'Sally',
    x:50,
    y:650-230,
    width:180,
    height:200,
    static_Right:[
        '/images/KILLERS AVATAR/SALLY/STATIC/RIGHT/1.png'
    ],
    static_Left:[
        '/images/KILLERS AVATAR/SALLY/STATIC/LEFT/1.png'
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

// WORLD IMG
let world
let worldImg = new Image()

//KILLERS - AVATARS
let avatar
let avatarImg = new Image()

// PREDETERMINED WORLD
world = {
    width:background1_Image.naturalWidth
}
worldImg.src = background1_Image.src


//PREDETERMINED AVATAR
avatar = killerAndrea
avatarImg.src = killerAndrea.run_Right[0]


//ZOMBIES
const zombieImg = new Image()
const zombie = [
    {
        name:"WalkingZombie",
        x:1790,
        y:650-210,
        width:140,
        height:180,
        img:[
            '/images/ZOMBIES/WALKING DEAD/RUN 1/LEFT/1.png',
            '/images/ZOMBIES/WALKING DEAD/RUN 1/LEFT/2.png',
            '/images/ZOMBIES/WALKING DEAD/RUN 1/LEFT/3.png',
            '/images/ZOMBIES/WALKING DEAD/RUN 1/LEFT/4.png',
            '/images/ZOMBIES/WALKING DEAD/RUN 1/LEFT/5.png',
            '/images/ZOMBIES/WALKING DEAD/RUN 1/LEFT/6.png',
            '/images/ZOMBIES/WALKING DEAD/RUN 1/LEFT/7.png',
            '/images/ZOMBIES/WALKING DEAD/RUN 1/LEFT/8.png'
        ]
    },
    {
        name:"WalkingZombie2",
        x:1790,
        y:650-210,
        width:140,
        height:180,
        img:[
            '/images/ZOMBIES/WALKING DEAD/RUN 2/LEFT/1.png',
            '/images/ZOMBIES/WALKING DEAD/RUN 2/LEFT/2.png',
            '/images/ZOMBIES/WALKING DEAD/RUN 2/LEFT/3.png',
            '/images/ZOMBIES/WALKING DEAD/RUN 2/LEFT/4.png',
            '/images/ZOMBIES/WALKING DEAD/RUN 2/LEFT/5.png',
            '/images/ZOMBIES/WALKING DEAD/RUN 2/LEFT/6.png',
            '/images/ZOMBIES/WALKING DEAD/RUN 2/LEFT/7.png',
            '/images/ZOMBIES/WALKING DEAD/RUN 2/LEFT/8.png'
        ]
    },
    {
        name:"DogZombie",
        x:1790,
        y:650-210,
        width:300,
        height:180,
        img:[
            '/images/ZOMBIES/DOG/LEFT/1.png',
            '/images/ZOMBIES/DOG/LEFT/2.png',
            '/images/ZOMBIES/DOG/LEFT/3.png',
            '/images/ZOMBIES/DOG/LEFT/4.png',
            '/images/ZOMBIES/DOG/LEFT/5.png',
            '/images/ZOMBIES/DOG/LEFT/6.png',
            '/images/ZOMBIES/DOG/LEFT/7.png',
            '/images/ZOMBIES/DOG/LEFT/8.png',
            '/images/ZOMBIES/DOG/LEFT/9.png'
        ]
    },
    {
        name:"BigZombie",
        x:1790,
        y:650-410,
        width:450,
        height:380,
        img:[
            '/images/ZOMBIES/BIGZOMBIE/RUN/LEFT/1.png',
            '/images/ZOMBIES/BIGZOMBIE/RUN/LEFT/2.png',
            '/images/ZOMBIES/BIGZOMBIE/RUN/LEFT/3.png',
            '/images/ZOMBIES/BIGZOMBIE/RUN/LEFT/4.png',
            '/images/ZOMBIES/BIGZOMBIE/RUN/LEFT/5.png',
            '/images/ZOMBIES/BIGZOMBIE/RUN/LEFT/6.png',
            '/images/ZOMBIES/BIGZOMBIE/RUN/LEFT/7.png',
            '/images/ZOMBIES/BIGZOMBIE/RUN/LEFT/8.png'
        ]
    },
]

// TOOLS

// HEART LINE
let heartsImg = new Image()
const hearts = {
    x:400,
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

// BULLET LINE
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

//TIMER
let timerImg = new Image()
const timer = {
    x:830,
    y:20,
    width:80,
    height:80,
    img:[
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/2.00.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.59.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.58.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.57.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.56.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.55.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.54.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.53.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.52.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.51.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.50.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.49.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.48.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.47.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.46.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.45.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.44.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.43.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.42.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.41.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.40.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.39.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.38.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.37.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.36.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.35.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.34.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.33.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.32.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.31.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.30.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.29.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.28.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.27.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.26.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.25.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.24.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.23.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.22.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.21.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.20.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.19.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.18.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.17.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.16.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.15.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.14.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.13.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.12.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.11.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.10.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.09.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.08.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.07.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.06.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.05.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.04.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.03.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.02.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.01.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/1.00.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.59.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.58.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.57.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.56.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.55.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.54.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.53.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.52.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.51.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.50.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.49.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.48.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.47.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.46.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.45.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.44.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.43.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.42.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.41.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.40.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.39.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.38.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.37.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.36.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.35.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.34.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.33.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.32.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.31.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.30.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.29.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.28.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.27.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.26.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.25.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.24.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.23.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.22.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.21.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.20.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.19.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.18.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.17.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.16.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.15.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.14.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.13.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.12.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.11.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.10.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.09.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.08.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.07.png'},
        // {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.06.png'},
        {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.05.png'},
        {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.04.png'},
        {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.03.png'},
        {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.02.png'},
        {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.01.png'},
        {seconds:1, src:'/images/TOOLS/TIMER/2 MIN/0.00.png'}   

     ]
}
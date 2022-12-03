const canvasGame = document.getElementById('canvas-Game')
let index = 0
let movement = ''

const buttonKillerAndrea = document.getElementById('killer_Andrea')
const buttonKillerSally = document.getElementById('killer_Sally')
const borderKillerAndrea = document.getElementById('killer_Andrea_image')
const borderKillerSally = document.getElementById('killer_Sally_image')

function to_non_active_Avatar(){
    borderKillerAndrea.classList.replace('active_border','no_active_border')
    borderKillerSally.classList.replace('active_border','no_active_border')
}


buttonKillerAndrea.onclick = function(){
    avatarImg.src = killerAndrea.img
    avatar = killerAndrea
    to_non_active_Avatar()
    borderKillerAndrea.classList.replace('no_active_border','active_border')
}

buttonKillerSally.onclick = function(){
    avatarImg.src = killerSally.img
    avatar = killerSally
    to_non_active_Avatar()
    borderKillerSally.classList.replace('no_active_border','active_border')
}

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

world = {
    width:background1_Image.naturalWidth
}
worldImg.src = background1_Image.src

function to_non_active_Background(){
    background1_Image.classList.replace('active_border','no_active_border')
    background2_Image.classList.replace('active_border','no_active_border')
    background3_Image.classList.replace('active_border','no_active_border')
    background4_Image.classList.replace('active_border','no_active_border')
    background5_Image.classList.replace('active_border','no_active_border')
    background6_Image.classList.replace('active_border','no_active_border')
}

// console.log(backgroundsize.naturalHeight)
// console.log(backgroundsize.naturalWidth)

background1.onclick = function(){
    to_non_active_Background()
    background1_Image.classList.replace('no_active_border','active_border')
    worldImg.src = "/images/BACKGROUND/background example 1.jpg"
    world.width = background1_Image.naturalWidth
}

background2.onclick = function(){
    to_non_active_Background()
    background2_Image.classList.replace('no_active_border','active_border')
    worldImg.src = background2_Image.src
    world.width = background2_Image.naturalWidth
}

background3.onclick = function(){
    to_non_active_Background()
    background3_Image.classList.replace('no_active_border','active_border')
    worldImg.src = background3_Image.src
    world.width = background3_Image.naturalWidth
}

background4.onclick = function(){
    to_non_active_Background()
    background4_Image.classList.replace('no_active_border','active_border')
    worldImg.src = background4_Image.src
    world.width = background4_Image.naturalWidth
}

background5.onclick = function(){
    to_non_active_Background()
    background5_Image.classList.replace('no_active_border','active_border')
    worldImg.src = background5_Image.src
    world.width = background5_Image.naturalWidth
}

background6.onclick = function(){
    to_non_active_Background()
    background6_Image.classList.replace('no_active_border','active_border')
    worldImg.src = background6_Image.src
    world.width = background6_Image.naturalWidth
}


window.onload = function(){
    
    // const ctxAvatar = canvasAvatar.getContext('2d')
    const ctx = canvasGame.getContext('2d')

    // LANDING START PAGE
    const startPage = document.getElementById('start-page')
    const startAvatar = document.getElementById('start-landing_page')

    // AVATAR PAGE
    const avatarPage = document.getElementById('avatar-page')
    const startGame = document.getElementById('start-game')

    //GAME PAGE
    const gamePage = document.getElementById('game-page')

    startAvatar.onclick = function(){
        startPage.style = 'display:none'
        avatarPage.style = 'display:flex'
    }

const totalZombies = []

    startGame.onclick = function(){
        avatarPage.style = 'display:none'
        gamePage.style = 'display:flex'
        canvasGame.classList.remove('hidden')
        const game = new Game (ctx,avatar,world,zombie)
        game.start()
    }
}










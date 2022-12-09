function to_non_active_Avatar(){
    borderKillerAndrea.classList.replace('active_border','no_active_border')
    borderKillerSally.classList.replace('active_border','no_active_border')
}

buttonKillerAndrea.onclick = function(){
    avatarImg.src = killerAndrea.run_Right[0]
    avatar = killerAndrea
    to_non_active_Avatar()
    borderKillerAndrea.classList.replace('no_active_border','active_border')
}

buttonKillerSally.onclick = function(){
    avatarImg.src = killerSally.run_Right[0]
    avatar = killerSally
    to_non_active_Avatar()
    borderKillerSally.classList.replace('no_active_border','active_border')
}


function to_non_active_Background(){
    background1_Image.classList.replace('active_border','no_active_border')         
    background2_Image.classList.replace('active_border','no_active_border')
    background3_Image.classList.replace('active_border','no_active_border')
    background4_Image.classList.replace('active_border','no_active_border')
    background5_Image.classList.replace('active_border','no_active_border')
    background6_Image.classList.replace('active_border','no_active_border')
}

background1.onclick = function(){
    to_non_active_Background()
    background1_Image.classList.replace('no_active_border','active_border')
    worldImg.src = background1_Image.src
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

    startAvatar.onclick = function(){
        startPage.style = 'display:none'
        avatarPage.style = 'display:flex'
    }


    startGame.onclick = function(){
        avatarPage.style = 'display:none'
        gamePage.style = 'display:flex'
        canvasGame.classList.remove('hidden')
        const game = new Game (ctx,avatar,world,bulletsline,hearts,timer)
        game.start()
    }
}


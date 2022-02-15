const nameSound = document.getElementById('showNameSound')

const play = (audio) => audio.play()

const pause = (audio) =>  audio.pause() 

const showNameSound = (title, currentSound) => {
    const soundName = currentSound.split('/')[2]
    title.textContent = soundName
}

const next = (list, current, currentAudio) => {

    const indexCurrent = list.indexOf(current)

    if ( list[list.length - 1] === current ) {
        pause(currentAudio)

        currentAudio.src = list[0]
        play(currentAudio)

        localStorage.setItem('currentAudio', list[0])
        showNameSound(nameSound, localStorage.getItem('currentAudio'))
    }

    if ( list[list.length - 1] !== current ) {
        
        pause(currentAudio)

        currentAudio.src = list[indexCurrent + 1]
        play(currentAudio)
        
        localStorage.setItem('currentAudio', list[indexCurrent + 1])
        showNameSound(nameSound, localStorage.getItem('currentAudio'))
    }

}

const prev = (list, current, currentAudio) => {

    const indexCurrent = list.indexOf(current)

    if ( current === list[0] ) {
        pause(currentAudio)

        currentAudio.src = list[list.length - 1]
        play(currentAudio)
        localStorage.setItem('currentAudio', list[list.length - 1])
        showNameSound(nameSound, localStorage.getItem('currentAudio'))
    }

    if (  current !== list[0] ) {
        
        pause(currentAudio)

        currentAudio.src = list[indexCurrent - 1]
        play(currentAudio)
        localStorage.setItem('currentAudio', list[indexCurrent - 1])
        showNameSound(nameSound, localStorage.getItem('currentAudio'))
    }

}


export {
    play,
    pause,
    next,
    prev,
    showNameSound
}
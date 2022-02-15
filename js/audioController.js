const play = (audio) => audio.play()

const pause = (audio) => {
    
    if (audio.paused === false) audio.pause()

}

const next = (list, current, currentAudio) => {

    const indexCurrent = list.indexOf(current)

    if ( list[list.length - 1] === current ) {
        pause(currentAudio)

        const audio = new Audio(list[0])
        audio.play()

    }

    if ( list[list.length - 1] !== current ) {
        
        pause(currentAudio)

        const nextAudio = new Audio(list[indexCurrent + 1])
        nextAudio.play()

    }

}


export {
    play,
    pause,
    next
}
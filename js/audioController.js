const play = (audio) => audio.play()

const pause = (audio) =>  audio.pause() 

const next = (list, current, currentAudio) => {

    const indexCurrent = list.indexOf(current)
    console.log(
        'actual instancia', currentAudio, 'actual sonando', current, 'lista', list
    )


    if ( list[list.length - 1] === current ) {
        pause(currentAudio)

        currentAudio.src = list[0]
        play(currentAudio)

        localStorage.setItem('currentAudio', list[0])
    }

    if ( list[list.length - 1] !== current ) {
        
        pause(currentAudio)

        currentAudio.src = list[indexCurrent + 1]
        play(currentAudio)
        
        localStorage.setItem('currentAudio', list[indexCurrent + 1])
    }

}

const prev = (list, current, currentAudio) => {

    const indexCurrent = list.indexOf(current)

    if ( current === list[0] ) {
        pause(currentAudio)

        currentAudio.src = list[list.length - 1]
        play(currentAudio)
        localStorage.setItem('currentAudio', list[list.length - 1])
    }

    if (  current !== list[0] ) {
        
        pause(currentAudio)

        currentAudio.src = list[indexCurrent - 1]
        play(currentAudio)
        localStorage.setItem('currentAudio', list[indexCurrent - 1])

    }

}


export {
    play,
    pause,
    next,
    prev
}
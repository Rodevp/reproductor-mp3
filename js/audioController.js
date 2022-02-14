const play = (audio) => audio.play()

const pause = (audio) => {
    
    if (!audio.paused) {
        audio.paused()
    }

    if (audio.paused) {
        play(audio)
    }

}




export {
    play,
    pause
}
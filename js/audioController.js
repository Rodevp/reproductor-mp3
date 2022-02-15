const play = (audio) => audio.play()

const pause = (audio) => {
    
    console.log(audio, 'is pause? -> ', audio.paused)

    if (audio.paused === false) {
        console.log('entre -> ', audio)
        audio.paused = true
    }

}


export {
    play,
    pause
}
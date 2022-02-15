import {
    play,
    pause
} from './audioController.js'




const audio = new Audio('./audio/thanos.mp3')
const playing = document.getElementById('playing')

playing.addEventListener('click', e => {
    console.log('click')
    play(audio)
})

setInterval(() => {
    pause(audio)
}, 4000)
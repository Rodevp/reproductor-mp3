import {
    play,
    pause,
    next
} from './audioController.js'


const listAudios = [
    './audio/thanos.mp3',
    './audio/boca_yo_te_amo.mp3'
]

const initialAudio = new Audio('./audio/thanos.mp3')
const playing = document.getElementById('playing')
const nextAudio = document.getElementById('next_audio')

playing.addEventListener('click', e => {

    play(initialAudio)

})

nextAudio.addEventListener('click', e => {
    next(listAudios, './audio/thanos.mp3', initialAudio)
})


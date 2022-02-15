import {
    play,
    pause,
    next,
    prev
} from './audioController.js'


const listAudios = [
    './audio/thanos.mp3',
    './audio/boca_yo_te_amo.mp3'
]

const initialAudio = new Audio('./audio/boca_yo_te_amo.mp3')
const playing = document.getElementById('playing')
const nextAudio = document.getElementById('next_audio')
const prevAudio = document.getElementById('arrow__prev')

playing.addEventListener('click', e => {

    play(initialAudio)

})

nextAudio.addEventListener('click', e => {
    next(listAudios, './audio/thanos.mp3', initialAudio)
})

prevAudio.addEventListener('click', e => {
    prev(listAudios, './audio/boca_yo_te_amo.mp3', initialAudio)
})


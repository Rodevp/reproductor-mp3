import { globalAudio } from './audio.js'
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

const playing = document.getElementById('playing')
const nextAudio = document.getElementById('next_audio')
const prevAudio = document.getElementById('arrow__prev')
const currentAudio = globalAudio(listAudios)

console.log(localStorage.getItem('currentAudio'), currentAudio)

playing.addEventListener('click', e => {
    
    if (!currentAudio.paused) {
        console.log('he entrado al pause')
        pause(currentAudio)
        
        localStorage.setItem('currentAudio', 
            localStorage.getItem('currentAudio') !== null
                ? listAudios[listAudios.indexOf(localStorage.getItem('currentAudio')) ]
                : listAudios[0]
        )

    } else {
        console.log('he entrado al play')
        play(currentAudio)
        
        localStorage.setItem('currentAudio', 
            localStorage.getItem('currentAudio') !== null
                ? listAudios[listAudios.indexOf(localStorage.getItem('currentAudio')) ]
                : listAudios[0]
        )
    }

})

nextAudio.addEventListener('click', e => {
    next(listAudios, localStorage.getItem('currentAudio'), currentAudio)
})

prevAudio.addEventListener('click', e => {
    prev(listAudios, localStorage.getItem('currentAudio'), currentAudio)
})


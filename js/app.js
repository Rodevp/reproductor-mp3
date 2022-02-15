import { globalAudio } from './audio.js'
import {
    play,
    pause,
    next,
    prev,
    showNameSound
} from './audioController.js'


const listAudios = [
    './audio/thanos.mp3',
    './audio/boca_yo_te_amo.mp3',
    './audio/soltero.mp3'
]

const playing = document.getElementById('playing')
const nextAudio = document.getElementById('next_audio')
const prevAudio = document.getElementById('arrow__prev')
const nameSound = document.getElementById('showNameSound')
const volumeControl = document.getElementById('volume')
const disk = document.getElementById('disk')
const currentAudio = globalAudio(listAudios)

playing.addEventListener('click', e => {
    
    if (!currentAudio.paused) {
        pause(currentAudio)
        
        localStorage.setItem('currentAudio', 
            localStorage.getItem('currentAudio') !== null
                ? listAudios[listAudios.indexOf(localStorage.getItem('currentAudio')) ]
                : listAudios[0]
        )
        disk.classList.remove('diks__image')
        
    } else {
        play(currentAudio)
        localStorage.setItem('currentAudio', 
            localStorage.getItem('currentAudio') !== null
                ? listAudios[listAudios.indexOf(localStorage.getItem('currentAudio')) ]
                : listAudios[0]
        )
            showNameSound(nameSound, localStorage.getItem('currentAudio'))
            disk.classList.add('diks__image')
    }
    
})

nextAudio.addEventListener('click', e => {
    next(listAudios, localStorage.getItem('currentAudio'), currentAudio)
})

prevAudio.addEventListener('click', e => {
    prev(listAudios, localStorage.getItem('currentAudio'), currentAudio)
})

volumeControl.addEventListener('click', e => {
    currentAudio.volume = e.target.value
})

nameSound.textContent = localStorage.getItem('currentAudio') !== null 
                                ? localStorage.getItem('currentAudio').split('/')[2]
                                : 'No habido reproducción'


import { globalAudio } from './audio.js'
import {
    play,
    pause,
    next,
    prev,
    showNameSound
} from './audioController.js'
import { validateShowMeme } from './meme.js'

const listAudios = [
    './audio/thanos.mp3',
    './audio/boca_yo_te_amo.mp3',
    './audio/soltero.mp3'
]

const BOCA_COLORS = {
    primray: '#010665',
    second: '#000B84'
}

const THANOS_COLORS = {
    primray: '#3D0264',
    second: '#3F0473'
}

const SINGLE_COLORS = {
    primray: '#037A56',
    second: '#03732E'
}

const playing = document.getElementById('playing')
const nextAudio = document.getElementById('next_audio')
const prevAudio = document.getElementById('arrow__prev')
const nameSound = document.getElementById('showNameSound')
const volumeControl = document.getElementById('volume')
const disk = document.getElementById('disk')
const allBars = document.querySelectorAll('.bar')
const imgMeme = document.getElementById('memeImage')
const currentAudio = globalAudio(listAudios)

const validColorsChangeBars = (bars) => {
    const colorResult = localStorage.getItem('currentAudio') === listAudios[0]
                            ? THANOS_COLORS
                            : localStorage.getItem('currentAudio') === listAudios[1]
                            ? BOCA_COLORS
                            : SINGLE_COLORS
    
    for (let bar of bars) {
        if (bars.indexOf(bar) % 2 === 0) {
            bar.style.backgroundColor = `${colorResult.primray}`
        } else {
            bar.style.backgroundColor = `${colorResult.second}`
        }
    }

}

const moveBars = (bars = []) => {

    for (let bar of bars) {
        if (bars.indexOf(bar) % 2 === 0) {
            bar.classList.add('bar-even')
        } else {
            bar.classList.add('bar--odds')
        }
    }

}

const stopBars = (bars = []) => {
    
    for (let bar of bars) {
        if (bars.indexOf(bar) % 2 === 0) {
            bar.classList.remove('bar-even')
        } else {
            bar.classList.remove('bar--odds')
        }
    }

}


playing.addEventListener('click', e => {

    if (!currentAudio.paused) {
        pause(currentAudio)

        localStorage.setItem('currentAudio',
            localStorage.getItem('currentAudio') !== null
                ? listAudios[listAudios.indexOf(localStorage.getItem('currentAudio'))]
                : listAudios[0]
        )
        disk.classList.remove('diks__image')
        stopBars([...allBars])

    } else {

        play(currentAudio)
        localStorage.setItem('currentAudio',
            localStorage.getItem('currentAudio') !== null
                ? listAudios[listAudios.indexOf(localStorage.getItem('currentAudio'))]
                : listAudios[0]
        )
        showNameSound(nameSound, localStorage.getItem('currentAudio'))
        disk.classList.add('diks__image')
        moveBars([...allBars])
        validColorsChangeBars([...allBars])
        validateShowMeme(localStorage.getItem('currentAudio'), currentAudio, imgMeme)
    }

})

nextAudio.addEventListener('click', e => {
    next(listAudios, localStorage.getItem('currentAudio'), currentAudio)
    validColorsChangeBars([...allBars])
    validateShowMeme(localStorage.getItem('currentAudio'), currentAudio, imgMeme)
})

prevAudio.addEventListener('click', e => {
    prev(listAudios, localStorage.getItem('currentAudio'), currentAudio)
    validColorsChangeBars([...allBars])
    validateShowMeme(localStorage.getItem('currentAudio'), currentAudio, imgMeme)
})

volumeControl.addEventListener('click', e => {
    currentAudio.volume = e.target.value
})

nameSound.textContent = localStorage.getItem('currentAudio') !== null
    ? localStorage.getItem('currentAudio').split('/')[2]
    : 'No habido reproducción'


setInterval(() => {
    currentAudio.paused && imgMeme.classList.remove('animation__image')
}, 1000)
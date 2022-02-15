const globalAudio = (list = []) => {

    return new Audio(
        localStorage.getItem('currentAudio') !== null
            ? list[list.indexOf(localStorage.getItem('currentAudio')) ]
            : list[0] )
}

export {
    globalAudio
}
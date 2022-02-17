const validateShowMeme = (currentSound, sound, renderToImage) => {
    console.log(

        'actual', currentSound, 
        'sonando', sound,
        'img', renderToImage
    
    )

    renderToImage.src = '#'

    if ( currentSound === './audio/thanos.mp3' && !sound.paused ) {
        
        renderToImage.classList.remove('animation__image')
        
        setTimeout(() => {
            renderToImage.src = "./images/thanos_dance.gif";
            renderToImage.classList.add('animation__image')
        }, 100)

    }

    if ( currentSound === './audio/boca_yo_te_amo.mp3' && !sound.paused ) {
        
        renderToImage.classList.remove('animation__image')
        
        setTimeout(() => {
            renderToImage.src = "./images/palermo.gif";
            renderToImage.classList.add('animation__image')
        }, 100)

    }

    if ( currentSound === './audio/soltero.mp3' && !sound.paused ) {
        
        renderToImage.classList.remove('animation__image')

        setTimeout(() => {

            renderToImage.src = "./images/flanders_soltero.gif";
            renderToImage.classList.add('animation__image')

        }, 100)
    }

}

export {
    validateShowMeme
}
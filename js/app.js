const volume = document.getElementById('volume')

volume.addEventListener('change', e => {
    console.log(e.target.value)
})
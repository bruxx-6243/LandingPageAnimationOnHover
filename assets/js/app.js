// ==================== Loader ===================
onload = () =>{
    const loader = document.querySelector('.loader')

    setTimeout(() =>{
        loader.style.opacity = "0"
        loader.style.transition = "opacity .4s ease"
        loader.style.display = 'none'
    }, 5000)
}
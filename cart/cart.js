window.addEventListener('scroll',function(){
    var navbar = document.querySelector(".nav");
    var navbar2 = document.querySelector(".sec");
    navbar.classList.toggle('sticky',window.scrollY)
    navbar2.classList.toggle('sticky1',window.scrollY)
    })

document.querySelector('.accounts').addEventListener('mouseover',function(){
    document.querySelector('.speech-bubble').classList.add('display')
})
document.querySelector('.keep').addEventListener('mouseover',function(){
    document.querySelector('.speech-bubble').classList.add('display')
})
document.querySelector('.keep').addEventListener('mouseout',function(){
    document.querySelector('.speech-bubble').classList.remove('display')
})


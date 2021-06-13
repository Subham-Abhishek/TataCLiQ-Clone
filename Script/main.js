
const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}
$(document).ready(function(){
    $('#owl-one').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000,
        dots: false,
        nav: true,
        navText: [$('.first .owl-nav-prev'), $('.first .owl-nav-next')],
        responsive: {
            0:{
              items: 1
            },
            480:{
              items: 3
            },
            769:{
              items: 4
            }
        }
            
    });

    $('#owl-two').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000,
        dots: false,
        nav: true,
        navText: [$('.second .owl-nav-prev'), $('.second .owl-nav-next')],
        responsive: responsive
    });
});

window.addEventListener('scroll',function(){
    var navbar = document.querySelector(".header");
    var upNav = document.querySelector(".up-nav");
    var logo = document.querySelector(".logo");
    var downNav = document.querySelector(".down-nav");
    navbar.classList.toggle('sticky',window.scrollY)
    logo.classList.toggle('reduce',window.scrollY)    
    upNav.classList.toggle('fed',window.scrollY)
    downNav.classList.toggle('expand',window.scrollY)
    })
  //animated sign in appear
    document.querySelector('#sign').addEventListener('mouseover',function(){
        console.log("h");
        document.querySelector('.speech-bubble').classList.add('display')
    })
    document.querySelector('.keep').addEventListener('mouseover',function(){
        console.log("f");
        document.querySelector('.speech-bubble').classList.add('display')
    })
    document.querySelector('.keep').addEventListener('mouseout',function(){
        console.log("f");
        document.querySelector('.speech-bubble').classList.remove('display')
    })
//----- appear end

    var searchExpand = document.querySelector('#search-expand')
    searchExpand.addEventListener('focus',function(){
        var search = document.querySelector('.search');
        var searchIcon = document.querySelector('.search-icon');
        var cross = document.querySelector('.cross');
        cross.style.opacity = 1;
        searchIcon.classList.add('fedd')
        search.classList.add('strech')
    })
    var cross = document.querySelector('.cross');
    cross.addEventListener('click',function(){
        var search = document.querySelector('.search');
        var searchIcon = document.querySelector('.search-icon');
        searchIcon.classList.remove('fedd')
        search.classList.remove('strech')
        cross.style.opacity=0
    })

    //category dropdown
    var black = document.getElementsByClassName('sub-category-value')
    var blogo = document.querySelectorAll('Blogo')
    console.log(blogo[0]);
    var subCategoryOption = document.querySelectorAll('.sub-category-option');
    var arrow = document.querySelectorAll('.arrow'); 
    var section = document.querySelectorAll('section');
    var categoryExpand = document.querySelector('.category-expand');
    var categoryExpandb = document.querySelector('.b');
    function show(a){
        if(a==0){
        section[Number(a)+1].style.display = "none"
        section[Number(a)].style.display = "flex"
        arrow[Number(a)+1].classList.remove('arrow-icon')
        black[Number(a)].classList.remove('black')
        black[Number(a)].classList.add('black')
        black[Number(a)+1].classList.remove('black')
        
        }
        categoryExpand.style.display = 'flex';
        arrow[+a].classList.add('arrow-icon')
        arrow[Number(a)+1].classList.remove('arrow-icon')
        arrow[Number(a)-1].classList.remove('arrow-icon')
        section[+a].style.display = "flex"
        section[Number(a)+1].style.display = "none"
        section[Number(a)-1].style.display = "none"
        black[+a].classList.add('black')
        black[Number(a)-1].classList.remove('black')
        black[Number(a)+1].classList.remove('black')
        blogo[Number(a)-8].classList.add('showb')
        blogo[Number(a)+1-8].classList.remove('showb')
        blogo[Number(a)-1-8].classList.remove('showb')
    }
    function hide(a){
        categoryExpand.style.display = 'none'
    }
    //brand dropdown
    function showb(a){     
        console.log( Number(a));
        if(a==15){
            section[Number(a)].style.display = "flex"
            section[Number(a)-1].style.display = "none"
            arrow[Number(a)-1].classList.remove('arrow-icon')
            black[Number(a)].classList.remove('black')
            black[Number(a)].classList.add('black')
            black[Number(a)-1].classList.remove('black')
            }
        categoryExpandb.style.display = 'flex';
        arrow[+a].classList.add('arrow-icon')
        arrow[Number(a)+1].classList.remove('arrow-icon')
        arrow[Number(a)-1].classList.remove('arrow-icon')
        section[+a].style.display = "flex"
        section[Number(a)+1].style.display = "none"
        section[Number(a)-1].style.display = "none" 
        black[+a].classList.add('black')
        black[Number(a)-1].classList.remove('black')
        black[Number(a)+1].classList.remove('black')
        blogo[Number(a)-8].classList.add('showb')
        blogo[Number(a)+1-8].classList.remove('showb')
        blogo[Number(a)-1-8].classList.remove('showb')
    }
    function hideb(a){
    categoryExpandb.style.display = 'none';
}

// login signup page

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

// signIn signup page render
function ope(){
    var cover = document.querySelector('.cover')
    cover.style.display='block'
}
function clos(){
    var cover = document.querySelector('.cover')
    cover.style.display='none'
}



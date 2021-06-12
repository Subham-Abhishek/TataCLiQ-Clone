
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

    var subCategoryOption = document.querySelectorAll('.sub-category-option');
    var arrow = document.querySelectorAll('.arrow'); 
    var section = document.querySelectorAll('section');
    var categoryExpand = document.querySelector('.category-expand');
    var categoryExpandb = document.querySelector('.b');
    function show(a){
        categoryExpand.style.display = 'flex';
        arrow[+a].classList.add('arrow-icon')
        section[+a].style.display = "flex"
        section[Number(a)-1].style.display = "none"
        section[+a].style.flexWrap = "wrap"
    }
    function hide(a){
        categoryExpand.style.display = 'none'
        arrow[+a].classList.remove('arrow-icon')
        section[+a].style.display = "none"

        // section[+a].classList.remove('show')
    }
    function showb(a){     
        console.log( Number(a));
        categoryExpandb.style.display = 'flex';
        arrow[+a].classList.add('arrow-icon')
        section[+a].classList.add('show')       
    }
    function hideb(a){
    categoryExpandb.style.display = 'none';
    arrow[+a].classList.remove('arrow-icon')
    section[+a].classList.remove('show')
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



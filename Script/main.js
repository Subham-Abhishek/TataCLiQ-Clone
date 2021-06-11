
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

    var subCategoryValue = document.querySelectorAll('.sub-category-value');
    var arrow = document.querySelectorAll('.arrow');
    var section = document.querySelectorAll('section');
    var categoryExpand = document.querySelector('.category-expand');
    function show(a){
        categoryExpand.style.display = 'flex';
        arrow[a].classList.add('arrow-icon')
        section[a].classList.add('show')
        // subCategoryValue[a].style.color = 'red'
}
    function hide(a){
        // subCategoryValue[a] = '#8d8d8d'
      categoryExpand.style.display = 'none'
      arrow[a].classList.remove('arrow-icon')
      section[a].classList.remove('show')
}

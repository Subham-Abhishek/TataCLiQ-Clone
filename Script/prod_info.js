let selectedProduct = localStorage.getItem("selectedProduct");
selectedProduct = JSON.parse(selectedProduct);
console.log(selectedProduct[0]);
document.title = selectedProduct[0].description;

let prod_carousel = document.getElementById("prod_carousel");
let prodName = document.getElementById("prod-name");
prodName.innerText = selectedProduct[0].description;

prod_carousel.innerHTML = `<div id="discount_arrow">${selectedProduct[0].dicount_offer}</div>
                           <img id="large_img" src="${selectedProduct[0].image1}" alt="">
                           <div class="small_img">
                               <div class="small_img_row"><img src="${selectedProduct[0].smallimage1}" alt=""></div>
                               <div class="small_img_row"><img src="${selectedProduct[0].smallimage2}" alt=""></div>
                               <div class="small_img_row"><img src="${selectedProduct[0].smallimage3}" alt=""></div>
                               <div class="small_img_row"><img src="${selectedProduct[0].smallimage4}" alt=""></div>
                               <div class="small_img_row"><img src="${selectedProduct[0].smallimage5}" alt=""></div>
                           </div>`;

let brand = document.getElementById("brand");
let description = document.getElementById("description");
let discPrice = document.getElementById("disc-price");
let origPrice = document.getElementById("orig-price");
let discount = document.getElementById("discount");
let colour = document.getElementsByClassName("colour");

brand.innerText = selectedProduct[0].brand;
description.innerText = selectedProduct[0].description;
discPrice.innerHTML = `&#8377 ${selectedProduct[0].discounted_price}`;
origPrice.innerHTML = `&#8377 ${selectedProduct[0].price}`;
discount.innerText = `(${selectedProduct[0].dicount_offer})`;
colour[0].innerHTML = `Colour: ${selectedProduct[0].color}`;
colour[1].style.backgroundColor = selectedProduct[0].color;

let smallImg = document.getElementsByClassName("small_img_row");
let largeImg = document.getElementById("large_img");

smallImg[0].addEventListener("click", function () {
  largeImg.src = selectedProduct[0].image1;
});
smallImg[1].addEventListener("click", function () {
  largeImg.src = selectedProduct[0].image2;
});
smallImg[2].addEventListener("click", function () {
  largeImg.src = selectedProduct[0].image3;
});
smallImg[3].addEventListener("click", function () {
  largeImg.src = selectedProduct[0].image4;
});
smallImg[4].addEventListener("click", function () {
  largeImg.src = selectedProduct[0].image5;
});

var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    if (this.style.fontWeight) {
      this.style.fontWeight = null;
    } else {
      this.style.fontWeight = "600";
    }
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

let span = document.getElementsByClassName("scroller");
let div = document.getElementsByTagName("div");
let l = 0;
span[1].onclick = function () {
  l++;
  for (let i of div) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-300px";
    }
    if (l == 2) {
      i.style.left = "-600px";
    }
    if (l == 3) {
      i.style.left = "-900px";
    }
    if (l == 4) {
      i.style.left = "-1200px";
    }
    if (l == 5) {
      i.style.left = "-1500px";
    }
    if (l == 6) {
      i.style.left = "-1800px";
    }
    if (l == 7) {
      i.style.left = "-2100px";
    }
    if (l == 8) {
      i.style.left = "-2400px";
    }
    if (l > 8) {
      l = 0;
    }
  }
};
span[0].onclick = function () {
  l--;
  for (let i of div) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-300px";
    }
    if (l == 2) {
      i.style.left = "-600px";
    }
    if (l == 3) {
      i.style.left = "-900px";
    }
    if (l == 4) {
      i.style.left = "-1200px";
    }
    if (l == 5) {
      i.style.left = "-1500px";
    }
    if (l == 6) {
      i.style.left = "-1800px";
    }
    if (l == 7) {
      i.style.left = "-2100px";
    }
    if (l == 8) {
      i.style.left = "-2400px";
    }
    if (l < 1) {
      l = 0;
    }
  }
};

//Size Guide Chart Start
function sizeGuide() {
  let sizeGuide = document.querySelector(".size-guide");
  sizeGuide.style.display = "block";
  sizeGuide.style.filter = "brightness(80%)"
}

function removeSize() {
  let sizeGuide = document.querySelector(".size-guide");
  sizeGuide.style.display = "none";
}
//Size Guide Chart Start End


let buyNow = document.getElementById("buy_now");
let addToBag = document.getElementById("add_to_bag");
let goToBag = document.getElementById("go_to_bag");

//Number of Products in cart
var bagItem = localStorage.getItem("bagItem");
let loggedIn = localStorage.getItem("loginData");
if (JSON.parse(bagItem).length == 0) {
  document.querySelector(".numb").style.display = "none";
} else {
  document.querySelector(".numb").style.display = "flex";
  bagItem = JSON.parse(bagItem);
  document.querySelector(".numb").innerHTML = bagItem.length;
}

//Scroll to Similar
function scrollsimilar() {
  var y = 200; //y-axis pixel displacement
  var t = 700; //delay in milliseconds

  setTimeout(function () {
    window.scroll(0, 1400);
    y = y + 200; //if you want to increase speed simply increase increment interval
  }, t);
}

//Size Required
var size = "";
function btn1() {
  size = document.getElementById("sizebtn1").innerText;
}
function btn2() {
  size = document.getElementById("sizebtn2").innerText;
}
function btn3() {
  size = document.getElementById("sizebtn3").innerText;
}
function btn4() {
  size = document.getElementById("sizebtn4").innerText;
}
function btn5() {
  size = document.getElementById("sizebtn5").innerText;
}
function btn6() {
  size = document.getElementById("sizebtn6").innerText;
}


//Buy Now

buyNow.onclick = function(){
  let id=1;
  let bagItem = localStorage.getItem("bagItem");

  if(bagItem == null){
    bagItem = [];
  }
  else{
    bagItem = JSON.parse(bagItem);
    bagItem.forEach(function(ele) {
      if(ele.description == selectedProduct[0].description && ele.image1 == selectedProduct[0].image1) id = 0
    });
  }
  if (id == 1) {
    if (size == "") {
      // alert("Please Select Size First");
      let sizeAlert = document.getElementById("size-alert");
      let sizeButtons = document.getElementById("size_selection");
      sizeButtons.style.border = "1px solid #ffcfcf";
      sizeButtons.style.padding = "15px";
      sizeButtons.style.backgroundColor = "#fff7f7";
      sizeButtons.style.borderRadius = "5px";
      setTimeout(() => {
        sizeAlert.style.display = "none";
      }, 1000);
      sizeAlert.style.display = "block";
    } else {
      selectedProduct[0].size = size;
      bagItem.push(selectedProduct[0]);
      localStorage.setItem("bagItem", JSON.stringify(bagItem));
      window.open("cart/cart.html","_blank");
      location.reload()
    }
  } 
}

//Add To Bag

addToBag.onclick = function(){
  console.log(size);
  let id=1;
  let bagItem = localStorage.getItem("bagItem");

  if(bagItem == null){
    bagItem = [];
  }
  else{
    bagItem = JSON.parse(bagItem);
    bagItem.forEach(function(ele) {
      if(ele.description == selectedProduct[0].description && ele.image1 == selectedProduct[0].image1){
        id = 0;
        alert("This Item is present in your bag");
      }
    });
  }
  if(id == 1){
    if(size == ""){
      let sizeAlert = document.getElementById("size-alert");
      let sizeButtons = document.getElementById("size_selection")
      sizeButtons.style.border = "1px solid #ffcfcf";
      sizeButtons.style.padding = "15px";
      sizeButtons.style.backgroundColor = "#fff7f7";
      sizeButtons.style.borderRadius = "5px";
      setTimeout(() => {
        sizeAlert.style.display = "none"
      }, 1000);
        sizeAlert.style.display = "block";
    }
    else{
      selectedProduct[0].size = size;
      bagItem.push(selectedProduct[0]);
      localStorage.setItem("bagItem", JSON.stringify(bagItem));
      addToBag.style.display = "none";
      goToBag.style.display = "block";
      location.reload()
    }
  }
  if(id == 0){
    addToBag.style.display = "none";
    goToBag.style.display = "block";
  }
}

//Go To Bag 

goToBag.onclick = function(){
  window.open("cart/cart.html", "_blank");
  location.reload()
}


//Navbar and Login Signup


window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".header");
  var upNav = document.querySelector(".up-nav");
  var logo = document.querySelector(".logo");
  var downNav = document.querySelector(".down-nav");
  navbar.classList.toggle("sticky", window.scrollY);
  logo.classList.toggle("reduce", window.scrollY);
  upNav.classList.toggle("fed", window.scrollY);
  downNav.classList.toggle("expand", window.scrollY);
});
//animated sign in appear
document.querySelector("#sign").addEventListener("mouseover", function () {
  console.log("h");
  document.querySelector(".speech-bubble").classList.add("display");
});
document.querySelector(".keep").addEventListener("mouseover", function () {
  console.log("f");
  document.querySelector(".speech-bubble").classList.add("display");
});
document.querySelector(".keep").addEventListener("mouseout", function () {
  console.log("f");
  document.querySelector(".speech-bubble").classList.remove("display");
});
document.querySelector(".accounts").addEventListener("mouseover", function () {
  document.querySelector(".speech-bubble").classList.add("display");
});
//----- appear end

var searchExpand = document.querySelector("#search-expand");
searchExpand.addEventListener("focus", function () {
  var search = document.querySelector(".search");
  var searchIcon = document.querySelector(".search-icon");
  var cross = document.querySelector(".cross");
  cross.style.opacity = 1;
  searchIcon.classList.add("fedd");
  search.classList.add("strech");
});
var cross = document.querySelector(".cross");
cross.addEventListener("click", function () {
  var search = document.querySelector(".search");
  var searchIcon = document.querySelector(".search-icon");
  searchIcon.classList.remove("fedd");
  search.classList.remove("strech");
  cross.style.opacity = 0;
});

//category dropdown
var black = document.getElementsByClassName("sub-category-value");
var blogo = document.querySelectorAll("Blogo");
console.log(blogo[0]);
var subCategoryOption = document.querySelectorAll(".sub-category-option");
var arrow = document.querySelectorAll(".arrow");
var section = document.querySelectorAll("section");
var categoryExpand = document.querySelector(".category-expand");
var categoryExpandb = document.querySelector(".b");
function show(a) {
  if (a == 0) {
    section[Number(a) + 1].style.display = "none";
    section[Number(a)].style.display = "flex";
    arrow[Number(a) + 1].classList.remove("arrow-icon");
    black[Number(a)].classList.remove("black");
    black[Number(a)].classList.add("black");
    black[Number(a) + 1].classList.remove("black");
  }
  categoryExpand.style.display = "flex";
  arrow[+a].classList.add("arrow-icon");
  arrow[Number(a) + 1].classList.remove("arrow-icon");
  arrow[Number(a) - 1].classList.remove("arrow-icon");
  section[+a].style.display = "flex";
  section[Number(a) + 1].style.display = "none";
  section[Number(a) - 1].style.display = "none";
  black[+a].classList.add("black");
  black[Number(a) - 1].classList.remove("black");
  black[Number(a) + 1].classList.remove("black");
  blogo[Number(a) - 8].classList.add("showb");
  blogo[Number(a) + 1 - 8].classList.remove("showb");
  blogo[Number(a) - 1 - 8].classList.remove("showb");
}
function hide(a) {
  categoryExpand.style.display = "none";
}
//brand dropdown
function showb(a) {
  console.log(Number(a));
  if (a == 15) {
    section[Number(a)].style.display = "flex";
    section[Number(a) - 1].style.display = "none";
    arrow[Number(a) - 1].classList.remove("arrow-icon");
    black[Number(a)].classList.remove("black");
    black[Number(a)].classList.add("black");
    black[Number(a) - 1].classList.remove("black");
  }
  categoryExpandb.style.display = "flex";
  arrow[+a].classList.add("arrow-icon");
  arrow[Number(a) + 1].classList.remove("arrow-icon");
  arrow[Number(a) - 1].classList.remove("arrow-icon");
  section[+a].style.display = "flex";
  section[Number(a) + 1].style.display = "none";
  section[Number(a) - 1].style.display = "none";
  black[+a].classList.add("black");
  black[Number(a) - 1].classList.remove("black");
  black[Number(a) + 1].classList.remove("black");
  blogo[Number(a) - 8].classList.add("showb");
  blogo[Number(a) + 1 - 8].classList.remove("showb");
  blogo[Number(a) - 1 - 8].classList.remove("showb");
}
function hideb(a) {
  categoryExpandb.style.display = "none";
}

// login signup page

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

var loginData = localStorage.getItem("loginData");
if (loginData == null) {
  loginData = [];
  //sign up data store starts
  function register(e) {
    e.preventDefault();
    let signupform = document.querySelector("#signup-form");
    let name = signupform.name.value;
    let mail = signupform.mail.value;
    let pass = signupform.pass.value;
    let a = 1;

    let users = {
      name,
      mail,
      pass,
    };

    if (users.name.trim() == "") alert("Enter Your Name");
    else if (users.mail.indexOf("@") == -1)
      alert("Enter Your Correct E-mail ID");
    else if (users.pass == "") alert("Password should not be Empty!");
    else {
      let userData = localStorage.getItem("users");
      if (userData == null) {
        userData = [];
        //  userData.push(users);
      } else {
        userData = JSON.parse(userData);
        console.log(userData);
      }
      userData.forEach(function (e) {
        if (e.name == users.name && e.mail == users.mail) {
          alert("You are already part of our family");
          a = 0;
        }
      });
      if (a == 1) userData.push(users);

      localStorage.setItem("users", JSON.stringify(userData));
      signupform.name.value = "";
      signupform.mail.value = "";
      signupform.pass.value = "";
      container.classList.remove("right-panel-active");
    }
  }
  //sign up data store  ends

  //login authentication starts

  function login(e) {
    e.preventDefault();
    let loginForm = document.querySelector("#login-form");
    let email = loginForm.email.value;
    let passw = loginForm.passw.value;

    let users = {
      email,
      passw,
    };

    if (users.email.indexOf("@") == -1) alert("Enter Your Correct E-mail ID");
    else if (users.passw == "") alert("Password should not be Empty!");
    else {
      let userData = localStorage.getItem("users");
      if (userData == null) {
        alert("You are not registered!!");
        loginForm.email.value = "";
        loginForm.passw.value = "";
        container.classList.add("right-panel-active");
      } else {
        userData = JSON.parse(userData);
      }

      for (let i = 0; i < userData.length; i++) {
        if (
          userData[i].mail == users.email &&
          userData[i].pass == users.passw
        ) {
          clos();
          loginData.push(userData[i]);
          localStorage.setItem("loginData", JSON.stringify(loginData));
          document.querySelector(".sig").style.display = "none";
          document.querySelector(".accounts").style.display = "flex";
          document.querySelector(".register").style.display = "none";
          document.querySelector(".logout").style.display = "flex";
          // document.querySelector('.UserName').textContent = userData[i].name;
          location.reload();
        } else if (i == userData.length - 1) {
          alert("Invalid Credentials");
        }
      }
    }
  }
  //login authentication ends
  // signIn signup page render
  function ope() {
    var cover = document.querySelector(".cover");
    cover.style.display = "block";
  }
  function clos() {
    var cover = document.querySelector(".cover");
    cover.style.display = "none";
  }
} else {
  document.querySelector(".sig").style.display = "none";
  document.querySelector(".accounts").style.display = "flex";
  document.querySelector(".register").style.display = "none";
  document.querySelector(".logout").style.display = "flex";
  document.querySelector(".UserName").textContent =
    JSON.parse(loginData)[0].name;
}

function logout() {
  localStorage.removeItem("loginData");
  location.reload();
}

//mobile nav
var count  = 0;
document.querySelector('.ham').addEventListener('click',function(){
    if(count%2==0){
        document.querySelector('.mob-nav').style.opacity = 1
    document.querySelector('.header').style.height = '280'+'px'
    }
    else{
        document.querySelector('.mob-nav').style.opacity = 0 
    document.querySelector('.header').style.height = '60'+'px'
    }
    count++
})

window.addEventListener("resize", changequery);
function changequery() {
  location.reload()
}
let changeLayout = document.getElementById("gridLayout");
function changeGridColumn() {
  changeLayout.classList.toggle("listLayout");
  let productsFootwear = document.getElementById('products_footwear');
  productsFootwear.classList.toggle("narrow_products_footwear");
}


let collapsible = document.querySelectorAll('.expand');
let plus_sign = document.querySelectorAll(".plus_sign");
function collapse(a){
    if (a == 1) {
        collapsible[1].classList.toggle("brand_color_collapse");
        collapsible[0].classList.add("brand_color_collapse");
        plus_sign[1].classList.toggle("crossx");
        plus_sign[0].classList.remove("crossx");
    }
    else{
        collapsible[0].classList.toggle("brand_color_collapse");
        collapsible[1].classList.add("brand_color_collapse");
        plus_sign[0].classList.toggle("crossx");
        plus_sign[1].classList.remove("crossx");
    }
}


let shoesJSON = [
  {
    category: "Men",
    product_type: "Formal",
    brand: "Arrow",
    color: "Brown",
    price: "3799",
    discounted_price: "2469",
    description: "Arrow Longs 2.0 Tan Derby Shoes",
    rating: "4.1",
    image: "images/shoes-10.jpeg",
    dicount_offer: "45% off",
    image1: "images/prodInfo/shoesjson1/large/shoe1.jpeg",
    image2: "images/prodInfo/shoesjson1/large/shoe2.jpeg",
    image3: "images/prodInfo/shoesjson1/large/shoe3.jpeg",
    image4: "images/prodInfo/shoesjson1/large/shoe4.jpeg",
    image5: "images/prodInfo/shoesjson1/large/shoe5.jpeg",
    smallimage1: "images/prodInfo/shoesjson1/small/smallshoe1.jpeg",
    smallimage2: "images/prodInfo/shoesjson1/small/smallshoe2.jpeg",
    smallimage3: "images/prodInfo/shoesjson1/small/smallshoe3.jpeg",
    smallimage4: "images/prodInfo/shoesjson1/small/smallshoe4.jpeg",
    smallimage5: "images/prodInfo/shoesjson1/small/smallshoe5.jpeg",
  },
  {
    category: "Men",
    product_type: "Formal",
    brand: "Ruosh",
    color: "Black",
    price: "3999",
    discounted_price: "2393",
    description: "Ruosh Black Formal Loafers",
    rating: "3.8",
    image: "images/shoes-6.jpeg",
    dicount_offer: "45% off",
    image1: "images/prodInfo/shoesjson2/large/shoe1.jpeg",
    image2: "images/prodInfo/shoesjson2/large/shoe2.jpeg",
    image3: "images/prodInfo/shoesjson2/large/shoe3.jpeg",
    image4: "images/prodInfo/shoesjson2/large/shoe4.jpeg",
    image5: "images/prodInfo/shoesjson2/large/shoe5.jpeg",
    smallimage1: "images/prodInfo/shoesjson2/small/smallshoe1.jpeg",
    smallimage2: "images/prodInfo/shoesjson2/small/smallshoe2.jpeg",
    smallimage3: "images/prodInfo/shoesjson2/small/smallshoe3.jpeg",
    smallimage4: "images/prodInfo/shoesjson2/small/smallshoe4.jpeg",
    smallimage5: "images/prodInfo/shoesjson2/small/smallshoe5.jpeg",
  },
  {
    category: "Men",
    product_type: "Formal",
    brand: "Arrow",
    color: "Brown",
    price: "3599",
    discounted_price: "2579",
    description: "Arrow Baldwin Tan Brogue Shoes",
    rating: "4.2",
    image: "images/shoes-1.jpeg",
    dicount_offer: "40% off",
    image1: "images/prodInfo/shoesjson3/large/shoe1.jpeg",
    image2: "images/prodInfo/shoesjson3/large/shoe2.jpeg",
    image3: "images/prodInfo/shoesjson3/large/shoe3.jpeg",
    image4: "images/prodInfo/shoesjson3/large/shoe4.jpeg",
    image5: "images/prodInfo/shoesjson3/large/shoe5.jpeg",
    smallimage1: "images/prodInfo/shoesjson3/small/smallshoe1.jpeg",
    smallimage2: "images/prodInfo/shoesjson3/small/smallshoe2.jpeg",
    smallimage3: "images/prodInfo/shoesjson3/small/smallshoe3.jpeg",
    smallimage4: "images/prodInfo/shoesjson3/small/smallshoe4.jpeg",
    smallimage5: "images/prodInfo/shoesjson3/small/smallshoe5.jpeg",
  },
  {
    category: "Men",
    product_type: "Formal",
    brand: "Arrow",
    color: "Black",
    price: "3999",
    discounted_price: "2199",
    description: "Arrow Carter Black Derby Shoes",
    rating: "4.8",
    image: "images/shoes-3.jpeg",
    dicount_offer: "50% off",
    image1: "images/prodInfo/shoesjson4/large/shoe1.jpeg",
    image2: "images/prodInfo/shoesjson4/large/shoe2.jpeg",
    image3: "images/prodInfo/shoesjson4/large/shoe3.jpeg",
    image4: "images/prodInfo/shoesjson4/large/shoe4.jpeg",
    image5: "images/prodInfo/shoesjson4/large/shoe5.jpeg",
    smallimage1: "images/prodInfo/shoesjson4/small/smallshoe1.jpeg",
    smallimage2: "images/prodInfo/shoesjson4/small/smallshoe2.jpeg",
    smallimage3: "images/prodInfo/shoesjson4/small/smallshoe3.jpeg",
    smallimage4: "images/prodInfo/shoesjson4/small/smallshoe4.jpeg",
    smallimage5: "images/prodInfo/shoesjson4/small/smallshoe5.jpeg",
  },
  {
    category: "Men",
    product_type: "Formal",
    brand: "Ruosh",
    color: "Brown",
    price: "5990",
    discounted_price: "3593",
    description: "Ruosh King Brown Monk Shoes",
    rating: "3.3",
    image: "images/shoes-8.jpeg",
    dicount_offer: "35% off",
    image1: "images/prodInfo/shoesjson5/large/shoe1.jpeg",
    image2: "images/prodInfo/shoesjson5/large/shoe2.jpeg",
    image3: "images/prodInfo/shoesjson5/large/shoe3.jpeg",
    image4: "images/prodInfo/shoesjson5/large/shoe4.jpeg",
    image5: "images/prodInfo/shoesjson5/large/shoe5.jpeg",
    smallimage1: "images/prodInfo/shoesjson5/small/smallshoe1.jpeg",
    smallimage2: "images/prodInfo/shoesjson5/small/smallshoe2.jpeg",
    smallimage3: "images/prodInfo/shoesjson5/small/smallshoe3.jpeg",
    smallimage4: "images/prodInfo/shoesjson5/small/smallshoe4.jpeg",
    smallimage5: "images/prodInfo/shoesjson5/small/smallshoe5.jpeg",
  },
  {
    category: "Men",
    product_type: "Formal",
    brand: "Arrow",
    color: "Brown",
    price: "5999",
    discounted_price: "3299",
    description: "Arrow Porter Tan Derby Shoes",
    rating: "4",
    image: "images/shoes-4.jpeg",
    dicount_offer: "40% off",
    image1: "images/prodInfo/shoesjson6/large/shoe1.jpeg",
    image2: "images/prodInfo/shoesjson6/large/shoe2.jpeg",
    image3: "images/prodInfo/shoesjson6/large/shoe3.jpeg",
    image4: "images/prodInfo/shoesjson6/large/shoe4.jpeg",
    image5: "images/prodInfo/shoesjson6/large/shoe5.jpeg",
    smallimage1: "images/prodInfo/shoesjson6/small/smallshoe1.jpeg",
    smallimage2: "images/prodInfo/shoesjson6/small/smallshoe2.jpeg",
    smallimage3: "images/prodInfo/shoesjson6/small/smallshoe3.jpeg",
    smallimage4: "images/prodInfo/shoesjson6/small/smallshoe4.jpeg",
    smallimage5: "images/prodInfo/shoesjson6/small/smallshoe5.jpeg",
  },
  {
    category: "Men",
    product_type: "Formal",
    brand: "Arrow",
    color: "Black",
    price: "5999",
    discounted_price: "3299",
    description: "Arrow Grisham Black Oxford Shoes",
    rating: "4",
    image: "images/shoes-12.jpeg",
    dicount_offer: "50% off",
    image1: "images/prodInfo/shoesjson7/large/shoe1.jpeg",
    image2: "images/prodInfo/shoesjson7/large/shoe2.jpeg",
    image3: "images/prodInfo/shoesjson7/large/shoe3.jpeg",
    image4: "images/prodInfo/shoesjson7/large/shoe4.jpeg",
    image5: "images/prodInfo/shoesjson7/large/shoe5.jpeg",
    smallimage1: "images/prodInfo/shoesjson7/small/smallshoe1.jpeg",
    smallimage2: "images/prodInfo/shoesjson7/small/smallshoe2.jpeg",
    smallimage3: "images/prodInfo/shoesjson7/small/smallshoe3.jpeg",
    smallimage4: "images/prodInfo/shoesjson7/small/smallshoe4.jpeg",
    smallimage5: "images/prodInfo/shoesjson7/small/smallshoe5.jpeg",
  },
  {
    category: "Men",
    product_type: "Formal",
    brand: "Ruosh",
    color: "Black",
    price: "5999",
    discounted_price: "2949",
    description: "Ruosh Onyx Black Shoes",
    rating: "5",
    image: "images/shoes-7.jpeg",
    dicount_offer: "30% off",
    image1: "images/prodInfo/shoesjson8/large/shoe1.jpeg",
    image2: "images/prodInfo/shoesjson8/large/shoe2.jpeg",
    image3: "images/prodInfo/shoesjson8/large/shoe3.jpeg",
    image4: "images/prodInfo/shoesjson8/large/shoe4.jpeg",
    image5: "images/prodInfo/shoesjson8/large/shoe5.jpeg",
    smallimage1: "images/prodInfo/shoesjson8/small/smallshoe1.jpeg",
    smallimage2: "images/prodInfo/shoesjson8/small/smallshoe2.jpeg",
    smallimage3: "images/prodInfo/shoesjson8/small/smallshoe3.jpeg",
    smallimage4: "images/prodInfo/shoesjson8/small/smallshoe4.jpeg",
    smallimage5: "images/prodInfo/shoesjson8/small/smallshoe5.jpeg",
  },
  {
    category: "Men",
    product_type: "Formal",
    brand: "Arrow",
    color: "Black",
    price: "4999",
    discounted_price: "2749",
    description: "Arrow Winfrey Black Derby Shoes",
    rating: "4.3",
    image: "images/shoes-5.jpeg",
    dicount_offer: "35% off",
    image1: "images/prodInfo/shoesjson9/large/shoe1.jpeg",
    image2: "images/prodInfo/shoesjson9/large/shoe2.jpeg",
    image3: "images/prodInfo/shoesjson9/large/shoe3.jpeg",
    image4: "images/prodInfo/shoesjson9/large/shoe4.jpeg",
    image5: "images/prodInfo/shoesjson9/large/shoe5.jpeg",
    smallimage1: "images/prodInfo/shoesjson9/small/smallshoe1.jpeg",
    smallimage2: "images/prodInfo/shoesjson9/small/smallshoe2.jpeg",
    smallimage3: "images/prodInfo/shoesjson9/small/smallshoe3.jpeg",
    smallimage4: "images/prodInfo/shoesjson9/small/smallshoe4.jpeg",
    smallimage5: "images/prodInfo/shoesjson9/small/smallshoe5.jpeg",
  },
  {
    category: "Men",
    product_type: "Formal",
    brand: "Arrow",
    color: "Black",
    price: "4599",
    discounted_price: "2989",
    description: "Arrow Cassius 2.0 Black Oxford Shoes",
    rating: "2.2",
    image: "images/shoes-9.jpeg",
    dicount_offer: "50% off",
    image1: "images/prodInfo/shoesjson10/large/shoe1.jpeg",
    image2: "images/prodInfo/shoesjson10/large/shoe2.jpeg",
    image3: "images/prodInfo/shoesjson10/large/shoe3.jpeg",
    image4: "images/prodInfo/shoesjson10/large/shoe4.jpeg",
    image5: "images/prodInfo/shoesjson10/large/shoe5.jpeg",
    smallimage1: "images/prodInfo/shoesjson10/small/smallshoe1.jpeg",
    smallimage2: "images/prodInfo/shoesjson10/small/smallshoe2.jpeg",
    smallimage3: "images/prodInfo/shoesjson10/small/smallshoe3.jpeg",
    smallimage4: "images/prodInfo/shoesjson10/small/smallshoe4.jpeg",
    smallimage5: "images/prodInfo/shoesjson10/small/smallshoe5.jpeg",
  },
  {
    category: "Men",
    product_type: "Formal",
    brand: "Ruosh",
    color: "Brown",
    price: "3999",
    discounted_price: "2599",
    description: "Ruosh Everly Brogue Shoes",
    rating: "4",
    image: "images/shoes-2.jpeg",
    dicount_offer: "40% off",
    image1: "images/prodInfo/shoesjson11/large/shoe1.jpeg",
    image2: "images/prodInfo/shoesjson11/large/shoe2.jpeg",
    image3: "images/prodInfo/shoesjson11/large/shoe3.jpeg",
    image4: "images/prodInfo/shoesjson11/large/shoe4.jpeg",
    image5: "images/prodInfo/shoesjson11/large/shoe5.jpeg",
    smallimage1: "images/prodInfo/shoesjson11/small/smallshoe1.jpeg",
    smallimage2: "images/prodInfo/shoesjson11/small/smallshoe2.jpeg",
    smallimage3: "images/prodInfo/shoesjson11/small/smallshoe3.jpeg",
    smallimage4: "images/prodInfo/shoesjson11/small/smallshoe4.jpeg",
    smallimage5: "images/prodInfo/shoesjson11/small/smallshoe5.jpeg",
  },
  {
    category: "Men",
    product_type: "Formal",
    brand: "Ruosh",
    color: "Black",
    price: "3999",
    discounted_price: "2599",
    description: "Ruosh Saltz Derby Shoes",
    rating: "4",
    image: "images/shoes-11.jpeg",
    dicount_offer: "45% off",
    image1: "images/prodInfo/shoesjson12/large/shoe1.jpeg",
    image2: "images/prodInfo/shoesjson12/large/shoe2.jpeg",
    image3: "images/prodInfo/shoesjson12/large/shoe3.jpeg",
    image4: "images/prodInfo/shoesjson12/large/shoe4.jpeg",
    image5: "images/prodInfo/shoesjson12/large/shoe5.jpeg",
    smallimage1: "images/prodInfo/shoesjson12/small/smallshoe1.jpeg",
    smallimage2: "images/prodInfo/shoesjson12/small/smallshoe2.jpeg",
    smallimage3: "images/prodInfo/shoesjson12/small/smallshoe3.jpeg",
    smallimage4: "images/prodInfo/shoesjson12/small/smallshoe4.jpeg",
    smallimage5: "images/prodInfo/shoesjson12/small/smallshoe5.jpeg",
  },
];

let shoes = document.getElementById("products_footwear");

function productFilter(json){
shoes.innerHTML = null;

json.forEach(function(ele){
    let div = document.createElement("figure");
    div.innerHTML = `<img class="card-img" src=${ele.image} alt="Shoes">
                     <div class="discountArrow" style="background-image: url(https://www.tatacliq.com/src/general/components/img/offer.95df93e33aa2.svg);">${ele.dicount_offer}</div>
                     <div id="prodName">
                         <h4>${ele.brand}</h4>
                         <div id="wishlistIcon"><img src="https://www.tatacliq.com/src/wishlist/components/img/wishlist_unfilled.08f94e93a491.svg" alt=""></div>
                     </div>
                     <p>${ele.description}</p>
                     <p>&#8377 ${ele.discounted_price} &nbsp;<span>&#8377 ${ele.price}</span></p>
                     <div id="rating">${ele.rating} &#9733</div>`;

                     div.onclick = function () {
                       let selectedProduct = localStorage.getItem("selectedProduct");
                       if (selectedProduct == null) {
                         selectedProduct = [];
                         selectedProduct.push(ele);
                         localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
                         console.log(ele);
                       }
                       else{
                         localStorage.removeItem("selectedProduct");
                         selectedProduct = [];
                         selectedProduct.push(ele);
                         localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
                         console.log(ele);
                       }
                      //  window.location.href = "prodInfo.html";
                      window.open('prodInfo.html','_blank')
                     }
    shoes.append(div);
})
}
productFilter(shoesJSON);


//Update Number of Products Heading Starts
document.body.onkeydown = function numprod(){
    let numOfProd = document.getElementById("noOfProd");
    let noOfProd = document.querySelectorAll("figure");
    numOfProd.innerText = noOfProd.length + " Products";
}
//Update Number of Products Heading Starts


//Product Filter Starts
let idBlack = 0;
function black_shoes() {
  idBlack++
  if (idBlack % 2 != 0) {
    let filterChecked = document.querySelectorAll('input[name="color"]:checked');
    console.log(filterChecked);
    if (filterChecked[0].value == "Black") {
      let filteredProduct = shoesJSON.filter(function (a) {
        return a.color == "Black";
      });
      productFilter(filteredProduct);
      
    }
  } else {
    productFilter(shoesJSON);
  }
}
//Product Filter End


//Search Box Start
var inputKey = "";
function searchProd(e) {
  if (e.key.length == 1) {
    inputKey += e.key;
    console.log(inputKey);
    let searchedProduct = shoesJSON.filter(function (s) {
      return s.description.indexOf(inputKey) > -1;
    });
    productFilter(searchedProduct);
  } else if (e.key.length == 9) {
    inputKey = inputKey.split("");
    inputKey.pop();
    inputKey = inputKey.join("");
    let searchedProduct = shoesJSON.filter(function (s) {
      return s.description.indexOf(inputKey) > -1;
    });
    productFilter(searchedProduct);
  }
}
//Search Box End

//Product Sorting Start
let selectedField = document.getElementById("selectedField");
let selectedText = document.getElementById("selectedText");
let options = document.getElementsByClassName("options");
let list = document.getElementById("lists");

selectedField.onclick = function () {
  list.classList.toggle("hideList");
};

for (element of options) {
  element.onclick = function () {
    selectedText.innerHTML = this.textContent;
    // list.classList.toggle("hideList");
  };
}

//Popularity
options[0].onclick = function() {
  shoesJSON = shoesJSON.sort(function(a,b) {
    return b.rating - a.rating;
  })
  productFilter(shoesJSON);
  selectedText.innerHTML = this.textContent;
  list.classList.toggle("hideList");
}

//Price Low TO High
options[1].onclick = function () {
  shoesJSON = shoesJSON.sort(function (a, b) {
    return a.discounted_price - b.discounted_price;
  });
  productFilter(shoesJSON);
  selectedText.innerHTML = this.textContent;
  list.classList.toggle("hideList");
};

//Price High to Low
options[2].onclick = function () {
  shoesJSON = shoesJSON.sort(function (a, b) {
    return b.discounted_price - a.discounted_price;
  });
  productFilter(shoesJSON);
  selectedText.innerHTML = this.textContent;
  list.classList.toggle("hideList");
};
//Product Sorting End


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
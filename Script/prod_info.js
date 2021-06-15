let selectedProduct = localStorage.getItem("selectedProduct");
selectedProduct = JSON.parse(selectedProduct);
console.log(selectedProduct[0]);

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
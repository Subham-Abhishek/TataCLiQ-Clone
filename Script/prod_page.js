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
        plus_sign[1].classList.toggle("cross");
        plus_sign[0].classList.remove("cross");
    }
    else{
        collapsible[0].classList.toggle("brand_color_collapse");
        collapsible[1].classList.add("brand_color_collapse");
        plus_sign[0].classList.toggle("cross");
        plus_sign[1].classList.remove("cross");
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
  },
  {
    category: "Men",
    product_type: "Formal",
    brand: "Arrow",
    color: "Brown",
    price: "3599",
    discounted_price: "1979",
    description: "Arrow Baldwin Tan Brogue Shoes",
    rating: "4.2",
    image: "images/shoes-1.jpeg",
    dicount_offer: "40% off",
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
  },
];

let shoes = document.getElementById("products_footwear")

function productFilter(json){
shoes.innerHTML = null;
json.forEach(function(ele){
    let div = document.createElement("figure");
    div.innerHTML = `<img src=${ele.image} alt="Shoes">
                     <div class="discountArrow" style="background-image: url(https://www.tatacliq.com/src/general/components/img/offer.95df93e33aa2.svg);">${ele.dicount_offer}</div>
                     <div id="prodName">
                         <h4>${ele.brand}</h4>
                         <div id="wishlistIcon"><img src="https://www.tatacliq.com/src/wishlist/components/img/wishlist_unfilled.08f94e93a491.svg" alt=""></div>
                     </div>
                     <p>${ele.description}</p>
                     <p>&#8377 ${ele.discounted_price} &nbsp;<span>&#8377 ${ele.price}</span></p>
                     <div id="rating">${ele.rating} &#9733</div>`;
    shoes.append(div);
})
}

productFilter(shoesJSON);

function black_shoes() {
  let filterChecked = document.querySelectorAll('input[name="color"]:checked');
  console.log(filterChecked);
  if (filterChecked[0].value == "Black") {
    let filteredProduct = shoesJSON.filter(function (a) {
      return (a.color == "Black");
    });
    productFilter(filteredProduct);
  }
}


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

options[0].onclick = function() {
  shoesJSON = shoesJSON.sort(function(a,b) {
    return b.rating - a.rating;
  })
  productFilter(shoesJSON);
  selectedText.innerHTML = this.textContent;
  list.classList.toggle("hideList");
}

options[1].onclick = function () {
  shoesJSON = shoesJSON.sort(function (a, b) {
    return a.discounted_price - b.discounted_price;
  });
  productFilter(shoesJSON);
  selectedText.innerHTML = this.textContent;
  list.classList.toggle("hideList");
};

options[2].onclick = function () {
  shoesJSON = shoesJSON.sort(function (a, b) {
    return b.discounted_price - a.discounted_price;
  });
  productFilter(shoesJSON);
  selectedText.innerHTML = this.textContent;
  list.classList.toggle("hideList");
};
var data = JSON.parse(localStorage.getItem('address'))
var data1 = JSON.parse(localStorage.getItem('bagItem'))
var priceobj = JSON.parse(localStorage.getItem('priceobj'))
console.log(data1);
document.querySelector('.ad').innerHTML = data.addresss;
document.querySelector('.ci').innerHTML = data.city;
document.querySelector('.st').innerHTML = data.stare;
document.querySelector('.pi').innerHTML = data.pin;
document.querySelector('.ph').innerHTML = data.phone;

document.querySelectorAll('.total')[0].innerHTML = priceobj.tprice;
document.querySelectorAll('.total')[1].innerHTML = priceobj.tprice;
document.querySelector('#dif').innerHTML = (priceobj.dvalue);
document.getElementById('tott').innerHTML = priceobj.dprice
document.querySelector('#f2').innerHTML = priceobj.dvalue

var f = document.querySelector('#push')
for (let i = 0; i < data1.length; i++) {
   var div  = document.createElement('div')
   if(i==0){
       div.classList.add('margin')
   }
   div.innerHTML = `<p>${data1[i].description}: <p class="dark">Delivery by 2nd Jul</p></p>`
    f.append(div)
}
function send(){
    document.querySelector('.ani').style.display = 'block'
    setTimeout(() => {
        window.location.href = "success.html"
    }, 1500);

    localStorage.removeItem('bagItem')

}

var login = JSON.parse(localStorage.getItem('loginData'))[0]
console.log(login);
document.querySelector('.UserName').innerHTML = login.name

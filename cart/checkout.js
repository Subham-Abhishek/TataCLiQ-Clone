var priceobj = JSON.parse(localStorage.getItem('priceobj'));

document.querySelectorAll('.total')[0].innerHTML = priceobj.tprice;
document.querySelectorAll('.total')[1].innerHTML = priceobj.tprice;
document.querySelector('#dif').innerHTML = (priceobj.dvalue);
document.getElementById('tott').innerHTML = priceobj.dprice
document.querySelector('#f2').innerHTML = priceobj.dvalue


function send(){
    var address = {
        addresss: document.querySelector('.adde').value,
        city: document.querySelector('.city').value,
        stare: document.querySelector('.state').value,
        pin: document.querySelector('.pin').value,
        phone: document.querySelector('.ph-no').value
     }
     localStorage.setItem('address',JSON.stringify(address))
     window.location.href = "payment.html"
}
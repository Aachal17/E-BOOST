const toggler = document.querySelector(".toggler");
const basicPrice = document.getElementById("basic-price");
const standardPrice = document.getElementById("standard-price");
const proPrice = document.getElementById("pro-price");
const ultraPrice = document.getElementById("ultra-pro-price");

toggler.addEventListener("change", ()=>{
    if(toggler.checked){
        basicPrice.innerHTML = "<b>$2</b><small>/mo</small>";
        standardPrice.innerHTML = "<b>$4</b><small>/mo</small>";
        proPrice.innerHTML = "<b>$6</b><small>/mo</small>";
        ultraPrice.innerHTML = "<b>$8</b><small>/mo</small>";
    }
    else{
        basicPrice.innerHTML = "<b>$25</b><small>/year</small>";
        standardPrice.innerHTML = "<b>$50</b><small>/year</small>";
        proPrice.innerHTML = "<b>$75</b><small>/year</small>";
        ultraPrice.innerHTML = "<b>$100</b><small>/year</small>";
    }
})



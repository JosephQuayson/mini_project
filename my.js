let myCartPage = () => {
    document.getElementById("cart-page").style.display = "block";
}


let myClose = () => {
    document.getElementById("cart-page").style.display = "none";
}


checkOut = () => {
    window.location = 'cart.html'
}
let update_btn = () => {
    let up = document.getElementById("update").value;
    document.getElementById("name_quant").innerHTML = up;

}


let delete_btn = () => {
    let del = document.getElementById("money");
    del.remove();

    let del1 = document.getElementById("name_quant");
    del1.remove();
}



let cost_button = () => {
    let cost = document.getElementById("total-cost").value;
    total = cost * 98.5;
    document.getElementById("costAdd").innerHTML = total;

}
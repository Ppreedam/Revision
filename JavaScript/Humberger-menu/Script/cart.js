
let cart_total = document.getElementById("cart-total")
let cupon_filled = document.getElementById('cupon-filled')
let cupon_active = document.getElementById('cupon-active')

var Total_price = 0
var data = JSON.parse(localStorage.getItem("cartitem")) || [];
var container = document.querySelector(".container");

data.map((item) => {
    
    var product_quantity = 1;

    var box = document.createElement("div")
    box.setAttribute("id", "box")
    var image = document.createElement("img")
    image.setAttribute("id", "imagestyle")
    image.src = item.thumbnail
    var title = document.createElement("h3")
    title.innerText = item.title
    var category = document.createElement("p");
    category.textContent = `Category:-${item.category}`;
    var brand = document.createElement("p");
    brand.textContent = `Brand:-${item.brand}`;
    var price = document.createElement("h4");
    price.textContent = `Price:-${item.price}`;
    price.setAttribute("class", "discount")
    console.log(item.quantity)
    var totalprice = document.createElement("h4");
    // totalprice.textContent = `totalprice:-${item.price}`;
    totalprice.setAttribute("class", "discount")

    var inputvalue = document.createElement("button");
    inputvalue.textContent = product_quantity
    inputvalue.setAttribute("id", "textbox")

    Total_price+=Number(item.price);
    cart_total.innerText = Total_price

    var inc_button = document.createElement("button");
    inc_button.textContent = "+"
    inc_button.addEventListener("click", () => {
        product_quantity = product_quantity + 1
        price = item.price * product_quantity
        totalprice.textContent = `totalprice:-${price}`
        Total_price += item.price
        cart_total.innerText = Total_price
        
        inputvalue.textContent = product_quantity
    })


    var dec_button = document.createElement("button");
    dec_button.textContent = "-"
    var incdecbox = document.createElement("div");
    incdecbox.append(inc_button, inputvalue, dec_button);

    dec_button.addEventListener('click', () => {
        if (product_quantity == 1) {
            product_quantity = 1
            inputvalue.textContent = product_quantity
            // Total_price -= Number(item.price)
            cart_total.innerText = Total_price
            price = item.price * product_quantity
        totalprice.textContent = `totalprice:-${price}`
        }
        else {
            product_quantity = product_quantity - 1
            inputvalue.textContent = product_quantity
            Total_price -= Number(item.price)

            cart_total.innerText = Total_price
            price = item.price * product_quantity
        totalprice.textContent = `totalprice:-${price}`
        }



    })


    var checkout = document.createElement("button");
    checkout.innerText = "Checkout"
    checkout.addEventListener("click", function () {
        AddtoCart(item)

    })
    checkout.setAttribute("class", "checkout")

    var deleteitem = document.createElement("button");
    deleteitem.innerText = "Delete"
    deleteitem.addEventListener("click", function () {
        data.splice(index, 1)
        console.log(data)
        localStorage.setItem("cartitem", JSON.stringify(data))
        window.location.reload();
    })
    deleteitem.setAttribute("class", "checkout")
    box.append(image, title, category, brand, price, totalprice, incdecbox, checkout, deleteitem)
    container.append(box)

});
var arr1 = []
const AddtoCart = (data) => {
    arr1.push(data)
    localStorage.setItem("singlecartitem", JSON.stringify(arr1))
    // window.location.href("./cart.html")
    location.replace("./product.html")
}

var count=0;
  cupon_active.addEventListener('click' , () => {
    if(cupon_filled.value === "masai30" && count==0) {
      Total_price = Total_price - Math.floor(Total_price*0.3)

      cart_total.innerText = Total_price
      count++
      
    }
  })
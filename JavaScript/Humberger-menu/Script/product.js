var data = JSON.parse(localStorage.getItem("singlecartitem")) || [];
var container = document.querySelector(".container");
data.map((item)=>{
    var box = document.createElement("div")
    box.setAttribute("id","box")
    var image = document.createElement("img")
    image.setAttribute("id","imagestyle")
    image.src=item.thumbnail
    var title = document.createElement("h3")
    title.innerText=item.title
    var category = document.createElement("p");
    category.textContent=`Category:-${item.category}`;
    var brand = document.createElement("p");
    brand.textContent=`Brand:-${item.brand}`;
    var price = document.createElement("h4");
    price.textContent=`Price:-${item.price}`;
    price.setAttribute("class","discount")
    var checkout =document.createElement("button");
    checkout.innerText="Checkout"
    checkout.addEventListener("click",function(){
        AddtoCart(item)
    })
    checkout.setAttribute("class","checkout")
    var Addcart =document.createElement("button");
    Addcart.innerText="AddCart"
    Addcart.addEventListener("click",function(){
        deletitem(item)
    })
    Addcart.setAttribute("class","checkout")
    box.append(image,title,category,brand,price,checkout,Addcart)
    container.append(box)

});

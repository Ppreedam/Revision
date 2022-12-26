var data = JSON.parse(localStorage.getItem("cartitem")) || [];
var container = document.querySelector(".container");
data.map((item,index)=>{
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

    var deleteitem =document.createElement("button");
    deleteitem.innerText="Delete"
    deleteitem.addEventListener("click",function(){
        data.splice(index,1)
        console.log(data)
        localStorage.setItem("cartitem",JSON.stringify(data))
        window.location.reload();
    })
    deleteitem.setAttribute("class","checkout")
    box.append(image,title,category,brand,price,checkout,deleteitem)
    container.append(box)

});
var arr1=[]
const AddtoCart = (data)=>{
    arr1.push(data)
    localStorage.setItem("singlecartitem",JSON.stringify(arr1))
    // window.location.href("./cart.html")
    location.replace("./product.html")
}
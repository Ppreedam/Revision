var y=[]

fetch("https://miniecommerce-api.onrender.com/products")
// const fetchData =(limit,skip)=>{
    // fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
    .then((res)=>res.json())
    .then((res)=>{
         getData(res),
        y=res
    })
    .catch((err)=>console.log(err));
// }
// fetchData(12,24)

function handlevalue(value){
    const data=y.filter((item)=>{
       return item.category==value
    });
    if(data==''){
        getData(y)
    }
    else{
       getData(data)
    }
}

function handlevalueByBrand(value)
{
    // console.log(value)
    const data=y.filter((item)=>{
        return item.brand==value
     });
     if(data==''){
         getData(y)
     }
     else{
        getData(data)
     }
}

function handlesort(value){
    console.log(value)
    if(value==="asc"){
        let z=y.sort((a,b)=>{
            return a.price-b.price
        })
        getData(z)
    }
    else if(value==="desc"){
        let x=y.sort((a,b)=>{
            return b.price-a.price
        })
        getData(x)
    }
}

function handlesortByalpha(value){
    if(value==="asc"){
        let x=y.sort((a,b)=>{
            if(a.title<b.title){
                return -1
            }
        })
        getData(x)
    }
    if(value ==="desc"){
        let z=y.sort((a,b)=>{
            if(b.title<a.title){
                return -1
            }
        })
        getData(z)
    }
}



function getData(data) {
    console.log(data)
    var container = document.querySelector(".container");
container.innerHTML=''
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
            SinglePage(item)
        })
        checkout.setAttribute("class","checkout")
        var Addcart =document.createElement("button");
        Addcart.innerText="AddCart"
        Addcart.addEventListener("click",function(){
            AddtoCart(item)
        })
        Addcart.setAttribute("class","checkout")
        box.append(image,title,category,brand,price,checkout,Addcart)
        container.append(box)
        
    })
}
var arr = JSON.parse(localStorage.getItem("cartitem")) || [];
var arr1=[]
const SinglePage = (data)=>{
    arr1.push(data)
    localStorage.setItem("singlecartitem",JSON.stringify(arr1))
    // window.location.href("./cart.html")
    location.replace("./product.html")
}

const AddtoCart =(data)=>{
    // console.log(data)
    arr.push(data)
    localStorage.setItem("cartitem",JSON.stringify(arr))
    alert("Item Add Successful")
}
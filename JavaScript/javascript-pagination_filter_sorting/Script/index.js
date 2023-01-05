
var y=[]
fetch(`https://dummyjson.com/products?limit=${100}&skip=${0}`)
.then(res=>res.json())
.then(res=>{
    getdata(res.products)
    y=res.products
})
.catch(err=>console.log(err))



document.querySelector("#category").addEventListener("change",hamdlechange);

function hamdlechange(e){
    // console.log(e.target.value)
    // console.log(y)
    const filterdata=y.filter((item)=>{
        return item.category==e.target.value
    })
    console.log(filterdata)
    getdata(filterdata)
}
document.querySelector("#sort").addEventListener("change",handlesort);

function handlesort(e){
    if(e.target.value=="asc"){
        const sortdata1=y.sort((a,b)=>{
            return a.price-b.price
        })
        getdata(sortdata1)
    }
    else if(e.target.value="desc"){
        const sortdata2=y.sort((a,b)=>{
            return b.price-a.price
        })
        getdata(sortdata2)
    }
    console.log(e.target.value)
}



function handlesortbyalpha(e){
    console.log(e.target.value)
    if(e.target.value==="asc"){
        const atozdata=y.sort((a,b)=>{
            if(a.title<b.title){
                return -1
            }
        })
        getdata(atozdata)
    }
    else if(e.target.value==="desc"){
        const atozdata1=y.sort((a,b)=>{
            if(b.title<a.title){
                return -1
            }
        })
        getdata(atozdata1)
    }
}
document.querySelector("#sortbyalpha").addEventListener("change",handlesortbyalpha);


const getdata =(data)=>{
    var container=document.querySelector(".container");
    container.innerHTML=""
    data.map((item)=>{
        // console.log(item)
        var image=document.createElement("img")
        image.src=item.thumbnail
        image.setAttribute("class","thumbnail")
        var box=document.createElement("div");
        box.setAttribute("class","containerbox")
        var title = document.createElement("h3")
        title.innerText=`Title-${item.title}`
        var brand = document.createElement("p")
        brand.innerText=`Brand-${item.brand}`
        var category = document.createElement("p")
        category.innerText=`Category-${item.category}`
        var price = document.createElement("p")
        price.innerText=`Price-₹${item.price}`
        var addcart = document.createElement("button")
        addcart.innerText="AddCart"
        addcart.addEventListener("click",function(){
            addtocart(item)
        })
        var checkout = document.createElement("button")
        checkout.innerText="CheckOut"
        checkout.addEventListener("click",function(){
            redirectpage(item)
        })
        box.append(image,title,brand,category,price,addcart,checkout);
        container.append(box)
    })
    
}
var arr=JSON.parse(localStorage.getItem("cart")) || [];

const addtocart =(data)=>{
    // console.log(data)
    arr.push(data)
    localStorage.setItem("cart",JSON.stringify(arr))
    alert("Item Added Successful")
}

var arr1=[]
function redirectpage(item){
 arr1.push(item);
 localStorage.setItem("checkout",JSON.stringify(arr1))
 window.location.href="Single.html"
}
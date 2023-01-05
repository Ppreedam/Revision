
document.getElementById("submit").addEventListener("click", Addtodo);

// Post Data
function Addtodo() {
    var todovalue = document.getElementById("inputtodo").value;

    const obj = {
        name: todovalue
    }
    console.log(obj)
    fetch("https://miniecommerce-api.onrender.com/Data", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "content-type": "application/json; charset=utf-8"
        }
    })
    window.alert("Data Added")
}

// get Data

fetch("https://miniecommerce-api.onrender.com/Data")
    .then((res) => res.json())
    .then((res) => {

        getdata(res)
    }).catch((err) => console.log(err))

// Display Data
const getdata = (data) => {
    var container = document.querySelector(".container")
    container.innerText = ""
    data.map((item) => {
        var box = document.createElement("div")
        box.setAttribute("class", "display-flex")
        var name = document.createElement("p")
        var delet = document.createElement("button")
        var edit = document.createElement("button")
        edit.textContent="Edit"
        edit.addEventListener("click",function(){
            UpdateData(item)
        })
        delet.innerText = "Delet";
        delet.addEventListener("click", function () {
            itemdeleted(item.id)
        })
        name.innerText = item.name
        box.append(name, delet,edit)
        container.append(box)
    })

}

// delet Item
function itemdeleted(id) {
    
    fetch(`https://miniecommerce-api.onrender.com/Data/${id}`, {

        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    }).then((res) => res.json())
        .then((res) => console.log(res))
    alert("Data Deleted")

}

// update data
var arr=[];
const UpdateData=(item)=>{
    console.log(item)
    arr.push(item)
    localStorage.setItem("todoid",JSON.stringify(arr))
    window.location.href="Edit.html"
}

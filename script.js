

//<<<<<<<<<<<<<<<<<<<READ The data>>>>>>>>>>>>>>>>>>>>>>>>>
async function getdata()
{
   let data = await fetch("http://localhost:3000/allow")
   let res = await data.json()
   let a = document.querySelector("#output")
   a.innerHTML = res.map((e)=>`
  <tr>
    <td>${e.id}</td>
    <td>${e.name}</td>
    <td>${e.age}</td>
    <td>${e.address}</td>
    <td><button onclick ="del('${e.id}')">Delete</button></td>
    <td><button onclick ="edit('${e.id}')">Edit</button></td>
  </tr>

   `).join(" ")
}

//< <<<<<<<<<<<<<<<<<<<<<<<DELETE>>>>>>>>>>>>>>>>>>>>>>>>>
function del(arg)
{
    let res = window.confirm("Do you really want to delete this information....")
    if(res)
    {
        fetch(`http://localhost:3000/allow/${arg}` , {
            method : "DELETE"
        })
    }
    else {
        window.alert("Syntax Error")
    }
}

//<<<<<<<<<<<<<<<<<<INSERT>>>>>>>>>>>>>>>>>>>>
function insert()
{
    let data = {
        name : document.querySelector("#name").value,
        age : document.querySelector("#age").value,
        address : document.querySelector("#address").value
    }
    fetch("http://localhost:3000/allow" , {
        method : "POST" ,
        body : JSON.stringify(data)
    })
    return false;
}

//<<<<<<<<<<<<<<<<<<<<<<EDIT>>>>>>>>>>>>>>>>>>>>>>>>>>>

async function edit(id)
{ 
    let data =await fetch(`http://localhost:3000/allow/${id}`)
    let res =await data.json()
let a = document.querySelector("#update")
a.innerHTML = `
        <input type="text"  value = "${res.id}" id="id1"> <br> <br>
        <input type="text"  value = "${res.name}" id="name1"> <br> <br>
        <input type="text" value = "${res.age}" id="age1"> <br> <br>
        <input type="text"  value = "${res.address}" id="address1"> <br> <br>
     <td><button onclick = "update('${res.id}')">Update</button></td>

`

}

//  <<<<<<<<<<<<<<<<<<<<<<<UPDATE>>>>>>>>>>>

function update(id){
    let fdata={
        name: document.querySelector("#name1").value,
        age: document.querySelector("#age1").value,
        address: document.querySelector("#address1").value 
    }

    fetch(`http://localhost:3000/allow/${id}`,{
        method:'PUT',
        // headers : {
        //     'content-type':'application/json'
        // },
        body:JSON.stringify(fdata)
    })
     .then(r=>alert("updated"))
}
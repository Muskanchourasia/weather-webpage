function saveData()
{
let name,email,number,password;
name = document.getElementById("name").value;
email = document.getElementById("email").value;
number = document.getElementById("number").value;
password = document.getElementById("password").value;

let user_records=new Array()
user_records=JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
if(user_records.some((v)=>{return v.email==email}))
{
    alert("duplicate data");
}
else
{
    user_records.push({
    "name":name,
    "email":email,
    "number":number,
    "password":password
    })
    localStorage.setItem("user",JSON.stringify(user_records));
    
}
}
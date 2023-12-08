const logouthandler = ()=>{
    localStorage.removeItem("loggedInUser")

    setTimeout(()=>{
        window.location.href= "../login/index2.html"
    },2000)

}

const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

if(!loggedInUser) window.location.href = '../login/index.html'

const userName = document.getElementById('userName')
const pnumber = document.getElementById("plnumber")
const umar = document.getElementById("umar")
const nation = document.getElementById("usernation")
const gmail = document.getElementById ("useremail")

userName.innerHTML = JSON.parse(localStorage.getItem('loggedInUser')).firstname
gmail.innerHTML = JSON.parse(localStorage.getItem('loggedInUser')).email
umar.innerHTML = JSON.parse(localStorage.getItem("logInUser")).age
pnumber.innerHTML = JSON.parse(localStorage.getItem("logInUser")).phone
nation.innerHTML = JSON.parse(localStorage.getItem("logInUser")).nationalty







let dp = document.getElementById("dp")

let InputFile = document.getElementById("input-file")

InputFile.onchange = function () {
dp.src = URL.createObjectURL(InputFile.files[0])    
}




const datastore = document.getElementById("datastore")
const datacollecton = document.getElementById("userdataa")
const show = document.getElementById("show")

const switchhandler = () =>{
    datastore.style.visibility="hidden"
    datacollecton.style.visibility="hidden"
show.style.display="block"
    
}

const openhandler = ()=>{
   datacollecton.style.visibility="visible"
datastore.style.visibility="visible"
show.style.display="none"

}



const homehandler =()=>{
   setTimeout(()=>{
    window.location.reload()
   },2000) 
}

const explorehandler =()=>{
    swal("explore is not available stay tuned with us",{
        closeOnClickOutside: false,
      });
}
 

const reelhandler =()=>{
    swal("reels is not available stay tuned with us",{
        closeOnClickOutside: false,
      });
    
    }

const msge = document.getElementById("msg")


const profi = document.getElementById("prof")





const Notificationhandler =()=>{
    alert("notification is not available ")
}



const modalBtn = document.querySelector('#modalOpen')
const close = document.querySelector('#close')
const mBody = document.querySelector('#modalBody')


const modalBody = document.getElementById("modalBody")
function openModal() {
    mBody.classList.remove('inactive')
    mBody.classList.add('active')
    modalBody.classList.remove('close')
}
function closeModal() {
    mBody.classList.remove('active')
    mBody.classList.add('inactive')
}

const nationalty = document.getElementById("nationality")
const city = document.getElementById("city")
const age = document.getElementById("age")
const phonenumber = document.getElementById("pnumber")

const ihandler = () => {
    const loggedInUser= JSON.parse(localStorage.getItem('loggedInUser'))
    

    const extrainformation = {
        phonenumber : phonenumber.value,
        nationalty: nationalty.value,
        city : city.value,
        age: age.value,
    
    }
 
    loggedInUser.phone = phonenumber.value;
    loggedInUser.nationalty = nationalty.value;
    loggedInUser.age = age.value;
    loggedInUser.city = city.value;
loggedInUser.dp= dp.URL
 console.log(loggedInUser);
 localStorage.setItem('logInUser', JSON.stringify(loggedInUser))

setTimeout(()=>{
    modalBody.classList.add('close')
},2000)
 
}



// const inputpost = document.getElementById("Postinput")

// const contentarea = document.getElementById("postarea")

// let imageurl ;

// const postLocalStorage = JSON.parse(localStorage.getItem('posts')) || []

// const postdisplay = () =>{
//     contentarea.innerHTML = ""

// postLocalStorage.forEach(element => {

    
//     const texthtml =`<div class="card">
//     <div class="card-body">
//       <h5 class="card-title"></h5>
//       <p class="card-text"></p>
//       <p class="card-text"><small class="text-body-secondary">${element.userdetail}</small></p>
//     </div>
//     <img id="imagepost" src="" class="card-img-bottom" alt="...">
//   </div>
//     `
//     contentarea.innerHTML+=texthtml
// });
// }
// postdisplay()

// const imagepost = document.getElementById("imagepost")
// const  Imageopenhandler= ()=>{
//     imageurl = prompt()
// }
// console.log(imageurl);
//  function Posthandler(){ 
 
// let obje ;
//     console.log( inputpost ," post input");

//     if(imageurl){
//     console.log(imageurl);
// obje={
//     textdata : inputpost.value,
//     image : imageurl,
//     userdetail : JSON.parse(localStorage.getItem("loggedInUser"))
// }
// }else{
//     obje={
//         textdata : inputpost.value,
 
//         userdetail : JSON.parse(localStorage.getItem("loggedInUser"))
//     }
// }

// postLocalStorage.push(obje)

// localStorage.setItem("post " , JSON.stringify(postLocalStorage))

// imageurl = ""
// inputpost.value  = ""

// posthandler()
// }

// }




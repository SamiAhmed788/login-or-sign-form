const logouthandler = ()=>{
    localStorage.removeItem("loggedInUser")

    setTimeout(()=>{
        window.location.href= "../login/index2.html"
    },2000)

}


// const modalBtn = document.querySelector('#modalOpen')
// const close = document.querySelector('#close')
// const mBody = document.querySelector('#modalBody')





// const nationalty = document.getElementById("nationality")
// const city = document.getElementById("city")
// const age = document.getElementById("age")
// const phonenumber = document.getElementById("pnumber")
// const ihandler = () => {
//     const loggedInUser= JSON.parse(localStorage.getItem('loggedInUser'))
//     // console.log(loggedInUser)

//     const extrainformation = {
//         phonenumber : phonenumber.value,
//         nationalty: nationalty.value,
//         city : city.value,
//         age: age.value,
    
//     }
 
    
//  localStorage.setItem("extradata", JSON.stringify(JSON.stringify(extrainformation)+JSON.stringify(loggedInUser)))
 
// }






const homehandler =()=>{
   setTimeout(()=>{
    window.location.reload()
   },2000) 
}

const explorehandler =()=>{
    alert("explore is not available ")
}
 

const reelhandler =()=>{
    alert("reel is not available ")
}

const msge = document.getElementById("msg")


const msghandler=()=>{
alert("msg not available")

}

const Notificationhandler =()=>{
    alert("notification is not available ")
}

const updateprofilehandler =()=>{

const nationalty = document.getElementById("nationality")
const city = document.getElementById("city")
const age = document.getElementById("age")
const phonenumber = document.getElementById("pnumber")
const ihandler = () => {
    const loggedInUser= JSON.parse(localStorage.getItem('loggedInUser'))
    // console.log(loggedInUser)

    const extrainformation = {
        phonenumber : phonenumber.value,
        nationalty: nationalty.value,
        city : city.value,
        age: age.value,
    
    }
 
    
 localStorage.setItem("extradata", JSON.stringify(JSON.stringify(extrainformation)+JSON.stringify(loggedInUser)))
}


}

const profilehandler =()=>{
    const loggedInUser= JSON.parse(localStorage.getItem('loggedInUser'))
 console.log(loggedInUser)


}


















































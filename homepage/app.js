const logouthandler = ()=>{
    localStorage.removeItem("loggedInUser")

    setTimeout(()=>{
        window.location.href= "../login/index2.html"
    },2000)

}


const modalBtn = document.querySelector('#modalOpen')
const close = document.querySelector('#close')
const mBody = document.querySelector('#modalBody')



function openModal() {
    mBody.classList.remove('inactive')
    mBody.classList.add('active')
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
    // console.log(loggedInUser)

    const extrainformation = {
        phonenumber : phonenumber.value,
        nationalty: nationalty.value,
        city : city.value,
        age: age.value,
    
    }
 
    
 localStorage.setItem("extradata", JSON.stringify(JSON.stringify(extrainformation)+JSON.stringify(loggedInUser)))
 
}







 


















































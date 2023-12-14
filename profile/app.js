// logout syestem

const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

if (!loggedInUser) window.location.href = '../login/index.html'

// profileimgData

const userName = document.getElementById('userName')
const pnumber = document.getElementById("plnumber")
const umar = document.getElementById("umar")
const nation = document.getElementById("usernation")
const gmail = document.getElementById ("useremail")
const decx = document.getElementById("desc")

userName.innerHTML = JSON.parse(localStorage.getItem('loggedInUser')).firstname
gmail.innerHTML = JSON.parse(localStorage.getItem('loggedInUser')).email
umar.innerHTML = JSON.parse(localStorage.getItem("logInUser")).age
pnumber.innerHTML = JSON.parse(localStorage.getItem("logInUser")).phone
nation.innerHTML = JSON.parse(localStorage.getItem("logInUser")).nationalty
decx.innerHTML = JSON.parse(localStorage.getItem("logInUser")).description
// buttonsfunction

const datastore = document.getElementById("datastore")
const datacollecton = document.getElementById("userdataa")
const show = document.getElementById("show")

const switchhandler = () =>{
    datastore.textContent="show profile"
    datacollecton.style.visibility="hidden"
    
    datastore.addEventListener("click",()=>{
        datastore.textContent="hide"
        datacollecton.style.visibility="visible"

    } )
}

// profile image>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let dp = document.getElementById("dp")

let InputFile = document.getElementById("input-file")

InputFile.onchange = function () {
    dp.src = URL.createObjectURL(InputFile.files[0])    
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




const description = document.getElementById("description")
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
        description : description.value
        }
     
        loggedInUser.phone = phonenumber.value;
        loggedInUser.nationalty = nationalty.value;
        loggedInUser.age = age.value;
        loggedInUser.city = city.value;
    loggedInUser.description = description.value ;

    
     console.log(loggedInUser);
     localStorage.setItem('logInUser', JSON.stringify(loggedInUser))
    
    setTimeout(()=>{
        modalBody.classList.add('close')
    },2000)
     
    }



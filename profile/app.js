// logout syestem

const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

if (!loggedInUser) window.location.href = '../login/index.html'

// profileimgData

const userNamees = document.getElementById('userNamese')
const pnumber = document.getElementById("plnumber")
const umar = document.getElementById("umar")
const nation = document.getElementById("nationa")
const gmail = document.getElementById ("useremail")
const decx = document.getElementById("desc")
const Lastname = document.getElementById("lastname")
const shher = document.getElementById("citys")



userNamees.innerHTML = JSON.parse(localStorage.getItem('loggedInUser')).firstname
nation.innerHTML = JSON.parse(localStorage.getItem('logInUser')).nationalty
shher.innerHTML = JSON.parse(localStorage.getItem("logInUser")).city
decx.innerHTML = JSON.parse(localStorage.getItem("logInUser")).description


console.log(decx);




// profile image>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let dp = document.getElementById("dp")

// let InputFile = document.getElementById("input-file")

// InputFile.onchange = function () {
//     dp.src = URL.createObjectURL(InputFile.files[0])    

//     }


const descriptions = document.getElementById("descriptions")
    const nationalty = document.getElementById("nationality")
    const citys = document.getElementById("city")
    const age = document.getElementById("age")
    const phonenumber = document.getElementById("pnumber")
    const useremail = document.getElementById("useremail")

    const ihandler = () => {


        const loggedInUser= JSON.parse(localStorage.getItem('loggedInUser'))
        
    
        // const extrainformation = {
        //     phonenumber : phonenumber.value,
        //     nationalty: nationalty.value,
        //     city : city.value,
        //     age: age.value,
        // descriptions : descriptions.value
        // }
     loggedInUser.firstname =  userName.value;
     loggedInUser.lastname = Lastname.value
        loggedInUser.phone = phonenumber.value;
        loggedInUser.nationalty = nationalty.value;
        // loggedInUser.age = age.value;
        loggedInUser.city = citys.value;
    loggedInUser.description = descriptions.value ;
// loggedInUser.Lastname = lastname.value;
loggedInUser.email = gmail.value;

    
     console.log(loggedInUser);
     localStorage.setItem('logInUser', JSON.stringify(loggedInUser))
 
    setTimeout(()=>{
        window.location.reload()
    },2000)
     
    }


    let dp = document.getElementById("dp")

    let InputFile = document.getElementById("input-file")
    
    InputFile.onchange = function () {
        dp.src = URL.createObjectURL(InputFile.files[0])    
        console.log(dp.src);

const profiledp = localStorage.setItem("dp" ,JSON.stringify(dp.src))

        }




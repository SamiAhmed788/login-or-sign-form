const email = document.getElementById("email")
const lname = document.getElementById("lname")
const password = document.getElementById("password")
const cpassword = document.getElementById("cpassword")
const  firstname  = document.getElementById("fname")



const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

if(loggedInUser) window.location.href = '../homepage/index.html'

const  signuphandler = () => {
    const usera = JSON.parse(localStorage.getItem("usera"))|| []

    console.log(usera , "usera")

if(!firstname.value || !lname.value  ||  !password.value ||  !cpassword.value ||  !email.value ) return alert("fill all input here")


if (password.value.length > 8)  return alert('password should be less than 8 character')
const regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

if(regex.test(password))return alert('password will be upper case ')
if (password.value != cpassword.value) return alert("confirm password not match")

const useremailmatch = usera.find((user ) => {
if(user.email === email.value) return user

})

if(useremailmatch)return alert("user already exist")

const userNameFound = usera.find((user)=> {
    if(user.firstname === firstname.value) return user

})
if(userNameFound) return alert("UserName already taken")

const user = {
    firstname : firstname.value,
    lastname : lname.value,
    email : email.value,
    password: password.value,
    cpassword : cpassword.value ,

}

usera.push(user)
localStorage.setItem("usera",JSON.stringify(usera))


alert("sign up successfully , now u login your id at login page")

setTimeout(()=> {
    window.location.href='../login/index2.html'
},2000)





}


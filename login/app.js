const Email = document.getElementById("email")

const password = document.getElementById("password")
const btn = document.getElementsByTagName("button")
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))

if(loggedInUser){
    window.location.href="../homepage/index.html"
}
const loginhandler = () =>{
   
    
    const usera = JSON.parse(localStorage.getItem('usera'))
    console.log(usera)

    if (password.value.length < 8) return alert('password length should be atleast 8 characters')

    if (!usera) return alert("Sorry no user found")

    const userfounds = usera.find(user => {

        if (user.email === Email.value) return  user
       
       });

    if (!userfounds) return alert('No user found')
    console.log(userfounds)

console.log(userfounds.password);

if (userfounds.password !== password.value) {
    return alert("invalid crediantial")
}

console.log(userfounds);
    alert("Login Successfully, diverting you to the home page")
      
    localStorage.setItem('loggedInUser', JSON.stringify(userfounds))

setTimeout(()=> {
    window.location.replace ("../homepage/index.html") 
},2000)
}
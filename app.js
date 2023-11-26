const email = document.querySelector("#email")
const lname = document.querySelector("#last")
const password = document.querySelector("#password")
const cpassword = document.querySelector("#c.password")


if (password.value > 8 || cpassword.value > 8) {
alert("please give 8 character only")    

    
}

function submithandler () {
    if (email.value == "" ||lname.value == ""
    || password.value == "" || cpassword == "" ) {
        alert("please fill input ")
        
     } else if (password.value >= 8 || cpassword.value >= 8) {
        alert("please give 8 character only")   
}}
// logout syestem

const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

if (!loggedInUser) window.location.href = '../login/index.html'

// profileimgData
const lis = document.getElementById("search")
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


// li`s`

const iss = document.getElementById ("iss")
const search = document.getElementById ("home")
const explore = document.getElementById("explore")
const reels = document.getElementById("reels")
const profiles = document.getElementById("profiles")
const notification  = document.getElementById("Notification")
const create  = document.getElementById("Create")
const  more = document.getElementById("More")
const  profileupdate = document.getElementById("profile update")
const threads = document.getElementById("Threads")
const insta = document.getElementById("instagram")

const pri = document.getElementById("Profilek")

// buttonsfunction

function mycall() {
    let screenwith = window.innerWidth;
    if (screenwith < 1200 ) {

        lis.innerHTML=`<i  class="fa-solid fa-house"></i>`
  lis.style.fontSize="25px"
  search.innerHTML=`<i  class="fa-solid fa-magnifying-glass"></i>`
  search.style.fontSize="25px"
  explore.innerHTML=`<i  class="fa-regular fa-compass"></i>`
  explore.style.fontSize="25px" 
  reels.innerHTML=`<i class="fa-brands fa-youtube"></i></i>`
  reels.style.fontSize="25px" 
  profiles.innerHTML=`<i class="fa-brands fa-facebook-messenger"></i> `
  profiles.style.fontSize="25px"
  notification.innerHTML=`<i class="fa-regular fa-heart"></i> `
  notification.style.fontSize="25px"
  create.innerHTML=` <i class="fa-solid fa-plus"></i> `
  create.style.fontSize="25px"
  profileupdate.innerHTML=` <i class="fa-regular fa-user"></i>`
  profileupdate.fontSize="45px"
  more.innerHTML=` <li class="nav-item dropdown" id="More">
  <a class="nav-link dropdown-" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="text-decoration: none; color: rgb(0, 0, 0); ">
    <i class="fa-solid fa-bars"></i> 
  </a>
<ul class="dropdown-menu dropdown-menu-dark">
  <li><a class="dropdown-item" href="#" onclick="logouthandler()">Log Out</a></li>
  <li><a class="dropdown-item" href="../new page/index.html">Setting</a></li>
  <li><a class="dropdown-item" href="#">about </a></li>`
  more.fontSize="35px"
 threads.innerHTML=`<i class="fa-brands fa-threads"></i>  `
 threads.fontSize="35px"
 insta.style.width= "20px"
 insta.src= `insta.png`
 pri.style.display="none"

}else{
    lis.innerHTML=` <i  class="fa-solid fa-house"></i> Home`
    lis.style.fontSize="16px"
    search.innerHTML=`<i  class="fa-solid fa-magnifying-glass"></i> Search `
    search.style.fontSize="16px"
    explore.innerHTML=`<i  class="fa-regular fa-compass"></i> explore `
    explore.style.fontSize="16px"
    reels.innerHTML=`<i class="fa-brands fa-youtube"></i> reels `
    reels.style.fontSize="16px"
    profiles.innerHTML=`<i class="fa-brands fa-facebook-messenger"></i> profile `
    profiles.style.fontSize="16px"
    notification.innerHTML=`<i class="fa-regular fa-heart"></i> Notification  `
    notification.style.fontSize="16px"
    create.innerHTML=` <i class="fa-solid fa-plus"></i> create `
    create.style.fontSize="16px"
    profileupdate.innerHTML=`<i class="fa-regular fa-user"></i> profie update`
    profileupdate.style.fontSize="16px"
    more.innerHTML=` <li class="nav-item dropdown" id="More">
    <a class="nav-link dropdown-" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="text-decoration: none; color: rgb(0, 0, 0); ">
      <i class="fa-solid fa-bars"></i> more
    </a>
  <ul class="dropdown-menu dropdown-menu-dark">
    <li><a class="dropdown-item" href="#" onclick="logouthandler()">Log Out</a></li>
    <li><a class="dropdown-item" href="../new page/index.html">Setting</a></li>
    <li><a class="dropdown-item" href="#">about </a></li>`
    more.style.fontSize="16px"
   threads.innerHTML=` <i class="fa-brands fa-threads"></i> Threads`
    threads.style.fontSize="16px"
insta.src= `https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo-2010-2013.png`
insta.style.width= "100px"
pri.style.display="block"
}}
window.addEventListener( 'resize',mycall)


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














// posthandling>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const postInput = document.querySelector('#Postinput')

const postContentArea = document.querySelector('#postarea')
                      
var today = new Date ();
var dd = String (today.getHours())
let oldPost;
let oldPostIndex;

const postsLocalStorage = JSON.parse(localStorage.getItem('posts')) || []

const btn2 = document.getElementById("Submitbtn")

let imageUrl ;

const postDisplayHandler = () => {
    postContentArea.innerHTML = ""

btn2.textContent= "Post now"
    const postsLocalStorage = JSON.parse(localStorage.getItem('posts')) || []


    postsLocalStorage.reverse().forEach(post => {
       let textHTML;

       if (post?.imgData) {
        textHTML =`<div class="card text-center" style="color: black; background-color: white; width: 500px; margin: 0 auto ;" >
        <div class="card-header" id="userName" style="background-color: white;">
               ${loggedInUser.email === post?.userDetail.email ? `<button data-bs-toggle="modal" data-bs-target="#exampleModal" id= "editbtn" style="margin-right: 50px;" class="btn btn-primary"  onclick="editHandler(${post?.id})">Edit</button> ${post?.userDetail.firstname} <button style="margin-left: 50px;" class="btn btn-primary"  onclick="deleteHandler(${post?.id})">Delete</button>` : `${post?.userDetail.firstname}`} 
            </div>
        <div class="card" style="color: black; background-color: white; " >
<div class="card-body">
<h5 class="card-title">Special Post</h5>
<p class="card-text">${post.textData}</p>
<p class="card-text"><small class="text-body-">Last updated ${dd}pm</small></p>
</div>
<img  src="${post?.imgData}" >
</div>
<div class="class" style=" border : 1px solid white ;  display : flex; justify-content : space-around; height :40px  ; align-items : center; "><i class="fa-regular fa-heart"></i>
<i id="sar" class="fa-regular fa-comment"></i>
<i class="fa-solid fa-share"></i>
</div>

</div>`
       
       }else{

        textHTML = `
        <div class="card text-center" style="color: black; background-color: white; border: 2px solid white; width: 500px; margin: 0 auto ; " >
        <div class="card-header" id="userName" style="background-color: white;">
           ${loggedInUser.email === post?.userDetail.email ? `<button class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal" style="margin-right: 50px;" onclick="editHandler(${post?.id})">Edit</button> ${post?.userDetail.firstname} <button class="btn btn-primary"  style="margin-right: 50px;" onclick="deleteHandler(${post?.id})">Delete</button>` : `${post?.userDetail.firstname}`} 
        </div>
        <div class="card-body">
            <h5 class="card-title">Special Post</h5>
            <p class="card-text">${post?.textData}.</p>
        </div>
        <div class="card-footer text-body-secondary">
       
        </div>
    </div>
        `
       }

 8
console.log(postsLocalStorage);
    postContentArea.innerHTML += textHTML
    });
}

postDisplayHandler()


const Imageopenhandler = () => {imageUrl = prompt("enter image url")}
function PostSubmitHandler(){
    let postObj;
    
    if (!imageUrl) {

        postObj = {
            id : Date.now(),
            textData: postInput.value,
            userDetail: JSON.parse(localStorage.getItem('loggedInUser'))
        }
    } else {
        console.log(imageUrl, "====>>imageUrl")
        postObj = {
            id: Date.now(),
            textData: postInput.value,
            imgData:imageUrl,
            userDetail: JSON.parse(localStorage.getItem('loggedInUser'))
        }
    }


    postsLocalStorage.push(postObj)

  
    console.log(postsLocalStorage);
    localStorage.setItem('posts', JSON.stringify(postsLocalStorage))

    imageUrl = ""

    postInput.value = ""

    postDisplayHandler()
}

const logouthandler = () => {
    localStorage.removeItem('loggedInUser')

    window.location.href = '../login/index2.html'
}





const editHandler= (postId) =>{
console.log(postId);
const postsLocalStorage = JSON.parse(localStorage.getItem("posts"))
console.log(postsLocalStorage, "====>> postsLocalStorage")

const postfind = postsLocalStorage.find((post)=>{return post.id === postId})
const indexfind = postsLocalStorage.findIndex((post)=>{return post.id === postId})


console.log(postfind);
console.log(indexfind);


oldPost = postfind
oldPostIndex = indexfind

postInput.value = postfind.textData

btn2.textContent= "edit"

btn2.setAttribute("onclick" , "updateHandler()")


}

const updateHandler = ()=>{
    console.log(postInput);
    
    let postObj;
    
    if (!imageUrl) {

        postObj = {
            id : Date.now(),
            textData: postInput.value,
            userDetail: JSON.parse(localStorage.getItem('loggedInUser'))
        }
    } else {
        console.log(imageUrl, "====>>imageUrl")
        postObj = {
            id: Date.now(),
            textData: postInput.value,
            imgData:imageUrl,
            userDetail: JSON.parse(localStorage.getItem('loggedInUser'))
        }
    }

    const newUpdatePostData = {
        id: oldPost?.id,

        textData: postObj.textData || oldPost.textData,

        //textData: condition ? implement1 : implement2

        imgData: postObj.imgData || oldPost.imgData,

        userDetail: JSON.parse(localStorage.getItem('loggedInUser'))

    }
    console.log(newUpdatePostData);

const  postsLocalStorage = JSON.parse(localStorage.getItem("posts"))

postsLocalStorage.splice(oldPostIndex,1 , newUpdatePostData)

console.log(postsLocalStorage, "===>>> postLocalStorage")

localStorage.setItem("posts", JSON.stringify(postsLocalStorage))

btn2.textContent= "submit"

btn2.setAttribute("onclick", "postDisplayHandler()")

setTimeout(()=>{
    window.location.reload()
},2000)



}



const deleteHandler =(postId) =>{
    const fordelete = JSON.parse(localStorage.getItem("posts"))
  
    const felter = fordelete.filter((post)=>  post.id != postId )
console.log(felter);
    localStorage.setItem("posts" , JSON.stringify(felter))

    postDisplayHandler()

    setTimeout(()=>{
        window.location.reload()
    },1000)
    
}



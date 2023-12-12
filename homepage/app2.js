// logout syestem

const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

if (!loggedInUser) window.location.href = '../login/index.html'

// profileimgData

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














// posthandling>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const postInput = document.querySelector('#Postinput')

const postContentArea = document.querySelector('#postarea')
                      
let imageUrl;
let oldPost;
let oldPostIndex;

const postsLocalStorage = JSON.parse(localStorage.getItem('posts')) || []




const postDisplayHandler = () => {
    postContentArea.innerHTML = ""


    const postsLocalStorage = JSON.parse(localStorage.getItem('posts')) || []


    postsLocalStorage.reverse().forEach(post => {
       let textHTML;

       if (post?.imgData) {
        textHTML =`<div class="card text-center" style="color: rgb(255, 255, 255); background-color: black; " >
        <div class="card-header" id="userName">
               ${loggedInUser.email === post?.userDetail.email ? `<button onclick="editHandler(${post?.id})">Edit</button> ${post?.userDetail.userName} <button onclick="deleteHandler(${post?.id})">Delete</button>` : `${post?.userDetail.userName}`} 
            </div>
        <div class="card" style="color: rgb(255, 255, 255); background-color: black; " >
<div class="card-body">
<h5 class="card-title">Special Post</h5>
<p class="card-text">${post.textData}</p>
<p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
</div>
<img src="${post?.imgData}" >
</div>
</div>`
       
       }else{

        textHTML = `
        <div class="card text-center" style="color: rgb(255, 255, 255); background-color: black; border: 2px solid white; " >
        <div class="card-header" id="userName">
           ${loggedInUser.email === post?.userDetail.email ? `<button class="btn btn-light" onclick="editHandler(${post?.id})">Edit</button> ${post?.userDetail.firstname} <button class="btn btn-light" onclick="deleteHandler(${post?.id})">Delete</button>` : `${post?.userDetail.firstname}`} 
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

 
console.log(postsLocalStorage);
    postContentArea.innerHTML += textHTML
    });
}

postDisplayHandler()



const Imageopenhandler = () => {
    imageUrl = prompt()
    console.log(imageUrl);
}

function PostSubmitHandler(){
    let postObj;
    
    if (imageUrl) {
        console.log(imageUrl, "====>>imageUrl")
        postObj = {
            id: Date.now(),
            textData: postInput.value,
            imgData: imageUrl,
            userDetail: JSON.parse(localStorage.getItem('loggedInUser'))
        }
    } else {
        postObj = {
            id : Date.now(),
            textData: postInput.value,
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

const logoutHandler = () => {
    localStorage.removeItem('loggedInUser')

    window.location.href = '../login/index.html'
}






const editHandler= (postId) =>{
console.log(postId);
const postsLocalStorage = JSON.parse(localStorage.getItem("posts"))
console.log(postsLocalStorage);

const postfind = postsLocalStorage.find((post)=>{return post === postId})
const indexfind = postsLocalStorage.findIndex((post)=>{return post.id === postId})


console.log(postfind);
console.log(indexfind);
// oldPost = postfind
// oldPostIndex = indexfind



}
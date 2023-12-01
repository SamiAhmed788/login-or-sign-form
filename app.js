let loggedInUser = JSON.parse(localStorage.getItem("loggedinUser"))
if (loggedInUser) {
  window.location.href = "./home/home.html"
} else {
  window.location.href = "#"
}
function icon(anchor) {
    anchor.classList.toggle("fa-sun");
    anchor.classList.toggle("fa-moon");
    var element = document.getElementsByClassName("dark");
    for(let i=0;i<element.length;i++){
        element[i].classList.toggle("dark-mode");
    }
}

function n(anchor) {
    var element = document.getElementsByClassName("dis");
    for(let i=0;i<element.length;i++){
        element[i].classList.toggle('display');
    }
}

function su() {
    var signin = document.getElementById("signincard");
    var signup = document.getElementById("signupcard");
    var sut = document.getElementById("sut");
    var sit = document.getElementById("sit");
    var i=sit.querySelector("span");
    var u=sut.querySelector("span");
    signin.classList.remove("show");
    i.classList.remove("act");
    signin.classList.add("collapse");
    signup.classList.add("show");
    u.classList.add("act");
  }
  
  function si() {
    var signin = document.getElementById("signincard");
    var signup = document.getElementById("signupcard");
    var sut = document.getElementById("sut");
    var sit = document.getElementById("sit");
    var i=sit.querySelector("span");
    var u=sut.querySelector("span")
    signup.classList.remove("show");
    u.classList.remove("act");
    signin.classList.add("show");
    i.classList.add("act");
  }
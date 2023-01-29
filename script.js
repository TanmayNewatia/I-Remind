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
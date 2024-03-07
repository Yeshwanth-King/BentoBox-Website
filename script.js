let navBar = document.querySelector(".nav-bar");

window.onscroll =  () => {
    if(window.scrollY > 50){
        navBar.classList.add("scorlling");
    }
    else{
        navBar.classList.remove("scorlling");
    }
};


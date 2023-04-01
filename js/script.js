const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const h2tag = document.querySelector("#h2tag");
const navMenu2 = document.querySelector("#nav-menu");
const footerTag = document.querySelector(".footer-section");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    

    if(navMenu2.className == "nav-menu active")
    {
        h2tag.style.visibility = 'hidden';
        footerTag.style.visibility = "hidden";
    }
    else
    {
        h2tag.style.visibility = 'visible';
        footerTag.style.visibility = "visible";
    }
    
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
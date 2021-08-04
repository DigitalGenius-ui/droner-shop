// sign in part 

const signInBtn = document.querySelector(".fa-sign-in-alt");
const signMenu = document.querySelector(".sign-background");
const signUpBtn = document.querySelector(".new");
const signin = document.querySelector(".sign-in");
const signup = document.querySelector(".sign-up");
const toggle = document.querySelector(".bars");
const sub_Menu = document.querySelector(".menu-background");

signInBtn.addEventListener("click",()=>{
    signMenu.classList.toggle("open");
    signin.classList.remove("open");
    signup.classList.remove("open");
});

signUpBtn.addEventListener("click",()=>{
    signup.classList.toggle("open");
    signin.classList.toggle("open");
});

toggle.addEventListener("click",()=>{
    toggle.classList.toggle("open")
    sub_Menu.classList.toggle("open")
})
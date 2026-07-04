import { supabase } from "../../supabase/supabaseClient.js";

const loginModal = document.getElementById("loginModal");
const continueGoogleBtn = document.getElementById("continueGoogleBtn");
const cancelLoginBtn = document.getElementById("cancelLoginBtn");

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 0.23){
        navbar.classList.add("navbar-scrolled");
    }
    else{
        navbar.classList.remove("navbar-scrolled");
    }

});

const numbers = document.querySelectorAll(".fall-number");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            setTimeout(() => {
                entry.target.classList.add("show");
            }, 200);

            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.9
});

numbers.forEach((number) => {
    observer.observe(number);
});

// ================= PROTECTED FEATURES =================

const protectedButtons = document.querySelectorAll(".card-btn");

protectedButtons.forEach((button) => {

    button.addEventListener("click", async (event) => {

        const {
            data: { user }
        } = await supabase.auth.getUser();

        if (!user) {
            event.preventDefault();
            loginModal.classList.add("show");
        }

    });

});

// ================= CONTINUE WITH GOOGLE =================

continueGoogleBtn.addEventListener("click", async () => {

    const { error } = await supabase.auth.signInWithOAuth({

        provider: "google",

        options: {
            redirectTo: "http://127.0.0.1:5500/ui/home/home.html"
        }

    });

    if (error) {

        console.log(error);

    }

});

// ================= CANCEL LOGIN =================

cancelLoginBtn.addEventListener("click", () => {
    loginModal.classList.remove("show");

});

// ================= CLOSE MODAL =================

loginModal.addEventListener("click", (event) => {

    if (event.target === loginModal) {
        loginModal.classList.remove("show");
    }

});
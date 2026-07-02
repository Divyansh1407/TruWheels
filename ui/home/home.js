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
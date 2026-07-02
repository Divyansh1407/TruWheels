const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {

    question.addEventListener("click", () => {

        const currentItem = question.parentElement;

        // Close all other FAQs
        document.querySelectorAll(".faq-item").forEach((item) => {

            if (item !== currentItem) {

                item.classList.remove("active");

                item.querySelector("span").textContent = "+";
            }
        });

        // Toggle current FAQ
        currentItem.classList.toggle("active");

        const symbol = question.querySelector("span");

        if (currentItem.classList.contains("active")) {
            symbol.textContent = "−";
        } else {
            symbol.textContent = "+";
        }

    });

});
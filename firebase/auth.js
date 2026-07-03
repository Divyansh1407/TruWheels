import { supabase } from "../supabase/supabaseClient.js";

const loginBtn = document.getElementById("googleLoginBtn");
const profileBtn = document.getElementById("profileBtn");
const profileDropdown = document.getElementById("profileDropdown");
const logoutBtn = document.getElementById("logoutBtn");
const myReportsBtn = document.getElementById("myReportsBtn");


// ================= GOOGLE LOGIN =================

loginBtn.addEventListener("click", async () => {

    const { error } = await supabase.auth.signInWithOAuth({

        provider: "google",

        options: {
            redirectTo: "http://127.0.0.1:5500/ui/home/home.html"
        }

    });

    if (error) {
        console.log("Login Failed");
        console.log(error);
    }

});


// ================= PROFILE DROPDOWN =================

profileBtn.addEventListener("click", () => {

    supabase.auth.getUser().then(({ data }) => {

        if (data.user) {

            profileDropdown.classList.toggle("active");

        }

    });

});


// ================= LOGOUT =================

logoutBtn.addEventListener("click", async () => {

    const { error } = await supabase.auth.signOut();

    if (error) {

        console.log("Logout Failed");
        console.log(error);

    } else {

        profileDropdown.classList.remove("active");

        console.log("Logged out successfully");

    }

});


// ================= CHECK USER =================

async function checkUser() {

    const { data, error } = await supabase.auth.getSession();

    if (error) {
        console.log(error);
        return;
    }

    const user = data.session?.user;

    if (user) {

        document.getElementById("userName").textContent =
            user.user_metadata.full_name;

        loginBtn.style.display = "none";

        profileBtn.innerHTML = `
            <img src="${user.user_metadata.avatar_url}"
            class="user-photo">
        `;

        console.log("User already logged in");
    }

    else {

        loginBtn.style.display = "block";

        profileBtn.innerHTML = "👤";

        console.log("No user logged in");
    }
}

checkUser();

supabase.auth.onAuthStateChange((event, session) => {

    if (session?.user) {

        document.getElementById("userName").textContent =
            session.user.user_metadata.full_name;

        loginBtn.style.display = "none";

        profileBtn.innerHTML = `
            <img src="${session.user.user_metadata.avatar_url}"
            class="user-photo">
        `;

        console.log("Logged in successfully");
    }

    else {

        document.getElementById("userName").textContent =
            "Guest User";

        loginBtn.style.display = "block";

        profileBtn.innerHTML = "👤";

        profileDropdown.classList.remove("active");

        console.log("Logged out successfully");
    }

});


// ================= CLOSE DROPDOWN =================

document.addEventListener("click", (event) => {

    if (
        !profileBtn.contains(event.target) &&
        !profileDropdown.contains(event.target)
    ) {

        profileDropdown.classList.remove("active");

    }

});

myReportsBtn.addEventListener("click", async () => {

    const {
        data: { user }
    } = await supabase.auth.getUser();

    if (!user) {

        alert("Please sign in first.");
        return;
    }

    window.location.href =
        "../dashboard/myReports.html";

});
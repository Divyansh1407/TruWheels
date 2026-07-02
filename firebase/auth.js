import { auth } from "./firebaseConfig.js";

import {
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const provider = new GoogleAuthProvider();

const loginBtn = document.getElementById("googleLoginBtn");


// ================= GOOGLE LOGIN =================

loginBtn.addEventListener("click", async () => {

    try {

        const result = await signInWithPopup(auth, provider);

        const user = result.user;

        console.log("Logged In Successfully");
        console.log(user.displayName);
        console.log(user.email);
        console.log(user.photoURL);

    }

    catch (error) {

        console.log("Login Failed");
        console.log(error);

    }

});

const profileBtn = document.getElementById("profileBtn");

const profileDropdown =
    document.getElementById("profileDropdown");

  profileBtn.addEventListener("click", () => {

    profileDropdown.classList.toggle("active");

});


// ================= LOGOUT =================

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", async () => {

    try {

        await signOut(auth);

        profileDropdown.classList.remove("active");

        console.log("Logged out successfully");

    }

    catch (error) {

        console.log("Logout Failed");
        console.log(error);

    }

});

onAuthStateChanged(auth, (user) => {

    if (user) {
        document.getElementById("userName").textContent =
        user.displayName;

        loginBtn.style.display = "none";

        profileBtn.innerHTML = `
            <img src="${user.photoURL}" class="user-photo">
        `;

        console.log("User already logged in");
        console.log(user.displayName);

    }

    else {

        loginBtn.style.display = "block";

        profileBtn.innerHTML = "👤";

        console.log("No user logged in");

    }

});
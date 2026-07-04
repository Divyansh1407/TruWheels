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

// ================= CREATE / UPDATE PROFILE =================

async function syncUserProfile(user) {

    // Check whether the user already exists
    const { data: profile, error } = await supabase
        .from("profiles")
        .select("user_id")
        .eq("user_id", user.id)
        .maybeSingle();

    if (error) {
        console.log("Profile check failed");
        console.log(error);
        return;
    }

    // ================= FIRST LOGIN =================

    if (!profile) {

        const { error: insertError } = await supabase
            .from("profiles")
            .insert({

                user_id: user.id,

                name: user.user_metadata.full_name,

                email: user.email,

                avatar_url: user.user_metadata.avatar_url,

                last_login: new Date().toISOString()

            });

        if (insertError) {

            console.log("Profile creation failed");
            console.log(insertError);

        } else {

            console.log("New profile created");

            const { data, error: emailError } = await supabase.functions.invoke(
                "send-welcome-email",
                {
                    body: {
                        name: user.user_metadata.full_name,
                        email: user.email
                    }
                }
            );
 console.log("Function response:", data);
console.log("Function error:", emailError);

            if (emailError) {

                console.log("Welcome email failed");
                console.log(emailError);

            } else {

                console.log("Welcome email sent");

            }

        }

    }

    // ================= EXISTING USER =================

    else {

        const { error: updateError } = await supabase
            .from("profiles")
            .update({

                last_login: new Date().toISOString()

            })

            .eq("user_id", user.id);

        if (updateError) {

            console.log("Last login update failed");
            console.log(updateError);

        } else {

            console.log("Last login updated");

        }

    }

}

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

supabase.auth.onAuthStateChange(async (event, session) => {

    if (session?.user) {

        await syncUserProfile(session.user);

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
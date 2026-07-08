require("dotenv").config();

const supabase = require("./config/supabase");

async function testConnection() {
    const { data, error } = await supabase
        .from("brands")
        .select("*");

    if (error) {
        console.error("❌ Connection Failed");
        console.error(error);
        return;
    }

    console.log("✅ Connected Successfully!");
    console.log(data);
}

testConnection();
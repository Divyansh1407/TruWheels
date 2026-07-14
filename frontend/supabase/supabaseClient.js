import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://qnsvlywyvcnkrwaumepw.supabase.co";

const supabaseKey = "sb_publishable_0-fDCc75wb4QN9QmK6_5xQ_CPetCu23";

export const supabase = createClient(
    supabaseUrl,
    supabaseKey,
    {
        auth: {
            persistSession: true,
            autoRefreshToken: true
        }
    }
);
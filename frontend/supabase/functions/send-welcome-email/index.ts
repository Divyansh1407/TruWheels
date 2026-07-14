import { Resend } from "npm:resend@4.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const resend = new Resend(
  Deno.env.get("RESEND_API_KEY")
);

Deno.serve(async (req) => {

  console.log("Function started");

  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: corsHeaders,
    });
  }

  const body = await req.json();
  console.log(body);
  const { name, email } = body;

    if (!name || !email) {

      return new Response(

        JSON.stringify({
          success: false,
          message: "Name and email are required."
        }),

        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json"
          },
        }

      );

    }

    const response = await resend.emails.send({

    from: "TruWheels <onboarding@resend.dev>",

    to: email,

    subject: "🚗 Welcome to TruWheels",

    html: `
    
      <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto; padding:30px;">

        <h1 style="color:#111827;">
          Welcome to TruWheels
        </h1>

        <p>Hi ${name},</p>

        <p>
          Thank you for choosing <strong>TruWheels</strong> as your trusted platform for used car evaluations.
        </p>

        <p>
          Our mission is to simplify the used-car buying experience by providing clear, data-driven insights that help you make informed decisions with confidence.
        </p>

        <h3>With TruWheels, you can:</h3>

        <ul>
          <li>✔ Analyze vehicle health and reliability</li>
          <li>✔ Evaluate ownership and maintenance risks</li>
          <li>✔ Compare asking prices with market value</li>
          <li>✔ Store and manage your vehicle reports securely</li>
        </ul>

        <p>
          We look forward to helping you make smarter automotive decisions.
        </p>

        <p>
          If you have any questions, feedback, or suggestions, feel free to reach out to our team.
        </p>

        <br>

        <p>
          Best regards,<br>
          <strong>The TruWheels Team</strong>
        </p>

        <hr>

        <p style="font-size:12px; color:#666;">
          © 2026 TruWheels. All rights reserved.
        </p>

      </div>

    `

  });
console.log(response);
    if (response.error) {

    return new Response(

      JSON.stringify({
        success: false,
        error: response.error,
      }),

      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }

    );

  }

  return new Response(

    JSON.stringify({
      success: true,
    }),

    {
      status: 200,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      }
    }

  );

});
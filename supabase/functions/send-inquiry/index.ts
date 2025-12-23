import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface InquiryRequest {
  name: string;
  email: string;
  phone: string;
  destination: string;
  departureDate: string;
  days: number;
  adults: number;
  children: number;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const inquiryData: InquiryRequest = await req.json();
    console.log("Received inquiry:", inquiryData);

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 10px;">
          New Travel Inquiry from Vrishab Voyages Website
        </h2>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e3a8a; margin-top: 0;">Customer Details</h3>
          <p><strong>Name:</strong> ${inquiryData.name}</p>
          <p><strong>Email:</strong> ${inquiryData.email}</p>
          <p><strong>Phone:</strong> ${inquiryData.phone}</p>
        </div>

        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e3a8a; margin-top: 0;">Trip Details</h3>
          <p><strong>Destination:</strong> ${inquiryData.destination}</p>
          <p><strong>Departure Date:</strong> ${inquiryData.departureDate}</p>
          <p><strong>Duration:</strong> ${inquiryData.days} days</p>
          <p><strong>Adults:</strong> ${inquiryData.adults}</p>
          <p><strong>Children:</strong> ${inquiryData.children}</p>
          ${inquiryData.message ? `<p><strong>Additional Message:</strong><br/>${inquiryData.message}</p>` : ''}
        </div>

        <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
          This inquiry was submitted through the Vrishab Voyages website.
        </p>
      </div>
    `;

    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured');
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Vrishab Voyages <onboarding@resend.dev>",
        to: ["founder@vvoyages.in"],
        subject: `New Travel Inquiry - ${inquiryData.destination}`,
        html: emailHtml,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text();
      console.error('Resend API error:', errorData);
      throw new Error(`Failed to send email: ${errorData}`);
    }

    const emailData = await emailResponse.json();
    console.log("Email sent successfully:", emailData);

    return new Response(JSON.stringify({ success: true, data: emailData }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-inquiry function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

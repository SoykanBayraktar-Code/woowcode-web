import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    const { firstName, lastName, email, phone, subject, message } = body;

    if (!firstName || !lastName || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: "Tüm alanlar zorunludur" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Geçersiz e-posta adresi" },
        { status: 400 }
      );
    }

    // Check environment variable
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      console.log("Form data received:", { firstName, lastName, email, phone, subject, message: message.substring(0, 50) + "..." });
      return NextResponse.json(
        { error: "E-posta yapılandırması eksik. Lütfen yönetici ile iletişime geçin." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email
    const { data, error } = await resend.emails.send({
      from: "WOOWCODE <onboarding@resend.dev>",
      to: ["woowcodecom@gmail.com"],
      replyTo: email,
      subject: `[WOOWCODE İletişim] ${subject} - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0a0a0f; color: #ffffff;">
          <div style="background: linear-gradient(135deg, #00d4ff, #8b5cf6); padding: 20px; border-radius: 12px 12px 0 0;">
            <h1 style="margin: 0; color: #000;">WOOWCODE İletişim Formu</h1>
          </div>
          
          <div style="background-color: #1a1a2e; padding: 30px; border-radius: 0 0 12px 12px;">
            <h2 style="color: #00d4ff; border-bottom: 1px solid #333; padding-bottom: 10px;">Gönderen Bilgileri</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 10px 0; color: #888; width: 150px;">İsim Soyisim:</td>
                <td style="padding: 10px 0; color: #fff;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #888;">E-posta:</td>
                <td style="padding: 10px 0; color: #fff;"><a href="mailto:${email}" style="color: #00d4ff;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #888;">Telefon:</td>
                <td style="padding: 10px 0; color: #fff;"><a href="tel:${phone}" style="color: #00d4ff;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #888;">Konu:</td>
                <td style="padding: 10px 0; color: #fff;">${subject}</td>
              </tr>
            </table>
            
            <h2 style="color: #00d4ff; border-bottom: 1px solid #333; padding-bottom: 10px;">Mesaj</h2>
            <div style="background-color: #252542; padding: 20px; border-radius: 8px; margin-top: 10px;">
              <p style="margin: 0; color: #fff; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #333; color: #666; font-size: 12px;">
              <p>Bu e-posta WOOWCODE web sitesi iletişim formu üzerinden gönderilmiştir.</p>
              <p>Tarih: ${new Date().toLocaleString("tr-TR", { timeZone: "Europe/Istanbul" })}</p>
            </div>
          </div>
        </div>
      `,
      text: `
WOOWCODE İletişim Formu

Gönderen Bilgileri:
- İsim Soyisim: ${firstName} ${lastName}
- E-posta: ${email}
- Telefon: ${phone}
- Konu: ${subject}

Mesaj:
${message}

---
Bu e-posta WOOWCODE web sitesi iletişim formu üzerinden gönderilmiştir.
Tarih: ${new Date().toLocaleString("tr-TR", { timeZone: "Europe/Istanbul" })}
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "E-posta gönderilemedi. Lütfen daha sonra tekrar deneyin." },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data);

    return NextResponse.json(
      { message: "E-posta başarıyla gönderildi" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email gönderme hatası:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error details:", errorMessage);
    
    return NextResponse.json(
      { error: "E-posta gönderilemedi. Lütfen daha sonra tekrar deneyin." },
      { status: 500 }
    );
  }
}

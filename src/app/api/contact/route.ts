import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // 1️⃣ Leer y loguear el body de la request
    const body = await request.json();
    console.log('Request body received:', body);

    const { name, email, message } = body;

    if (!name || !email || !message) {
      console.warn('Campos faltantes en el formulario');
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios' },
        { status: 400 }
      );
    }

    // 2️⃣ Validar email y log
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.warn('Email inválido:', email);
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // 3️⃣ Verificar API key
    console.log('RESEND_API_KEY presente:', process.env.RESEND_API_KEY ? '✅' : '❌');
    if (!process.env.RESEND_API_KEY) {
      console.error('No hay API key de Resend configurada');
      return NextResponse.json(
        { error: 'Error de configuración de API key' },
        { status: 500 }
      );
    }

    // 4️⃣ Preparar los datos del email
    const emailData = {
      from: 'Contact Form <noreply@amoniz.dev>',
      to: ['hello@amoniz.dev'],
      replyTo: email,
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Nuevo mensaje desde tu portfolio</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <p><strong>Mensaje:</strong></p>
            <p style="line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
            Este mensaje fue enviado desde el formulario de contacto de amoniz.dev
          </p>
        </div>
      `
    };

    console.log('Datos que se van a enviar a Resend:', {
      from: emailData.from,
      to: emailData.to,
      replyTo: emailData.replyTo,
      subject: emailData.subject
    });

    // 5️⃣ Enviar el email
    const data = await resend.emails.send(emailData);

    console.log('Resend response:', data);

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    // 6️⃣ Captura más detallada de errores
    console.error('Error sending email:', error);
    if (error.response) {
      console.error('Resend response error:', error.response);
    }
    return NextResponse.json(
      { error: 'Error al enviar el mensaje', details: error.message || error },
      { status: 500 }
    );
  }
}

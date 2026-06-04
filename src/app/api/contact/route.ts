import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const cpf = formData.get("cpf") as string;
    const tel = formData.get("tel") as string;
    const date = formData.get("date") as string;

    const image = formData.get("image") as File | null;

    let attachment;

    if (image) {
      const bytes = await image.arrayBuffer();

      attachment = {
        filename: image.name,
        content: Buffer.from(bytes),
      };
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,

      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,

      to: "tiago.chocosex@gmail.com",

      subject: "Novo formulário",

      html: `
        <h2>Novo contato</h2>

        <p><b>Nome:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>CPF:</b>${cpf}</p>
        <p><b>Telefone:</b>${tel}</p>
        <p><b>Data de Nascimento:</b>${date}</p>
      `,

      attachments: attachment
        ? [attachment]
        : [],
    });

    return Response.json({
      message: "Email enviado",
    });

  } catch {
    return Response.json(
      {
        message: "Erro ao enviar",
      },
      {
        status: 500,
      }
    );
  }
}
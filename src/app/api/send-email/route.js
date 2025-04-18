import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  const formData = await req.formData();
  const files = formData.getAll("file");
  const name = formData.get("from_name");
  const email = formData.get("from_email");
  const tel = formData.get("from_phone");

  if (!files || files.length === 0) {
    return NextResponse.json({ message: "Nie przesłano żadnego pliku." });
  }

  if (files && files.length > 15) {
    return NextResponse.json({
      message: "Przekroczono maksymalna liczbe plikow",
    });
  }

  let arrayFiles = [];

  for (const file of files) {
    const tempDirPath = "/tmp/uploads";
    const tempFilePath = path.join(tempDirPath, file.name);

    if (!fs.existsSync(tempDirPath)) {
      fs.mkdirSync(tempDirPath, { recursive: true });
    }
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(tempFilePath, fileBuffer);

    arrayFiles.push({
      filename: file.name,
      path: tempFilePath,
    });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: true,
    port: 465,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_TOKEN,
    },
  });

  const mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL_USER,
    to: process.env.NEXT_PUBLIC_EMAIL_USER, // Adres docelowy
    subject: `Oferta ${email}`,
    text: `Wiadomość z załącznikiem od Imie:${name} / email:${email} / numer:${tel}
  
  `,
    attachments: arrayFiles,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "E-mail wysłany pomyślnie" });
  } catch (error) {
    return NextResponse.json(
      { message: "Błąd przy wysyłaniu e-maila", error: error.message },
      { status: 500 }
    );
  }
}

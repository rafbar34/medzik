import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { NextResponse } from "next/server";

export const config = {
  api: {
    bodyParser: false, 
  },
};

export async function POST(req) {

  const formData = await req.formData();
  const file = formData.get('file');
  if (!file) {
    return NextResponse.json({ message: 'Nie przesłano żadnego pliku.' });
  }
  const tempDirPath = path.join(__dirname, 'uploads'); 
  const tempFilePath = path.join(tempDirPath, file.name);

 
  if (!fs.existsSync(tempDirPath)) {
    fs.mkdirSync(tempDirPath, { recursive: true }); 
  }

  const fileBuffer = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(tempFilePath, fileBuffer);


  fs.writeFileSync(tempFilePath, fileBuffer);
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host:'stmp.gmail.com',
      port:465,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_TOKEN, 
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Adres docelowy
      subject: 'Załącznik z formularza',
      text: 'Wiadomość z załącznikiem.',
      attachments: [
        {
          filename: file.name, 
          path: tempFilePath,
        },
      ],
    };

    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: 'E-mail wysłany pomyślnie' });
    } catch (error) {
      return NextResponse.json({ message: 'Błąd przy wysyłaniu e-maila', error: error.message }, { status: 500 });
    }
};

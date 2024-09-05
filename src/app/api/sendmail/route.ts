import { sendMail } from "@/utils/mail.utils";
import mailler from "./_mail";

export interface ContactFormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const { firstname, lastname, email, phone, message }: ContactFormData =
      await req.json();

    const result = await sendMail({
      subject: "You have a visit on your website.",
      html: mailler({ firstname, lastname, email, phone, message }),
    });

    return Response.json(
      { message: "Email has been sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in POST route:", error);
    return Response.json(
      { message: error },
      { status: 500 }
    );
  }
}

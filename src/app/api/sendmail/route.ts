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
  const { firstname, lastname, email, phone, message }: ContactFormData =
    await req.json();

  try {
    const result = await sendMail({
      subject: "You have a visit on your website.",
      message: mailler({ firstname, lastname, email, phone, message }),
    });

    return Response.json(
      {
        message: result,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: "Unable to send email this time, please try again" },
      { status: 500 }
    );
  }
}

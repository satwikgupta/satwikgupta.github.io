import React from "react";
import { ContactFormData } from "./route";

const mailler = ({
  firstname,
  lastname,
  email,
  phone,
  message,
}: ContactFormData) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Form Submission</title>
</head>
<body>
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h1 style="color: #1e312b;">Your portfolio is accessed by ${firstname}</h1>
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
      <tr>
        <th style="padding: 10px; text-align: left; background-color: #f2f2f2; border: 1px solid #ddd;">Name</th>
        <td style="padding: 10px; border: 1px solid #ddd;">${firstname} ${lastname}</td>
      </tr>
      <tr>
        <th style="padding: 10px; text-align: left; background-color: #f2f2f2; border: 1px solid #ddd;">Email</th>
        <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
      </tr>
      <tr>
        <th style="padding: 10px; text-align: left; background-color: #f2f2f2; border: 1px solid #ddd;">Phone No.</th>
        <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
      </tr>
      <tr>
        <th style="padding: 10px; text-align: left; background-color: #f2f2f2; border: 1px solid #ddd; vertical-align: top;">Message</th>
        <td style="padding: 10px; border: 1px solid #ddd; word-wrap: break-word;">${message}</td>
      </tr>
    </table>
  </div>
</body>
</html>`;
};

export default mailler;

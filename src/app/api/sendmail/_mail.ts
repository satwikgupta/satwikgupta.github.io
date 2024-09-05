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
  <html
  dir="ltr"
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <link type="text/css" rel="stylesheet" id="dark-mode-custom-link" />
  <link type="text/css" rel="stylesheet" id="dark-mode-general-link" />
  <style lang="en" type="text/css" id="dark-mode-custom-style"></style>
  <style lang="en" type="text/css" id="dark-mode-native-style"></style>
  <style lang="en" type="text/css" id="dark-mode-native-sheet"></style>

  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="telephone=no" name="format-detection" />
    <title></title>
  </head>
  <body>
    <div dir="ltr" className="es-wrapper-color">
      <table className="es-wrapper" width="100%" cellSpacing="0" cellPadding="0">
        <tbody>
          <tr>
            <td className="esd-email-paddings" valign="top">
              <table
                className="es-content esd-header-popover"
                cellSpacing="0"
                cellPadding="0"
                align="center"
              >
                <tbody>
                  <tr>
                    <td
                      className="esd-stripe"
                      esd-custom-block-id="2123"
                      align="center"
                    >
                      <table
                        className="es-content-body"
                        width="600"
                        cellSpacing="0"
                        cellPadding="0"
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody>
                          <tr>
                            <td
                              className="esd-structure es-p5t es-p5b"
                              esd-general-paddings-checked="false"
                              align="left"
                            >
                              <table
                                width="100%"
                                cellSpacing="0"
                                cellPadding="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      className="es-m-p0r esd-container-frame"
                                      width="124"
                                      valign="top"
                                      align="center"
                                    >
                                      <a
                                        target="_blank"
                                        href="mailto:satwikgupta1801@gmail.com"
                                      >
                                        <img
                                          src="https://suryanshvermon.github.io/my-portfolio/assets/images/avatar-4.png"
                                          alt="Satwik Gupta"
                                          title="Satwik Gupta"
                                          style="display: block"
                                          width="61"
                                        />
                                      </a>
                                    </td>
                                    <td
                                      className="esd-container-frame"
                                      width="456"
                                      align="left"
                                    >
                                      <span
                                        style="
                                          color: #1e312b;
                                          font-weight: normal;
                                          font-size: 26px;
                                        "
                                      >
                                        Your portfolio is accessed by
                                        ${firstname}
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <table
                                width="100%"
                                cellSpacing="0"
                                cellPadding="0"
                                style="
                                  border-collapse: collapse;
                                  margin-bottom: 20px;
                                "
                              >
                                <tr>
                                  <th
                                    style="
                                      padding: 10px;
                                      text-align: left;
                                      background-color: #f2f2f2;
                                      border: 1px solid #ddd;
                                    "
                                  >
                                    Name
                                  </th>
                                  <td
                                    style="
                                      padding: 10px;
                                      border: 1px solid #ddd;
                                    "
                                  >
                                    ${firstname} ${lastname}
                                  </td>
                                </tr>
                                <tr>
                                  <th
                                    style="
                                      padding: 10px;
                                      text-align: left;
                                      background-color: #f2f2f2;
                                      border: 1px solid #ddd;
                                    "
                                  >
                                    Email
                                  </th>
                                  <td
                                    style="
                                      padding: 10px;
                                      border: 1px solid #ddd;
                                    "
                                  >
                                    ${email}
                                  </td>
                                </tr>
                                <tr>
                                  <th
                                    style="
                                      padding: 10px;
                                      text-align: left;
                                      background-color: #f2f2f2;
                                      border: 1px solid #ddd;
                                    "
                                  >
                                    Phone No.
                                  </th>
                                  <td
                                    style="
                                      padding: 10px;
                                      border: 1px solid #ddd;
                                    "
                                  >
                                    ${phone}
                                  </td>
                                </tr>
                                <tr>
                                  <th
                                    style="
                                      padding: 10px;
                                      text-align: left;
                                      background-color: #f2f2f2;
                                      border: 1px solid #ddd;
                                      vertical-align: top;
                                    "
                                  >
                                    Message
                                  </th>
                                  <td
                                    style="
                                      padding: 10px;
                                      border: 1px solid #ddd;
                                      word-wrap: break-word;
                                    "
                                  >
                                    ${message}
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div> </body>`;
};

export default mailler;

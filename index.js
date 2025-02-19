require("dotenv").config();
const http = require("http");
const nodemailer = require("nodemailer");

const server = http.createServer((request, response) => {
  if (request.url !== "/send-mail") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Server is running. Use /send-mail to send an email.");
    return;
  }

  const auth = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const receiver = {
    from: process.env.EMAIL_USER,
    to: "kaustubh@rpainfotech.com",
    subject: "First mail",
    text: "How's your time here",
  };

  auth.sendMail(receiver, (error, emailResponse) => {
    if (error) {
      console.error("Error:", error);
      response.writeHead(500, { "Content-Type": "text/plain" });
      response.end("Email sending failed.");
    } else {
      console.log("Success!");
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.end("Email sent successfully.");
    }
  });
});

server.listen(8080, () => console.log("Server running on port 8080"));

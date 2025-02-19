require("dotenv").config(); // Load environment variables
const http = require("http");
const nodemailer = require("nodemailer");

const server = http.createServer((request, response) => {
  const auth = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 465,
    auth: {
      user: process.env.EMAIL_USER, // Use environment variable
      pass: process.env.EMAIL_PASS, // Use environment variable
    },
  });

  const receiver = {
    from: process.env.EMAIL_USER,
    to: "kstubhie@gmail.com",
    subject: "Node Js Mail Testing!",
    text: "Hello, this is a text mail!",
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

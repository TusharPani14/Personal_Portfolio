const express = require("express");
const router = express.Router();
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const path = require("path");


// server used to send send emails
const app = express();
dotenv.config()
app.use(cors());
app.use(express.json());
app.use("/", router);
const PORT=process.env.PORT||5000
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

//----------------------------Development-----------------------------------

const __dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
  console.log(__dirname1);
  app.use(express.static(path.join(__dirname1, "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running");
  });
}

//----------------------------Development-----------------------------------

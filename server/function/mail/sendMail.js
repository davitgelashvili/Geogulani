const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  const { fullname, 
        email, 
        phonenumber, 
        text, } = req.body;

  if (!email || !phonenumber) {
    return res.status(400).json({ message: "გთხოვ შეავსო ყველა ველი" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    // from: process.env.EMAIL_USER,
    from: email,
    to: process.env.EMAIL_USER,
    subject: "ახალი კონტაქტის განაცხადი",
    replyTo: email,
    text: text,
    html: `
      <p><strong>სახელი:</strong> ${fullname}</p>
      <p><strong>მეილი:</strong> ${email}</p>
      <p><strong>ნომერი:</strong> ${phonenumber}</p>
      <p><strong>ტექსტი:</strong> ${text}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "მაილი გაიგზავნა წარმატებით" });
  } catch (error) {
    console.error("შეცდომა:", error);
    res.status(500).json({ message: "მაილის გაგზავნა ვერ მოხერხდა" });
  }
};

module.exports = { sendMail };

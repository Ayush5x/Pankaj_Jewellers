const nodemailer = require("nodemailer");

function smtpConfigured() {
  return Boolean(
    process.env.SMTP_HOST &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS &&
    process.env.ENQUIRY_RECEIVER_EMAIL
  );
}

async function sendEnquiryEmail(enquiry) {
  if (!smtpConfigured()) {
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: Number(process.env.SMTP_PORT || 587) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.ENQUIRY_RECEIVER_EMAIL,
    subject: `New Jewellery Enquiry - ${enquiry.interest}`,
    text: [
      `Name: ${enquiry.name}`,
      `Phone: ${enquiry.phone}`,
      `Email: ${enquiry.email || "Not provided"}`,
      `Interest: ${enquiry.interest}`,
      `Consultation: ${enquiry.consultationType}`,
      `Message: ${enquiry.message || "Not provided"}`,
      `Submitted: ${enquiry.createdAt}`
    ].join("\n")
  });
}


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendContactMail({ name, email, message }) {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // tumchya inbox var mail yeil
    replyTo: email, // Reply kelyavar visitor kade jaeel
    subject: `New contact form: ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  });
}

module.exports = {sendEnquiryEmail,sendContactMail};
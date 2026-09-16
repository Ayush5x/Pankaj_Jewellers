const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: 2,
      maxlength: 100
    },
    phone: {
      type: String,
      required: [true, "Phone is required"],
      trim: true,
      maxlength: 20
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      maxlength: 150,
      default: ""
    },
    interest: {
      type: String,
      required: [true, "Enquiry type is required"],
      enum: [
        "Bridal jewellery",
        "Engagement ring",
        "Gold jewellery",
        "Diamond jewellery",
        "Silver jewellery",
        "Necklace set",
        "Bangles and bracelets",
        "Daily wear jewellery",
        "Gifting collection",
        "Custom design",
        "Gold exchange or buyback",
        "Repair or resizing"
      ]
    },
    consultationType: {
      type: String,
      required: [true, "Consultation type is required"],
      enum: ["Store Visit", "Phone Call", "WhatsApp"]
    },
    message: {
      type: String,
      trim: true,
      maxlength: 2000,
      default: ""
    },
    status: {
      type: String,
      enum: ["new", "contacted", "closed"],
      default: "new"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);

const Contact = require("../models/Contact");
const { sendEnquiryEmail } = require("../utils/email");


const createContact = async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      interest,
      consultationType,
      message
    } = req.body;

    if (!name || !phone || !interest || !consultationType) {
      return res.status(400).json({
        success: false,
        message: "Name, phone, enquiry type and consultation type are required"
      });
    }

    const enquiry = await Contact.create({
      name,
      phone,
      email: email || "",
      interest,
      consultationType,
      message: message || ""
    });

    // Email notification is optional. The enquiry is still saved if SMTP is not configured.
    try {
      await sendEnquiryEmail(enquiry);
    } catch (emailError) {
      console.error("Email notification failed:", emailError.message);
    }

    res.status(201).json({
      success: true,
      message: "Your enquiry has been submitted successfully",
      enquiry
    });
  } catch (error) {
    console.error(error);

    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: Object.values(error.errors).map((e) => e.message).join(", ")
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to submit enquiry"
    });
  }
};

const getContacts = async (req, res) => {
  try {
    const enquiries = await Contact.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      count: enquiries.length,
      enquiries
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch enquiries"
    });
  }
};

const getContactById = async (req, res) => {
  try {
    const enquiry = await Contact.findById(req.params.id);

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found"
      });
    }

    res.json({ success: true, enquiry });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch enquiry"
    });
  }
};

const updateContactStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!["new", "contacted", "closed"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status"
      });
    }

    const enquiry = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found"
      });
    }

    res.json({
      success: true,
      message: "Enquiry status updated",
      enquiry
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update enquiry"
    });
  }
};

module.exports = {
  createContact,
  getContacts,
  getContactById,
  updateContactStatus
};

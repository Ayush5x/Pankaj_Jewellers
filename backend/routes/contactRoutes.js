const express = require("express");
const {
  createContact,
  getContacts,
  getContactById,
  updateContactStatus
} = require("../controllers/contactController");

const router = express.Router();

// Public contact form
router.post("/", createContact);

// Admin/dashboard APIs
router.get("/", getContacts);
router.get("/:id", getContactById);
router.patch("/:id/status", updateContactStatus);

module.exports = router;

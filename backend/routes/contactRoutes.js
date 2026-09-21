const express = require("express");
const router = express.Router();

const {
  createContact,
  getContacts,
  getContactById,
  updateContactStatus
} = require("../controllers/contactController");

router.post("/", createContact);
router.get("/", getContacts);
router.get("/:id", getContactById);
router.patch("/:id/status", updateContactStatus);

module.exports = router;
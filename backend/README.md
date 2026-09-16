# Jewellery Contact Form Backend

Node.js + Express + MongoDB backend for the contact/enquiry form shown in the UI.

## Form fields

- Name
- Phone
- Email (optional)
- Interest / Enquiry type
- Consultation type: Store Visit, Phone Call, WhatsApp
- Message

## 1. Install

```bash
npm install
```

## 2. Environment

Copy `.env.example` to `.env` and set:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/jewellery_enquiries
FRONTEND_URL=http://localhost:5173
```

SMTP settings are optional. If configured, a notification email is sent whenever a new enquiry is submitted.

## 3. Start

Development:

```bash
npm run dev
```

Production:

```bash
npm start
```

## API

### Submit enquiry

`POST /api/contact`

Example JSON:

```json
{
  "name": "Vishal Barde",
  "phone": "+919876543210",
  "email": "vishal@example.com",
  "interest": "Engagement ring",
  "consultationType": "WhatsApp",
  "message": "I need a custom diamond engagement ring."
}
```

### Get all enquiries

`GET /api/contact`

### Get one enquiry

`GET /api/contact/:id`

### Update enquiry status

`PATCH /api/contact/:id/status`

```json
{
  "status": "contacted"
}
```

Allowed statuses:

- `new`
- `contacted`
- `closed`

## Frontend fetch example

```js
const response = await fetch("http://localhost:5000/api/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name,
    phone,
    email,
    interest,
    consultationType,
    message
  })
});

const data = await response.json();
```

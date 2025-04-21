# XTREET Backend

This is the backend service for **XTREET**, a retail brand focused on urban and streetwear fashion. The backend is built with **Node.js**, **Express**, and **MongoDB**, and currently supports a contact form endpoint that stores user messages.

---

## 🧰 Tech Stack

- **Node.js**
- **Express**
- **MongoDB Atlas**
- **Mongoose**
- **CORS**
- **dotenv**

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the server
```bash
node server.js
```

## 📬 API Endpoints

### POST /api/contact
Request body example:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I love XTREET's vibe!"
}
```

## 📦 Project Structure
```json
backend/
├── models/
│   └── Contact.js        # Mongoose schema for contact messages
├── routes/
│   └── contact.js        # Express router for contact form API
├── .env                  # Environment variables
├── server.js             # Main server file
└── package.json
```

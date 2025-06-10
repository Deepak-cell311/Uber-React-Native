# 🚗 Uber-Clone App

A full-featured ride-hailing application that replicates the core functionality of Uber. This Uber-Clone supports real-time ride requests, GPS-based tracking, fare estimation, and more, designed for both **riders** and **drivers**.

---

## 🧰 Tech Stack

### Frontend
- React Native / Flutter — Cross-platform mobile UI
- Redux / Context API — State management
- Socket.IO / WebSockets — Real-time updates

### Backend
- Node.js + Express — REST API
- MongoDB / PostgreSQL — Database
- Firebase / JWT — Authentication
- Socket.IO — Real-time ride tracking

### Other Integrations
- Google Maps API — Location & routing
- Stripe / Razorpay — Payments
- Firebase Cloud Messaging (FCM) — Push notifications

---

## ✅ Features

### Rider
- 🔐 Secure sign-up/sign-in
- 📍 Real-time map to detect current location
- 🛺 Book a ride to destination
- 💳 Add and manage payments
- ⏱️ Track driver in real-time
- 📝 View ride history and invoices
- ⭐ Rate driver post-trip

### Driver
- 🔐 Secure login
- 📞 Receive ride requests in real-time
- 🗺 Navigate to pickup/drop-off via maps
- 📊 Daily earnings and ride history
- ⭐ Rate passengers

### Admin (Optional)
- 👥 Manage users and drivers
- 🧾 View all rides and earnings
- 📊 Dashboard with analytics

---

## 📁 Project Structure

```bash
uber-clone/
│
├── client/               # Frontend mobile app (React Native / Flutter)
│   ├── assets/
│   ├── components/
│   ├── screens/
│   └── App.js
│
├── server/               # Backend API (Node.js + Express)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── config/               # Environment and API keys
├── .env                  # Sensitive credentials
└── README.md

![Home](https://github.com/user-attachments/assets/e6d3e26f-2a70-4c98-a5ee-eabd0ae9d5c4)
![Map 1](https://github.com/user-attachments/assets/268813f5-96eb-4d0b-a817-4c4410535e4d)
![Map 2](https://github.com/user-attachments/assets/5eba0dae-da60-4725-bcc3-ae7a07b4dc9e)
![Map 3 (2)](https://github.com/user-attachments/assets/e3aa1778-621b-4d2d-82c7-cb6d2a609061)
![Services](https://github.com/user-attachments/assets/d34339bf-0326-4cb4-bf7b-7a27e36e7fc9)
![Activity](https://github.com/user-attachments/assets/06160985-fd1a-4542-95ef-18da8ce277de)
![Account](https://github.com/user-attachments/assets/6b912558-a829-4d89-8186-e570c58e1d43)

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

```
![Home](https://github.com/user-attachments/assets/c68ebf53-a515-4221-8858-3d0a68558cdb)
![Map 1](https://github.com/user-attachments/assets/15317d2f-ff72-43c9-952d-b51bae530138)
![Map 2](https://github.com/user-attachments/assets/6a1f6dfd-c2d8-4367-88e6-931cdf4aa712)
![Map 3 (2)](https://github.com/user-attachments/assets/ead5784c-312b-4807-8d7d-c7a3cf164a8e)
![Services](https://github.com/user-attachments/assets/3a80c478-1cdc-44bf-ad83-a4431aee89a3)
![Activity](https://github.com/user-attachments/assets/c83905e4-4596-4e44-ad3b-979ce6d98897)
![Account](https://github.com/user-attachments/assets/6725ac63-712d-46a8-9451-304b81d431ef)

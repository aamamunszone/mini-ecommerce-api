<div align="center">

# 🛒 Mini E-Commerce API

### Production-Ready Backend for Digital Commerce

[![Node.js](https://img.shields.io/badge/Node.js-v18+-green?style=flat-square&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?style=flat-square&logo=mongodb)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express.js-Framework-blue?style=flat-square&logo=express)](https://expressjs.com/)
[![JWT](https://img.shields.io/badge/JWT-Auth-orange?style=flat-square)](https://jwt.io/)

**[📖 Live Demo](https://mini-ecommerce-api-aamamunszone.vercel.app) • [🐛 Report Bug](https://github.com/aamamunszone/mini-ecommerce-api/issues) • [✨ Request Feature](https://github.com/aamamunszone/mini-ecommerce-api/issues)**

</div>

---

## 🎯 Overview

A robust e-commerce backend built with **MERN stack** that handles real-world production challenges - not just another CRUD tutorial. This API implements secure authentication, role-based access control, atomic inventory management, and server-side validation to prevent price manipulation.

### 💡 What Makes It Different

- **Server-Side Price Validation** – All checkout prices fetched from database to prevent client-side tampering
- **Atomic Stock Management** – Race condition handling ensures no overselling
- **Persistent Shopping Cart** – Cross-device cart synchronization stored in MongoDB
- **Role-Based Authorization** – Separate permissions for Admin and Customer workflows
- **Production-Ready Security** – JWT authentication, bcrypt password hashing, CORS protection

---

## ✨ Key Features

| Feature                   | Description                                                             |
| ------------------------- | ----------------------------------------------------------------------- |
| 🔐 **JWT Authentication** | Secure, stateless user sessions with token-based auth                   |
| 👥 **Role-Based Access**  | Admin (manage inventory) vs Customer (shopping & orders)                |
| 🛒 **Smart Cart System**  | Persistent storage with automatic quantity merging                      |
| 📦 **Intelligent Orders** | Server validates prices, checks stock, and atomically updates inventory |
| 🔒 **Security First**     | Bcrypt hashing, environment variables, middleware guards                |

---

## 🚀 Quick Start

### Prerequisites

- Node.js v18+
- MongoDB Atlas account or local MongoDB
- Postman (for API testing)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/aamamunszone/mini-ecommerce-api.git
cd mini-ecommerce-api

# 2. Install dependencies
npm install

# 3. Create .env file
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret

# 4. Start the server
npm run dev  # Development
npm start    # Production
```

### Environment Variables

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_strong_secret_key
JWT_EXPIRE=7d
NODE_ENV=development
```

---

## 🔌 API Endpoints

### Authentication

| Method | Endpoint             | Access  | Description              |
| ------ | -------------------- | ------- | ------------------------ |
| POST   | `/api/auth/register` | Public  | Register new user        |
| POST   | `/api/auth/login`    | Public  | Login & get JWT token    |
| GET    | `/api/auth/profile`  | Private | Get current user details |

### Products

| Method | Endpoint            | Access | Description        |
| ------ | ------------------- | ------ | ------------------ |
| GET    | `/api/products`     | Public | Get all products   |
| POST   | `/api/products`     | Admin  | Create new product |
| PUT    | `/api/products/:id` | Admin  | Update product     |
| DELETE | `/api/products/:id` | Admin  | Delete product     |

### Shopping Cart

| Method | Endpoint        | Access   | Description          |
| ------ | --------------- | -------- | -------------------- |
| POST   | `/api/cart`     | Customer | Add/update cart item |
| GET    | `/api/cart`     | Customer | Get user's cart      |
| DELETE | `/api/cart/:id` | Customer | Remove cart item     |

### Orders

| Method | Endpoint               | Access   | Description              |
| ------ | ---------------------- | -------- | ------------------------ |
| POST   | `/api/orders`          | Customer | Create order (checkout)  |
| GET    | `/api/orders/myorders` | Customer | Get user's order history |

> 📦 **Postman Collection**: Import the [collection.json](./collection.json) file from the root directory into Postman to quickly test all API endpoints with pre-configured requests.

---

## 🏗️ Project Structure

```
mini-ecommerce-api/
├── config/              # Database configuration
├── controllers/         # Request handling logic
├── middleware/          # Auth & admin guards
├── models/              # MongoDB schemas (User, Product, Cart, Order)
├── routes/              # API route definitions
├── utils/               # Helper functions (token generation, etc.)
├── collection.json      # Postman API collection
├── .env                 # Environment variables (create this)
├── server.js            # Application entry point
└── README.md
```

---

## 🔐 Security Implementation

### Multi-Layer Protection

1. **Authentication Middleware** (`protect`) – Verifies JWT on every private route
2. **Authorization Middleware** (`admin`) – Ensures only admins access inventory management
3. **Password Security** – Bcrypt with salt rounds for secure hashing
4. **Data Integrity** – Server-side price calculation prevents tampering

### Example: Order Processing Flow

```javascript
// What happens when a customer places an order:
1. Validate JWT token → Authenticate user
2. Fetch current prices from DB → Prevent price manipulation
3. Check stock availability → Ensure items in stock
4. Calculate total server-side → No client control
5. Create order & atomically update inventory → Transaction safety
```

---

## 🛠️ Tech Stack

- **Runtime**: Node.js v18+
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (jsonwebtoken)
- **Security**: Bcrypt for password hashing
- **Validation**: Express middleware & Mongoose schemas

---

## 📖 API Response Format

### Success Response

```json
{
  "success": true,
  "data": {
    /* response data */
  }
}
```

### Error Response

```json
{
  "success": false,
  "error": "Error message here"
}
```

### Common Status Codes

- `200` – Success
- `201` – Created
- `400` – Bad Request
- `401` – Unauthorized
- `403` – Forbidden
- `404` – Not Found
- `500` – Server Error

---

## 🧪 Testing

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage
```

---

## 🤝 Contributing

Contributions welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📝 License

This project is licensed under the [MIT License](./LICENSE).

---

## 👨‍💻 Developer

<div align="center">

**Abdullah Al Mamun**  
_Full Stack Developer | MERN Stack Specialist_

[![GitHub](https://img.shields.io/badge/GitHub-aamamunszone-black?style=flat-square&logo=github)](https://github.com/aamamunszone)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat-square&logo=linkedin)](https://linkedin.com/in/aamamunszone)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-green?style=flat-square)](https://aamamunszone.vercel.app)

Building production-ready systems that solve real-world problems.

---

**⭐ If you find this helpful, please star the repository!**

Made with ❤️ and ☕ by [Abdullah Al Mamun](https://github.com/aamamunszone)

</div>

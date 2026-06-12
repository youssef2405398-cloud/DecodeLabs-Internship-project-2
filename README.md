# DecodeLabs Internship Project 2 - Backend API Development

## Overview

This project is a RESTful API developed using Node.js and Express.js as part of the DecodeLabs Internship Program.

The API follows a simple MVC (Model-View-Controller) architecture and demonstrates fundamental backend development concepts including:

- Express server setup
- Routing
- Controllers
- Models
- JSON request handling
- REST API design
- Data validation
- Error handling

Currently, user data is stored in memory and can be accessed through API endpoints.

---

## Features

- Retrieve all users
- Retrieve a user by ID
- Create a new user
- Request logging middleware
- Input validation
- Proper HTTP status codes
- MVC project structure

---

## Technologies Used

- Node.js
- Express.js
- JavaScript (ES6)

---

## Project Structure

```text
DecodeLabs-Internship-project-2/
│
├── app.js
│
├── routes/
│   └── userRoutes.js
│
├── controllers/
│   └── userController.js
│
├── models/
│   └── userModel.js
│
├── package.json
└── README.md
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/youssef2405398-cloud/DecodeLabs-Internship-project-2.git
```

### Navigate into the project folder

```bash
cd DecodeLabs-Internship-project-2
```

### Install dependencies

```bash
npm install
```

---

## Running the Application

Start the server:

```bash
npm start
```

The server will run on:

```text
http://localhost:3000
```

---

## API Endpoints

### Base URL

```text
http://localhost:3000/api
```

---

### Get All Users

**Request**

```http
GET /api/users
```

**Response**

```json
[
  {
    "id": 1,
    "firstName": "Youssef",
    "role": "Web Development Intern"
  },
  {
    "id": 2,
    "firstName": "Martina",
    "role": "Nervous System Engineer"
  }
]
```

---

### Get User By ID

**Request**

```http
GET /api/users/1
```

**Response**

```json
{
  "id": 1,
  "firstName": "Youssef",
  "role": "Web Development Intern"
}
```

---

### Create New User

**Request**

```http
POST /api/users
Content-Type: application/json
```

Body:

```json
{
  "firstName": "Ahmed",
  "role": "Backend Intern"
}
```

**Response**

```json
{
  "id": 3,
  "firstName": "Ahmed",
  "role": "Backend Intern"
}
```

---

## Validation Rules

The API validates incoming data before creating a user.

Required fields:

- `firstName`

If the field is missing or empty, the API returns:

```json
{
  "error": "Validation failed: 'firstName' field is mandatory and cannot be empty."
}
```

---

## Middleware

A custom logging middleware records incoming requests:

```javascript
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] Data Ingress at ${req.method} ${req.url}`);
    next();
});
```

This helps monitor API activity during development.

---

## Root Endpoint

Access:

```http
GET /
```

Response:

```json
{
  "status": "Online",
  "track": "Full Stack Project 2: Backend API Development",
  "integrityCheck": "Stable"
}
```

---

## Learning Objectives

This project demonstrates:

- Express.js fundamentals
- RESTful API development
- MVC architecture
- Route management
- Controller logic separation
- Model abstraction
- Request validation
- Error handling best practices

---

## Future Improvements

- MongoDB integration
- Persistent database storage
- Update user endpoint (PUT)
- Delete user endpoint (DELETE)
- Authentication & Authorization
- Environment variable support
- Unit testing

---

## Author

**Youssef**

DecodeLabs Internship Program
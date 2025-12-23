# Personal Portfolio Backend

A lightweight backend service built to support my personal portfolio website, responsible for handling contact form submissions securely and reliably.

---

## 🚀 Project Overview

This backend powers the **Contact Me** feature of my personal portfolio. It provides a REST API that receives messages submitted from the frontend, validates the input, and processes the request server-side.

The project focuses on clean API design, secure frontend–backend communication, and real-world deployment practices.

---

## 🛠️ Tech Stack

- **Node.js** – JavaScript runtime environment  
- **Express.js** – Framework for building RESTful APIs  
- **CORS** – Secure cross-origin request handling  
- **JSON** – Data exchange format between frontend and backend  

---

## ✨ Key Features

- REST API endpoint for contact form submissions  
- Input validation for name, email, and message fields  
- Secure CORS configuration for deployed frontend domains  
- Minimal and maintainable server architecture  
- Production-ready deployment configuration  

---

## 📌 API Endpoints

### Health Check

- GET / --> Response :- Backend is running
- Purpose:
 • Used to verify that the backend server is running
 • Helpful for deployment and uptime checks
 • Returns a simple confirmation message

---

### Contact Form Submission

- POST /contact 

**Request Body (JSON):**
{
  "name": "User Name",
  "email": "user@example.com",
  "message": "Message content"
}

- Success response :- 
{
  "success": true,
  "message": "Message received successfully"
}

- Error response :- 
{
  "success": false,
  "message": "All fields are required"
}

- Purpose:
	•	Receives contact form data from the frontend
	•	Validates user input before processing
	•	Enables frontend–backend communication

##  CORS Configuration

The backend explicitly allows requests only from approved frontend domains.
This ensures secure browser-based communication and prevents unauthorized cross-origin access.

## Deployment
	•	Deployed on Render
	•	Uses environment-based port configuration
	•	Automatically redeploys on GitHub updates
	•	Designed to work seamlessly with a separately deployed frontend

## Project Structure
backend/
├── server.js
├── package.json
├── package-lock.json
└── README.md

## Running Locally 
	1. Clone the repository
    2. Install dependencies:- npm install
    3. Start the server:- node server.js
    4. Server runs on:- http://localhost:3001

##  Purpose of This Project
This backend demonstrates:
	•	Practical understanding of REST API development
	•	Secure frontend–backend integration
	•	Real-world debugging and deployment experience
	•	Ability to write clean, maintainable server-side code

## Related Project
	•	Frontend: Personal Portfolio Website
	•	Frontend Tech: HTML, CSS, JavaScript
	•	Backend Role: Handles contact form submissions

## Author 
Ashok Kaji [IIIT Lucknow]
Computer Science Undergraduate
Aspiring Full-Stack Developer
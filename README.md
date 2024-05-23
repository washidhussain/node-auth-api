# node-auth-api
Node.js RESTful API for user authentication and management. This API provides endpoints for user registration, login, logout, and retrieving user profiles. It uses JWT (JSON Web Tokens) for authentication and MongoDB as the database for storing user data. 
# Node.js User Authentication API

This Node.js application provides a RESTful API for user authentication and management. It includes endpoints for user registration, login, logout, and retrieving user profiles. JWT (JSON Web Tokens) is used for authentication, and MongoDB is used as the database for storing user data.

## Features

- User registration: Allows users to sign up by providing username, email, and password.
- User login: Allows registered users to log in using their credentials (username/email and password).
- User logout: Logs out the authenticated user.
- Get user profile: Retrieves the profile information of the authenticated user.
- Input validation: Validates input data to ensure proper data integrity.
- Error handling: Properly handles errors and provides informative error messages.
- JWT authentication: Uses JWT tokens for authentication, ensuring secure user access.
- Scalable and performant: Designed with scalability and performance considerations in mind.

# Node.js User Authentication API

This Node.js application provides a RESTful API for user authentication and management. It includes endpoints for user registration, login, logout, and retrieving user profiles. JWT (JSON Web Tokens) is used for authentication, and MongoDB is used as the database for storing user data.

## Installation

```bash
# 1. Clone the repository:
git clone https://github.com/your-username/node-authentication-api.git

# 2. Install dependencies:
cd node-authentication-api
npm install

# 3. Set environment variables:
# Create a `.env` file in the root directory and add the following:
# JWT_SECRET=your-secret-key

# 4. Start the server:
npm start




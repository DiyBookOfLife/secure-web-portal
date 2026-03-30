# Secure Web Portal API

A secure backend API built with Express and MongoDB that allows users to register, log in (local & GitHub OAuth), and manage private bookmarks. Features JWT authentication, protected routes, and user-based authorization to ensure data security.

## Tech Stack

- Node.js
- Express
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- bcrypt
- Passport + GitHub OAuth
- dotenv

## Features

- User registration & login (email/password)
- GitHub OAuth authentication
- JWT-based authentication
- Protected routes (only logged-in users)
- Full CRUD for bookmarks
- User-specific authorization (users can only access their own data)

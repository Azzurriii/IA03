# IA03 - User Registration System

A complete User Registration System with a NestJS backend and React frontend.

## 🚀 Features

- **Backend (NestJS)**
  - RESTful API with TypeORM and SQLite
  - User registration with email validation
  - Password hashing with bcrypt
  - CORS enabled for frontend communication
  - Input validation with class-validator
  - Error handling with meaningful messages

- **Frontend (React)**
  - Modern UI with Tailwind CSS
  - React Router for navigation
  - React Query for API state management
  - React Hook Form for form validation
  - Responsive design
  - Real-time validation feedback

## 📋 Requirements

- Node.js (v18 or higher)
- npm or yarn

## 🛠️ Installation & Setup

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. The application uses SQLite, so no additional database setup is required. The database file will be created automatically.

4. Start the development server:
```bash
npm run start:dev
```

The backend will run on `http://localhost:3000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## 🎯 Usage

1. Open your browser and go to `http://localhost:5173`
2. Click on "Sign Up" to create a new account
3. Fill in the registration form with:
   - A valid email address
   - A password (minimum 6 characters)
   - Password confirmation
4. Submit the form to register
5. Upon successful registration, you'll be redirected to the login page

## 📁 Project Structure

```
IA03/
├── backend/
│   ├── src/
│   │   ├── user/
│   │   │   ├── dto/
│   │   │   │   └── create-user.dto.ts
│   │   │   ├── user.entity.ts
│   │   │   ├── user.controller.ts
│   │   │   ├── user.service.ts
│   │   │   └── user.module.ts
│   │   ├── app.module.ts
│   │   └── main.ts
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── user.ts
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── SignUp.tsx
│   │   │   └── Login.tsx
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── package.json
└── README.md
```

## 🔌 API Endpoints

### POST /user/register

Register a new user.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Success Response (201):**
```json
{
  "message": "User registered successfully",
  "user": {
    "email": "user@example.com",
    "createdAt": "2025-10-29T12:00:00.000Z"
  }
}
```

**Error Response (409):**
```json
{
  "statusCode": 409,
  "message": "Email already exists"
}
```

## 🎨 Technologies Used

### Backend
- NestJS - Progressive Node.js framework
- TypeORM - ORM for TypeScript
- SQLite - Lightweight database
- bcrypt - Password hashing
- class-validator - Validation decorators

### Frontend
- React - UI library
- TypeScript - Type-safe JavaScript
- React Router - Client-side routing
- React Query - API state management
- React Hook Form - Form handling
- Tailwind CSS - Utility-first CSS framework
- Axios - HTTP client
- Vite - Build tool

## 🔒 Security Features

- Password hashing with bcrypt (10 salt rounds)
- Email uniqueness validation
- Input validation and sanitization
- CORS configuration
- Environment variable support

## 🚀 Deployment

### Backend Deployment

For production deployment, build the backend:
```bash
cd backend
npm run build
npm run start:prod
```

### Frontend Deployment

Build the frontend for production:
```bash
cd frontend
npm run build
```

The built files will be in the `dist` directory and can be deployed to any static hosting service (Vercel, Netlify, etc.).

## 📝 Environment Variables

### Backend (.env)
```
PORT=3000
FRONTEND_URL=http://localhost:5173
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:3000
```

## 🧪 Testing

The login page is currently a UI demonstration without backend implementation. The registration functionality is fully implemented and functional.

## 👨‍💻 Development

- Backend runs on port 3000
- Frontend runs on port 5173
- SQLite database file: `backend/database.sqlite`

## 📄 License

This project is for educational purposes (IA03 assignment).

## 🤝 Contributing

This is an assignment project. Contributions are not expected.

## 📞 Support

For any issues or questions, please refer to the assignment documentation or contact your instructor.


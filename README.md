# EduOnline

EduOnline is an online learning platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Firebase as the backend for authentication and real-time database functionalities. This platform offers various courses, interactive learning materials, and a user-friendly interface for both students and instructors.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization using Firebase
- Real-time database updates with Firebase Firestore
- Course management (create, read, update, delete)
- Interactive learning materials (videos, quizzes, assignments)
- User-friendly dashboard for students and instructors
- Responsive design for various devices

## Tech Stack

- **Frontend:**
  - React.js
  - Redux (for state management)
  - React Router (for navigation)
  - Material-UI (for UI components)

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (database)
  - Firebase (authentication and real-time database)

- **Other Tools and Libraries:**
  - Axios (for HTTP requests)
  - Firebase SDK
  - Mongoose (for MongoDB object modeling)
  - dotenv (for environment variables)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Saurabh2Devloper/codeit_online_Learning.git
    cd codeit_online_Learning
    ```

2. **Install dependencies for both frontend and backend:**

    ```bash
    # Install backend dependencies
    cd backend
    npm install

    # Install frontend dependencies
    cd ../frontend
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the `backend` directory and add the following:

    ```env
    PORT=5000
    MONGO_URI=your_mongodb_uri
    FIREBASE_API_KEY=your_firebase_api_key
    FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    FIREBASE_PROJECT_ID=your_firebase_project_id
    FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    FIREBASE_APP_ID=your_firebase_app_id
    ```

4. **Run the development server:**

    ```bash
    # Start the backend server
    cd backend
    npm run dev

    # Start the frontend server
    cd ../frontend
    npm start
    ```

    The application should now be running on `http://localhost:3000` (frontend) and `http://localhost:5000` (backend).

## Usage

1. **Register and login:**
   - Users can register for a new account or log in with an existing account using Firebase authentication.

2. **Explore courses:**
   - Browse available courses, view course details, and enroll in courses.

3. **Interactive learning:**
   - Engage with course materials including videos, quizzes, and assignments.

4. **Instructor dashboard:**
   - Instructors can create, update, and delete courses, as well as manage enrolled students.

## Contributing

We welcome contributions from the community! If you'd like to contribute to EduOnline, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

Please make sure to update tests as appropriate.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Repo Link

[EduOnline GitHub Repository](https://github.com/Saurabh2Devloper/codeit_online_Learning)

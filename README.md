# To-Do Application

This is a simple to-do application. The application allows users to perform CRUD operations (Create, Read, Update, Delete) on tasks. The front end is built with React, the back end with Node.js, Express.js as the Node framework, MongoDB as the database, and Mongoose as the ORM.

## Features

- **Home Page**: Displays all tasks with options to create, update, and delete tasks.
- **Create Task**: Navigate to a task creation form by clicking the "Create Task" button. The form collects the title, description, status. After filling all details, click the "Create task" button to create a new task.
- **Update Task**: Each task card has an "Update" button. Clicking this navigates to an update form pre-filled with the task's data. After editing, click the "Update the task" button to save changes.
- **Delete Task**: Each task card has a "Delete" button to remove the task from the list.

## Technology Stack

- **Frontend**: React
- **Backend**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **ORM**: Mongoose

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB instance running locally or remotely

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Vishnu844/Todo-application.git
   cd todo-app

   ```

2. **Install Backend Dependencies**

   ```bash
   cd backend
   npm install

   ```

3. **Install Frontend Dependencies**

   ```bash
   cd ..
   npm install
   ```

### Configuration

1. **Backend Configuration**

   Create a `.env` file in the `backend` directory and add the following:

   ```plaintext
   PORT=2222
   MONGO_URI=your_mongodb_connection_string
   ```

### Running the Application

1. Start the backend server

   ```bash
   cd backend
   npm start
   ```

The backend server will start on http://localhost:2222.

2. Start the Frontend development server

   ```bash
   cd ..
   npm run dev
   ```

The frontend will start on http://localhost:5173

### Usage

1. **Home Page**

- The home page displays a list of all tasks.
- Click the "Create Task" button to navigate to the task creation form.

2. **Create Task**

- Fill out the form with the task title, description, status, and due date.
- Click "Create Task" to add the new task.

3. **Update Task**

- Click the "Update" button on the task card to navigate to the update form.
- Edit the task details and click "Update the Task" to save changes.

4. **Delete Task**

- Click the "Delete" button on the task card to remove the task.

## Project Structure

```plaintext
todo-app/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── index.js
│   ├── package-lock.json
|   ├── package.json
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
|   ├── utils/
│
├── App.css
├── App.jsx
├── index.css
├── main.jsx
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

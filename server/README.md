# Task Manager Backend

A simple Express.js backend for a task manager application with CORS and JSON middleware support.

## Features

- ✅ Express.js server running on port 3000
- ✅ CORS enabled for cross-origin requests
- ✅ JSON middleware for request body parsing
- ✅ In-memory task storage
- ✅ RESTful API endpoints for task management

## Installation

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Server

### Development (with auto-reload):
```bash
npm run dev
```

### Production:
```bash
npm start
```

The server will start on `http://localhost:3000`

## API Endpoints

### Get all tasks
```
GET /api/tasks
```

### Get a single task
```
GET /api/tasks/:id
```

### Create a new task
```
POST /api/tasks
Content-Type: application/json

{
  "title": "Task title",
  "description": "Task description (optional)"
}
```

### Update a task
```
PUT /api/tasks/:id
Content-Type: application/json

{
  "title": "Updated title (optional)",
  "description": "Updated description (optional)",
  "completed": true/false (optional)
}
```

### Delete a task
```
DELETE /api/tasks/:id
```

### Health check
```
GET /health
```

## Project Structure

```
server/
├── server.js          # Main server file
├── package.json       # Dependencies and scripts
├── .gitignore        # Git ignore rules
└── README.md         # This file
```

## Notes

- Tasks are stored in memory, so they will be lost when the server restarts
- Default sample tasks are included on startup
- All responses are in JSON format

Non-Linear Video Session Backend
Overview
This project is a backend system for managing non-linear video sessions, built with NestJS and MongoDB.

Design Choices
Framework: NestJS for its modular architecture.
Language: TypeScript for type safety.
Database: MongoDB for flexible schema management.
Security: JWT for authentication.
System Architecture
Controller Layer: Handles HTTP requests.
Service Layer: Contains business logic.
Data Access Layer: Interacts with MongoDB using Mongoose.
Middleware: Manages logging and authentication.
API Endpoints
Create Video Session

POST /api/sessions
Request:
json
Copy code
{
  "title": "string",
  "description": "string"
}
Response:
json
Copy code
{
  "id": "string",
  "title": "string",
  "description": "string",
  "createdAt": "string"
}
Add Event to Session

POST /api/sessions/:id/events
Request:
json
Copy code
{
  "type": "string",
  "timestamp": "string",
  "data": "object"
}
Response:
json
Copy code
{
  "eventId": "string",
  "type": "string",
  "timestamp": "string",
  "data": "object"
}
Get Video Session

GET /api/sessions/:id
Response:
json
Copy code
{
  "id": "string",
  "title": "string",
  "description": "string",
  "events": [
    {
      "eventId": "string",
      "type": "string",
      "timestamp": "string",
      "data": "object"
    }
  ]
}
Delete Video Session

DELETE /api/sessions/:id
Response:
json
Copy code
{
  "message": "Session deleted successfully."
}
Run Instructions
Clone the Repository:

sh
Copy code
git clone <repository-url>
cd video-session-backend
Install Dependencies:

sh
Copy code
npm install
Set Up Environment Variables:

Create a .env file in the root directory.
Add the following:
env
Copy code
MONGODB_URI=mongodb://localhost:27017/video-session
JWT_SECRET=your_jwt_secret
Start the Server:

sh
Copy code
npm run start
Access the API:

The API will be accessible at http://localhost:3000.
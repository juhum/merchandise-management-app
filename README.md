# Goods Management Application

This is a web application for managing goods, built with Vue.js for the frontend and Node.js with Express for the backend. The application allows users to view the state of goods, add new goods, and edit notes for goods that are not in the 'free' state.

## Features

- View a list of goods with their status
- View details of individual goods
- Add new goods
- Edit notes for goods that are not in the 'free' state
- Pagination and items per page selection

## Requirements

- Node.js
- PostgreSQL

## Setup

### Backend

1. Clone the repository:

   ```sh
   git clone https://github.com/juhum/merchandise-management-app.git
   cd merchandise-management-app

2. Install dependencies:
    npm install

3. Create a config.json file in the root directory with the following content:
```json
{
    "port": 5000,
    "frontend": "./frontend/dist",
    "db": {
        "user": "your_db_user",
        "password": "your_db_password",
        "host": "localhost",
        "port": 5432,
        "database": "postgres"
    }
}
```

5. Run sql scripts

6. Start the backend server:
node server.js

### Frontend

1. Navigate to the frontend directory:
cd frontend

2. Install dependencies:
npm install

3. Start the frontend development server:
npm run serve

4. Open your web browser and navigate to http://localhost:8080.


## Usage
Home Page: View a list of goods with their status.
Item Details: Click on an item to view its details.
Edit Notes: If the item is not in the 'free' state, click the "Edit Notes" link to edit the notes.

# Full Stack Application Setup (Frontend + Backend)

## Frontend Setup

1. Navigate to the frontend directory:
   cd frontend

2. Install dependencies:
   npm install

   Note: If you encounter dependency conflicts, use:
   npm install --legacy-peer-deps

3. Start the frontend development server:
   npm start

4. Access the frontend application:
   Open your browser and go to http://localhost:3000

-----

## Backend Setup

1. Navigate to the backend directory:
   cd backend

2. Install dependencies:
   npm install

3. Set up environment variables:
   Create a file named '.env' in the 'backend' directory and add the following:

    MONGO_URI=mongodb://localhost:27017/rms
    PORT=5000

    GOOGLE_CLIENT_ID=872195979745-v2otegricmipgm03ll65gct28astlb7q.apps.googleusercontent.com

    EMAIL_USER=rajthanusan08@gmail.com
    EMAIL_PASS=gjfi fuas wekw lmwd 

    SENDER_EMAIL=rajthanusan08@gmail.com

   Replace the placeholder values in '.env' with your actual MongoDB connection string, 
   Google Client ID, email credentials, and sender email.


4. Start the backend development server:
   npm run dev

5. Access the backend:
   The server will run on http://localhost:5000

---

## Running Both Frontend and Backend Together

1. Open two terminal windows or tabs.

2. In the first terminal:
   Navigate to 'frontend' and start the frontend server:
   cd frontend
   npm start

3. In the second terminal:
   Navigate to 'backend' and start the backend server:
   cd backend
   npm run dev

4.To configure the backend URL in the frontend, follow these steps:

    Open the frontend/package.json file.
    Find the "proxy" field in the file.
    Update the "proxy" field with the correct backend URL and port.

    For example, if your backend is running on http://localhost:5000, 
    it should look like this:
    "proxy": "http://localhost:5000"

    If you change the backend port, make sure to update the proxy field with the new port:
    "proxy": "http://localhost:NEW_PORT"

---

## Common Issues and Solutions

1. Dependency Errors:
   Use:
   npm install --legacy-peer-deps

2. Port Conflicts:
   Frontend uses port 3000 by default. Update the 'start' script in 'frontend/package.json' to change it.
   Backend uses port 5000 by default. Change the 'PORT' variable in the '.env' file if needed.

3. Missing '.env' File:
   Ensure you create the '.env' file in the 'backend' directory with the correct variables.

---

## Support

For any issues, contact [rajthanusan08@gmail.com].

# Final Project TGL

## HorseTrack
![image](https://github.com/paulajimenezt/final-project/assets/139513326/c3c1d42c-038f-4270-80e6-e002d300276e)

## Team Members:

- Paula Jimenez Tamayo

## Features:

The project consists of a client built in React and a server built in Node.js with Express. The client includes the following pages:

- Login page
- Account creation screen
- Horse administration page

In the horse administration page, you can perform the following operations:

- Add new horses
- Edit existing horses
- Delete horses

All these operations make calls to the server. The server includes the following routers:

- Authentication router
- Users router
- Horses router

The server uses Docker to mount a PostgreSQL database and JWT to manage user sessions. As an extra feature, the project includes integration with the Depositphotos API, which provides random images of horses to make the app more dynamic. In total, there are 9 endpoints in the app.

## Running the Project:

To run the project, follow these steps:

1. Navigate to the server folder and run the following command to start the PostgreSQL image:

   ```
   docker-compose up
   ```

2. In the root folder, run the following command to start the server:

   ```
   npm run install:server
   npm run start:server
   ```

3. In the same folder the following command to start the client:

   ```
   npm run install:client
   npm run start:client
   ```

4. You can now access the client by going to http://127.0.0.1:5173. If you enter an unknown route, you will be redirected to the login page.

## Testing the Server:

To test the server as a standalone, you can make calls to http://localhost:3000.

The env var requieres a JWT_KEY and a DESPOSITPHOTOS_KEY property, please contact me if needed.

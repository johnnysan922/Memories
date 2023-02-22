# Memories

A MERN stack social media application that allows users to post interesting events that happened in their lives.

The project is comprised of two applications. The client(frontend) side and the server(backend) side

## Utilized
- MongoDB (database)
  - `CONNECTION_URL` obtained by clicking 'connect' on desired cluster
  - Must grant database access AND IP access to connect to mongoose
- Express
- React
  - redux
  - material ui
- Node

### Frontend
- `npx create-react-app ./` inside 'client' directory to create react project
- `npm start` to test the frontend application

### Backend
- `npm init -y` inside 'server' directory creates empty 'package.json' file
- `npm start` to test the backend application

## What I learned
- How to properly organize files/folders in larger projects
- Learned how to connect and deploy the application using MongoDB
- How to update existing documents in a database using `router.patch()`
- `&nbsp;` is used for spacing that can be interpreted by **JSX**
- How to use breakpoints(media queries). Runs CSS for devices that are smaller than 'sm'
  ```
  [theme.breakpoints.down('sm')]:{
        mainContainer: {
            flexDirection: 'column-reverse'
          }
      }
  ```
- How to make code more scaleable and error prone
  - Using constants variables for strings such POST types

## Frontend Dependencies
- `npm i axios moment react-file-base64 redux redux-thunk`
  - `axios` for making API requests
  - `moment` library for working with time/date
  - `react-file-base64` for converting images
  - `redux`
  - `redux-thunk` for async actions using redux
- `npm i react-redux`
  - for hooks and dispatching actions
- `npm install @material-ui/core`
- `npm install @mui/icons-material @mui/material @emotion/react @emotion/styled`

## Backend Dependencies
- `npm i body-parser cors express mongoose nodemon`
  - `body-parser` enables sending POST requests
  - `cors` enables cross origin requests
  - `express` as a framework for creating routing of application
  - `mongoose` to create models for POST's
  - `nodemon` so we dont have to reset server after EVERY change
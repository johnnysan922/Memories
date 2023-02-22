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

### Backend
- `npm init -y` inside 'server' directory creates empty 'package.json' file

## What I learned
- Learned how to connect and deploy the application using MongoDB
- How to update existing documents in a database using `router.patch()`

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
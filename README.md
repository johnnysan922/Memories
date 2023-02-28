# Memories (https://memories-js.netlify.app/)

A MERN stack social media application that allows users to post interesting events that happened in their lives.

The project is comprised of two applications. The client side(frontend) and the server side(backend).

## Utilized
- MongoDB (database)
  - `CONNECTION_URL` obtained by clicking 'connect' on desired cluster
  - Must grant database access AND IP access to connect to mongoose
- Express
- React
  - redux
  - material ui
- Node
- Render (backend deployment) ~~Heroku (backend deployment)~~
- Netlify (frontend deployment)

### Frontend
- `npx create-react-app ./` inside 'client' directory to create react project
- `npm start` to test the frontend application

### Backend
- `npm init -y` inside 'server' directory creates empty 'package.json' file
- `npm start` to test the backend application
- `npm i dotenv` to store **IMPORTANT** local variables/information

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
- How to make code more scaleable and error prone by using **constants variables** for strings such POST types
- How to use the `.gitignore` file to ignore files/folders to prevent them from being uploaded to github

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

## Deployment
Deploy **backend** first and then **frontend**.
### ~~Heroku (Backend)~~
- Click on 'New' on the top right corner > 'Create new app' and input values for project
- Make sure Heroku CLI is installed and set the Path in environment variables
- Follow the steps and commands on the Heroku site. (in the SERVER folder)
  - Create a new heroku git repo in the server applicaton
  - Follow commands
- It should deploy
  - **Note**: MongoDB Atlas cluster needs to have Heroku IP address whitelisted
- To redeploy:
  ```
  git add .
  git commit -am "MESSAGE"
  git push heroku master
  ```

### Render (Backend)
- Click on **'New +'** > **'Web Service'** on the top right corner
- Connect/Link your Github account
- Connect to the desired repository
- In the details form page:
  - Choose a name for the web service (preferably the same as the project name)
  - Branch: `main` (default)
  - Runtime: `Node` (default)
  - Root directory: `server`
  - Build commmand: `$ yarn` (default)
  - Start command: `npm start`
- Click 'Create Web Service'
- Store Environment Variables(secret keys) in the 'Environment' tab on the left
- Insert URL of web service, from the top left, into the frontend.

### Netlify (Frontend)
- Change API `url` from local url to deployed url (`../src/api.index.js`)
- Run `npm run build` to create a production version of frontend application
- Drag and drop `build` folder on Netlify
- The frontend is now deployed

## Saja Academy Tae Kwon Do
TKD is the project name (stands for Tae Kwon Do).  It is a website for the non-profit Saja Academy of Martial Arts in Stevensville.  It is a full-service website that showcases the Saja Academy and will enhance the academy’s current marketing efforts as well as its program administration.  Built with React JS on the front-end and integrating with a mySQL database on the back-end, the site also has a Stripe payment portal for students’ fee payments.

## TKD Project Description
The TKD project website includes two github repositories: [TKD](https://github.com/Montana-Code-School/TKD) and [TKD-backend](https://github.com/Montana-Code-School/TKD-backend). Each repository is deployed to its own Heroku instance. The front-end static files (TKD) can be found at https://saja-academy.herokuapp.com. The back-end server (TKD-backend) can be found at https://tkd-api.herokuapp.com.

**TKD** is the repository with the project's static front-end files. It is built primarily with Create-React-App. Since the built-in server in the Create-React-App package (npm package React-Scripts) is primarily there for development purposes only, it is not suitable for a production environment. For this reason, the client side and the backend portion of the website were separated into two instances on Heroku and two different repositories on Github. In addition, Heroku doesn't seem to work easily when the static front-end files make calls to a production server from within the same Heroku instance.  

## Getting Started (Development Environment)

### TKD (Front-End)
1. Git clone the repository [TKD](https://github.com/Montana-Code-School/TKD).
2. In the terminal, change directory into the project root directory.
3. Run npm install in order to install dependencies.
4. To start the development server and run in local host, run npm start in terminal.

### TKD-backend (Server)
1. Git clone the repository [TKD-backend](https://github.com/Montana-Code-School/TKD-backend).
2. In the terminal, change directory into the project root directory.
3. Run npm install in order to install dependencies.
4. In order to start the development server and run in localhost, run node server.js in terminal

## Prerequisites
-You should have current versions of node and npm installed https://nodejs.org/en/download/ to install node and https://docs.npmjs.com/cli/install to install npm.

## Built With
The front-end component of this website was built with:
* React create-react-app
* JSX
* Express
* Node.js
* Flexbox

## Authors
Montana Code School Part Time Class of 2017

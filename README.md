# MERN STACK TEMPLATE

## WEBSITE LINK -

[https://mernstack-template-smv.herokuapp.com/]

## About

The idea of this project is to design a MERN Stack starter template that has full CRUD capability and contains the necessary code without any special adjustments needed by user to be successfully deployed to Heroku. This starter template has a sports player theme but can be changed to accommodate any theme and data as desireable. Each file contains detailed comments about what each line of code does. In addition, below I am going to give detailed steps on how I created this MERN stack starter template. No step will be skipped!!! The goal is to make this template as dummy proof and easy to understand as possible so that even somebody with no coding experience can simply follow these easy step-by-step instructions below and have a basic full CRUD MERN stack application up and running on Heroku within minutes.

Important Note - This starter template application was not built out of the box with responsive design in mind. Due to each user conforming and modifying this template to fit their own needs any responsive design written now would almost certainly need to be adjusted or completely transformed and therefore ultimately I decided to leave it out. This starter template application does however include out of the box basic CSS styling.

## Technologies Used:

- HTML
- CSS
- Javascript
- React (front-end) - useState, useEffect
- React-Router-Dom (front-end) - BrowserRoute, Route, Switch, Link
- MongoDB/Mongoose - no SQL database
- Express (back-end)
- Node.js
- Bootstrap
- SASS - used for styling (uses the SCSS syntax)
- API/AJAX calls
- Utilizes the MERN stack
- Utilizes MVC framework
- Full CRUD capability

# DIRECTIONS FOR USING THIS STARTER MERN APPLICATION TEMPLATE

## Downloading From GitHub

1. Navigate to folder on your computer in which you would like to save this GitHub repository.
2. Click on Code button and Download ZIP. Once downloaded copy the downloaded files into your application folder on your computer.

![download zip](/img/screenShots__ReadMe/DownloadZip.png?raw=true 'download zip')

## OR

3. Click on Code button and select HTTPS and copy the https string and go to Terminal under your project folder and MUST FIRST TYPE IN git clone then https string you copied such as the following:
   <br>
   --> <b>git clone https://github.com/valensh1/MernStack-Template.git</b>
   <br>

![git clone](/img/screenShots__ReadMe/DownloadZip.png?raw=true 'git clone')

## Installing NPM and Node Modules

1. In Terminal under your root project folder (Mernstack-Template) type in the following:
   <br>
   <b>npm install -g npm</b>
   <br>

   - This will allow you the ability to install different add-ons and middleware that were used in application since most developers don't upload these to GitHub because there are tons of files and it can take up a bunch of space. They can be easily downloaded quickly from npm within seconds by following the next step.

2. In Terminal type in the following: <b>npm i</b>
   <br>

   - We have just now completed downloading add-ons and middleware needed for our back-end server in our application to work. Now we have to repeat this very same process for our front-end of our application under the client folder.

3. Navigate to your client folder in Terminal.
   <br>
   Type in the following: <b>npm i</b>
   <br>
   - We have just now completed downloading add-ons and middleware needed for the front-end of our application to work.

## MongoDB Account Set-up

1. Before running this basic MERN starter template application you need to set-up a mongoDB account. Please refer to the following links on how to open up an account. <i>One requirement is you set-up a MongoDB Atlas account which is the cloud database.</i>

   <br>
   MongoDB website - https://www.mongodb.com/try
   <br>
   YouTube video (good video on how to set this up) - https://youtu.be/rPqRyYJmx2g

2. Once your MongoDB account is set-up with Atlas go inside your Cluster and click on the Collections link in the Cluster navigation bar and then click on Create Database button. See screenshot below.

![create database](/img/screenShots\_\_ReadMe/Create_Database.png?raw=true =100x200 'create database')

3. Enter your Database name and Collection Name. See screenshot below.
   <img src="/img/screenShots__ReadMe/DownloadZip.png" width="500" height="500">

## Project Status:

This project will be updated periodically as seen fit to give user the fastest and most efficient experience possible in getting a MERN stack application up and running and deployed on Heroku.

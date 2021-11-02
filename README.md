# MERN STACK TEMPLATE

## WEBSITE LINK -

[https://mernstack-template-smv.herokuapp.com/]

## About

The idea of this project is to design a MERN Stack starter template that has full CRUD capability and contains the necessary code without any special adjustments needed by user to be successfully deployed to Heroku. This starter template has a sports player theme but can be changed to accommodate any theme and data as desireable. Each file contains detailed comments about what each line of code does. In addition, below I am going to give detailed steps on how I created this MERN stack starter template. No step will be skipped!!! The goal is to make this template as dummy proof and easy to understand as possible so that even somebody with no coding experience can simply follow these easy step-by-step instructions below and have a basic full CRUD MERN stack application up and running on Heroku within minutes.

<b><ins>Important Note</ins></b> - This starter template application was not built out of the box with responsive design in mind. Due to each user conforming and modifying this template to fit their own needs any responsive design written now would almost certainly need to be adjusted or completely transformed and therefore ultimately I decided to leave it out. This starter template application does however include out of the box basic CSS styling.

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

## Downloading Repo From GitHub

1. Navigate to folder on your computer in which you would like to save this GitHub repository.
2. Click on Code button and Download ZIP. Once downloaded copy the downloaded files into your application folder on your computer.

![download zip](/img/screenShots__ReadMe/DownloadZip.png?raw=true 'download zip')

## OR

3. Click on Code button and select HTTPS and copy the https string and go to Terminal under your project folder and MUST FIRST TYPE IN git clone then https string you copied such as the following:
   <br>
   --> <b>git clone https://github.com/valensh1/MernStack-Template.git</b>
   <br>

![git clone](/img/screenShots__ReadMe/GitClone.png?raw=true 'git clone')

## Create new GitHub Repository in Your Own GitHub

- Follow the step-by-step screenshots below for adding a new repository to hold the code for your new MERN Stack application.
  <br>
  <kbd>![create repo1](/img/screenShots__ReadMe/GitHub_Create_Repo1.png?raw=true 'create repo1')</kbd>
  <br>
  <br>
  <kbd>![create repo2](/img/screenShots__ReadMe/GitHub_Create_Repo2.png?raw=true 'create repo2') </kbd>
  <br>
  <br>
  <kbd>![create repo3](/img/screenShots__ReadMe/Repo3.png?raw=true 'create repo3')</kbd>
  <br>
  <br>
  <kbd>![create repo4](/img/screenShots__ReadMe/Repo4.png?raw=true 'create repo4')</kbd>
  <br>

## Installing NPM and Node Modules

1. In Terminal under your root project folder (Mernstack-Template) type in the following:
   <br>
   <b>npm install -g npm</b>
   <br>

   - This installs NPM Package Manager on your computer which will allow you the ability to install different add-ons and middleware that were used in application since most developers don't upload these to GitHub because there are tons of files and it can take up a bunch of space. They can be easily downloaded quickly from NPM within seconds by following the next step.

2. In Terminal type in the following: <b>npm i</b>
   <br>

   - This installs add-ons and middleware needed for our back-end server in our application to work. Now we have to repeat this very same process for our front-end of our application under the client folder.

3. Navigate to your client folder in Terminal.
   <br>
   Type in the following: <b>npm i</b>
   <br>
   - This installs add-ons and middleware needed for our front-end React application to work.

## MongoDB Account Set-up

1. Before running this basic MERN starter template application you need to set-up a mongoDB account. Please refer to the following links on how to open up an account. <i>One requirement is you set-up a MongoDB Atlas account which is the cloud database.</i>

   <br>
   MongoDB website - https://www.mongodb.com/try
   <br>
   YouTube video (good video on how to set this up) - https://youtu.be/rPqRyYJmx2g

2. Once your MongoDB account is set-up with Atlas go inside your Cluster and click on the Collections link in the Cluster navigation bar and then click on Create Database button. See screenshot below.

<kbd><img src="/img/screenShots__ReadMe/Create_Database.png" width="500" height="400"></kbd>

<br>
3. Enter your Database name and Collection Name. See screenshot below.
   <kbd><img src="/img/screenShots__ReadMe/Database_Collection_Name.png" width="700" height="500"></kbd>

## Mongoose Set-up

- Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js
  This basically manages the interaction from our server and our MongoDB databse model and retrieves the information from our database and gives it to the server so that the server can serve the client with the relevant information.
  <br>

1. Go to root project folder (mernstack-template) and right click and add new file. Name the file the following (CANNOT BE ANY DIFFERENT!!!)
   <br>
   <kbd>![create repo1](/img/screenShots__ReadMe/FileStructureWithENV.png?raw=true 'create repo1')</kbd>

   - This file is basically a private file that will stay private on our local computer and not be uploaded to our GitHub account because this can hold secret API keys and passwords such as our MongoDB password.

2. Go to your MongoDB Atlas account. Find your database in Atlas (the one you set-up in series of steps under MongoDB Account Set-up above). Follow the series of screenshots below.
   <br>
   <kbd>![create repo1](/img/screenShots__ReadMe/Mongoose1.png?raw=true 'create repo1')</kbd>
   <br>
   <br>
   <kbd>![create repo1](/img/screenShots__ReadMe/Mongoose2.png?raw=true 'create repo1')</kbd>
   <br>
   <br>
   <kbd>![create repo1](/img/screenShots__ReadMe/Mongoose3.png?raw=true 'create repo1')</kbd>
   <br>
   <br>
   <kbd>![create repo1](/img/screenShots__ReadMe/Mongoose5.png?raw=true 'create repo1')</kbd>
   <br>
   <br>

   # Creation of .env File

   1. Paste string that you copied in step above and paste into .env file. See screenshot below for additional instructions
      <kbd>![create repo1](/img/screenShots__ReadMe/Mongoose4.png?raw=true 'create repo1')</kbd>

   2. Go into Terminal under root folder (Mernstack-Template) and type in the following:
      <br>
      <b>npm i dotenv</b><--- This will ensure that your passcode on your .env file remains secret and won't be shared publicly

## Starting Application On Our Local Computer

1.  In Terminal go to your root folder (Mernstack-Template) and run the following command:
    <br>
    <b>npm run dev</b>
    <br>
2.  Now go to your client folder in your Terminal and type in the following:
    <br>
    <b>npm run start</b>
    <br>
    - If you get an error such as this <b><i>'react scripts is not recognized as an internal or external command'</i></b> then inside the client folder in your Terminal type in the following to fix:
      <br>
      <b>npm install react-scripts --save</b>
3.  Now you should see a screen like this (see screenshot below)
    <kbd>![create repo1](/img/screenShots__ReadMe/HomePage.png?raw=true 'create repo1')</kbd>

## Players Page - Entering Data Into Your Database

1. After clicking link in step above you will be taken to the Players page (index show page) which looks like the screen shot below.
   <kbd>![create repo1](/img/screenShots__ReadMe/PlayersPage.png?raw=true 'create repo1')</kbd>

2. Now you will be taken to a New Player form to enter your first player data into your newly created MongoDB database. Enter the requested information into the form and then click the SUBMIT button.
   <kbd>![create repo1](/img/screenShots__ReadMe/PlayersForm.png?raw=true 'create repo1')</kbd>

3. You will be taken back to the Players Page (index show page) and you will now see your player that you added in step above.
   <kbd>![create repo1](/img/screenShots__ReadMe/PlayerPageAfterPlayerAdded.png?raw=true 'create repo1')</kbd>

4. To see an individual players information click on the players name and this will take you to the players individual page (individual show page)
   <kbd>![create repo1](/img/screenShots__ReadMe/IndividualShowPage.png?raw=true 'create repo1')</kbd>

   - From here you can either EDIT a players information OR DELETE the players information.

## Deploying to Heroku

After you have successfully completed the steps above you are now ready for deployment to Heroku. Follow the steps below.

In Terminal inside your root folder (Mernstack-Template) type in the following:

1. Create Heroku account
   <br>
   https://www.youtube.com/watch?v=_yK5uTMYM38

2. Install Heroku CLI (command-line interface)
   <br>
   https://devcenter.heroku.com/articles/heroku-cli <--- Heroku instructions
   <br>

   - Basically type the following into your Terminal (in your root Mernstack-Template folder):
     <br>
     <b>brew tap heroku/brew && brew install heroku</b> <--- Installs the Heroku CLI using homebrew for IOS
     <br>
     <b>heroku login</b> <--- Then follow instructions in Terminal as it will eventually open up a web browser where you will enter your login credentials
     <br>
     Now type in <b>heroku create app-name</b> <--- Replace app-name with whatever you want to call your application

3. Before pushing your code to Heroku you must go into Settings inside your application that you created in step above and enter your Config Vars information which comes straight from your .env file
   <br>
   <kbd>![create repo1](/img/screenShots__ReadMe/Heroku_Deployment.png?raw=true 'create repo1')</kbd>
   <br>

4. <b>git add -A</b>
5. <b>git commit -m"deployment to Heroku"</b>
6. <b>git push origin master</b>
7. <b>git push heroku master</b>
   <br>
   If trying to do steps 1-3 above and it says working branch tree clean then skip to step 4 and push to Heroku.

YOU DON'T NEED TO DO THE STEPS BELOW AS IT IS ALREADY DONE FOR YOU IN THE TEMPLATE BUT SHOWING HERE FOR WHAT CHANGES NEEDED TO BE MADE FOR SUCCESSFUL DEPLOYMENT TO HEROKU FROM A create-react-app WHICH IS WHAT THIS STARTER TEMPLATE STARTED FROM.

1.  Creation of a Procfile with the following code:
    <br>
    <b>web:npm start</b> <--- Tells Heroku what to do immediately upon startup of the application

2.  Added code to server.js file so that our server knows when certain routes are hit that aren't our api/players related routes to serve the front-end with static files (which is what React is composed of). See code below inserted into server.js to make Heroku deployment successful.
    <br>
    //? DEPLOYMENT CODE FOR HEROKU - No Need to Modify This Code
    if (process.env.NODE_ENV === 'production') {
    // When .env file has NODE_ENV=production in it run this code below (we must put this in our .env file for when deploying)
    app.use(express.static(path.join(\_\_dirname, '/client/build'))); // When .env file has NODE_ENV=production then look for the static file in the /client/build folder. This folder won't be there until you go into the client folder and run npm run build command in Terminal.

// Code below activates our React front-end. Any routes not shown above in API routes this code will send a file from the /client/build/index.html file which is basically our React front-end files
app.get('\*', (req, res) => {
res.sendFile(path.resolve(\_\_dirname, 'client', 'build', 'index.html'));
});
}

3. Addition of scripts to our server-side package.json file such as "heroku-postbuild", "client-install", "client-build". Package.json scripts section should look like this:
   <br>
   "scripts": {
   "start": "node server.js",
   "dev": "nodemon server.js",
   "heroku-postbuild": "npm run client-install && npm run client-build",
   "client-install": "cd client && npm install",
   "client-build": "cd client && npm run build"
   }

4. An important thing to add to the package.json for the client is to add the following:
   <br>
   "proxy": "http://localhost:5001"
   <br>
   This will ensure that when running our application locally that we will be making requests from our front-end on localhost:3000 to our back-end on localhost:5001. If you don't add this any API calls will not successfully communicate with your back-end server. This has nothing to do with successful deployment to Heroku.

## Changing Code

Recommend installing Better Comments VS Code extension for clear visibility on where you need to change code to customize the template to fit your application requirements.
<br>
Once you have this installed when you navigate the various files in the application any place where there are RED COMMENTS (indicated by a //! to start the comments off) is a potential place where you might want to modify the code to fit the theme of your specific application.

## Project Status:

This project will be updated periodically as seen fit to give user the fastest and most efficient experience possible in getting a MERN stack application up and running and deployed on Heroku.

# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### To get the app up and runing? ###

 
1)Go to command prompt change your directory to the place where you placed the project 

2)Run npm install

3)To start the app run the command: npm run dev

localhost:3001/graphql

4) To get the client(react) up run the command: npx install

5) To start react app run: npm start

localhost:3000 


6) To access and change the database credentials 
Access the src folder in the server folder 
Open the index file in the main asych function you will find create connection, then you can change the connection credentials.


await createConnection({
        type: "mysql",
        database: "ecome",
        username: "root",
        password: "",
        logging: true,
        synchronize: false,
        entities: [Products],
    })
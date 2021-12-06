
To access and change the database credentials 
access the src folder in the server folder 
open the index file on VSCODE 
in the main asych function you will find create connection, then you can change the connection credentials.


await createConnection({
        type: "mysql",
        database: "ecome",
        username: "root",
        password: "",
        logging: true,
        synchronize: false,
        entities: [Products],
    })


thanks
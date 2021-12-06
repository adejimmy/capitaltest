import express from "express";
import { graphqlHTTP } from "express-graphql";
import {schema} from "./schema"
import cors from 'cors';
import { createConnection } from "typeorm";
import {Products} from './Entities/Products'


const main = async () => {

    await createConnection({
        type: "mysql",
        database: "ecome",
        username: "root",
        password: "",
        logging: true,
        synchronize: false,
        entities: [Products],
    })
    const app = express()
    app.use(cors())
    app.use(express.json())


 app.use("/graphql", graphqlHTTP({
     schema,
     graphiql: true
 }))

    app.listen(3001, ()=> {
        console.log("server running on port 3001")
    })
}

main().catch((err) => {
    console.log(err)
})
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

export async function initServer() {
    const graphqlServer = new ApolloServer({
        typeDefs:`type Query{
            sayHello:String,
            sayHellotome(name:String):String

        
        }`,
        resolvers:{
            Query:{
                sayHello:()=>`hello from graphql server`,
                sayHellotome:(parent:any,{name}:{name:String} )=>`hey ${name}`
            }
        },
      });
    const app = express();  
    app.use(bodyParser.json());
    await graphqlServer.start();

// Specify the path where we'd like to mount our server
app.use('/graphql', cors<cors.CorsRequest>(), express.json(), expressMiddleware(graphqlServer));

      return app;

}
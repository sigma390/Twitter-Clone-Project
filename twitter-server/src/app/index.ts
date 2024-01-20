import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { User } from './user';
export async function initServer() {
    const graphqlServer = new ApolloServer({
        typeDefs:`
            ${User.types}
        
        type Query{
            ${User.queries}

        
        }`,
        resolvers:{
            Query:{
                ...User.resolvers.queries,
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
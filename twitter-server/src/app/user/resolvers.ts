import axios from "axios";
import { prismaClient } from "../../clients/db/import";

//interface for google token
interface GoogleTokenType{
    iss: string,
  nbf: string,
  aud: string,
  sub: string,
  email: string,
  email_verified: string,
  azp: string,
  name: string,
  picture: string,
  given_name: string,
  family_name: string,
  iat: string,
  exp: string,
  jti: string,
  alg: string,
  kid: string,
  typ: string,
}



const queries = {
    verifyGoogleToken:async (parent:any,{token}:{token:string})=>{
        const googleToken = token; //google token
        //url of google
        const googleBaseUrl = new URL("https://oauth2.googleapis.com/tokeninfo");
        googleBaseUrl.searchParams.set("id_token",googleToken);
        //call to auth using axios and getting data
        const {data} = await axios.get<GoogleTokenType>(googleBaseUrl.toString(),{
            responseType:'json'
        })
        //===> check for user <====
        const user = await prismaClient.user.findUnique({
            where:{email:data.email}
        })
            //create new user
        if (!user) {
            await prismaClient.user.create({
                data:{
                    email:data.email,
                    firstName:data.given_name,
                    lastName:data.family_name,
                    profileImageURL:data.picture
                }
            })
        }
        // generate token for above user
        
        
    },
}
export const resolvers = {queries}
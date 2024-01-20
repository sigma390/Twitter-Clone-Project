import axios from "axios";

const queries = {
    verifyGoogleToken:async (parent:any,{token}:{token:string})=>{
        const googleToken = token; //google token
        //url of google
        const googleBaseUrl = new URL("https://oauth2.googleapis.com/tokeninfo");
        googleBaseUrl.searchParams.set("id_token",googleToken);
        //call to auth using axios and getting data
        const {data} = await axios.get(googleBaseUrl.toString(),{
            responseType:'json'
        })
        console.log(data)
        return "ok"
        
    },
}
export const resolvers = {queries}
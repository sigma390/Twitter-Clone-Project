import { User } from "@prisma/client";
import { prismaClient } from "../clients/db/import"
import JWT from "jsonwebtoken"

//declare jwt secret for token
const jwt_secret = "omkar234"
class JWTservice{
     public static async generateTokenUser(user:User){
        
        const payload = {
            id:user?.id, // agar user hoga toh id
            email:user?.id //email 
        }
        const token = JWT.sign(payload,jwt_secret);
        //return that generated token
        return token;
    }
}

export default JWTservice;
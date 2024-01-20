import { prismaClient } from "../clients/db/import"
import JWT from "jsonwebtoken"

//declare jwt secret for token
const jwt_secret = "omkar234"
class JWTservice{
    public static async generateTokenUser(userID:string){
        const user = await prismaClient.user.findUnique({where:{id:userID}});
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
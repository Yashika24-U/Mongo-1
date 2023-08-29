//custom middleware
import jwt from "jsonwebtoken"

export const auth = (req,res,next)=>{
try{
    const token = req.header("x-auth-token")//in x-auth-token we get token that is generated
    console.log(token)
    jwt.verify(token,process.env.SECRET_KEY)
    next();
}catch(err)
{
    res.send({error:err.message})
}
};
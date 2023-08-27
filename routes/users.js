import express from "express"
import {createUser, genPassword} from "../helper.js"
const router = express.Router()

router.post("/signup",async(req,res)=>{
    const {username,password}= req.body
    console.log(username,password)
    const hashedPassword = await genPassword(password)
    const result =  await createUser(username,hashedPassword)
    res.send(result)

  });

//   validate  if username is already present
//  validate pssword








    
export const usersRouter  = router
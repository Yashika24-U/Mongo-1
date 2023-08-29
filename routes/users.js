import express from "express"
import {createUser, genPassword,getUserByName} from "../helper.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const router = express.Router()

router.post("/signup",async(req,res)=>{
    const {username,password}= req.body
    console.log(username,password);
    const isUserExist = await getUserByName(username)
    console.log(isUserExist)
    if(isUserExist)
    {
       res.status(400).send({message :"User already taken"})
       return;
    }
    if(
      !/^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[#!@%&]).{8,}$/g.test(password)
      
    ){
       res.status(400).send({message :"Password doesnot match"})
       return
      
    }
   
    const hashedPassword = await genPassword(password)
    const result =  await createUser(username,hashedPassword)
    res.send(result)

  });


  router.post("/login",async(req,res)=>{
    const {username,password}= req.body
    // console.log(username,password)
    const userfromDB = await getUserByName(username)
    console.log( userfromDB)
    if(!userfromDB )
    {
      res.status(400).send({message :"Invalid Credentials"})
      return;
    }
    const storedDbPassword = userfromDB.password
    const isPasswordMatch = await bcrypt.compare(password,storedDbPassword)
    
    if(!isPasswordMatch )
    {
      res.status(400).send({message :"Invalid Credentials"})
      return
    }
    const token = jwt.sign({id:userfromDB._id},process.env.SECRET_KEY)

    res.send({message:"Successfully Logged in",token:token})
    
    

  });


//   validate  if username is already present
//  validate if  password matches








    
export const usersRouter  = router
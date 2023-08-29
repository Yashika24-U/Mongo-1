
import express from "express"
import {auth} from "../middleware/auth.js"
import { getAllBooks,
    getBooksById,
    deleteBooksById, 
    addBooks, 
    updateBookById } from "../helper.js" 
const router = express.Router()

router.get("/",auth,async(req,res) =>{
    const{language,rating} = req.query;
    console.log(req.query,language)
  
    if(req.query.rating)
    {
      req.query.rating = +req.query.rating;
    }
  
    const book = await getAllBooks(req)
  
  res.send(book)
  });
  
  // get Books by ID
  
  router.get("/:id",auth, async(req,res)=>{
  const {id} = req.params
  console.log(req.params)
  const book = await getBooksById(id);
  
  book?res.send(book) : res.status(404).send({message:"No Books Found"})
  });
  
  
  // Delete by Id
  
  router.delete("/:id",async(req,res)=>{
    const {id} = req.params
    console.log(req.params)
  
    const book = await deleteBooksById(id);
  
  
    res.send(book)
  });
  
  // POST
  
  router.post("/",auth,async(req,res)=>{
    const newbook = req.body
    console.log(newbook)
  
    const result = await addBooks(newbook);
  res.send(result)
  });
  
    // PUT 
  
  router.put("/:id",auth,async(req,res)=>{
    const {id} = req.params
    const updatebook = req.body
    console.log(updatebook)
  
    const result = await updateBookById(id, updatebook);
  res.send(result)
  });
  
export const booksRouter  = router
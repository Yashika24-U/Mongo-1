import { client } from "./index.js";
import  bcrypt from "bcrypt"



export async function getAllBooks(req) {
  return await client
    .db("books")
    .collection("books")
    .find(req.query)
    .toArray();
}

export async function getBooksById(id) {
  return await client.db("books")
    .collection("books")
    .findOne({ id: id });
}


export async function deleteBooksById(id) {
  return await client.db("books")
    .collection("books")
    .deleteOne({ id: id });
}


export async function addBooks(newbook) {
  return await client.db("books")
    .collection("books")
    .insertMany(newbook);
}


export async function updateBookById(id, updatebook) {
  return await client
    .db("books")
    .collection("books")
    .updateOne({ id: id }, { $set: updatebook });
}


export async function genPassword(password){
  const salt = await bcrypt.genSalt(10) // bcrypt.genSalt(no of rounds)
  console.log(salt)
  const hashedPassword = await bcrypt.hash(password,salt) 
  console.log( hashedPassword)
  return hashedPassword;
}

export async function createUser(username,hashedPassword){
  return await client
  .db("books")
  .collection("users")
  .insertOne({username:username , password : hashedPassword});
}

export async function getUserByName(username){
  return await client
  .db("books")
  .collection("users")
  .findOne({username:username});
}
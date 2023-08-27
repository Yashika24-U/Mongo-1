
import express from "express"
import {MongoClient} from "mongodb"
import * as dotenv from 'dotenv'

import { booksRouter } from "./routes/books.js"
import { usersRouter } from "./routes/users.js"

dotenv.config()


const app = express()
const PORT = 9000;
// req = what we req the server
// res = what we receive from server


// Connection URL
// console.log(process.env)
const MONGO_URL = process.env.MONGO_URL;

// 'mongodb://127.0.0.1:27017';
//CREATE connection

async function createConnection()
{
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("MongoDB is connected")
  return client;
}
// createConnection by calling
export const client = await createConnection(); 

app.use(express.json());



const books = [
 
  {
    "id": "2",
    "name": "Attitude is everything",
    "poster": "https://miro.medium.com/max/1400/1*ItFOYfi8Dyy0yj9n1SE8uQ.jpeg",
    "rating": 8.1,
    "trailer": "https://www.youtube.com/embed/gqviJoSkf6U",
    "summary": "Attitude, In psychology, a mental position with regard to a fact or state. Attitudes reflect a tendency to classify objects and events and to react to them with some consistency. Attitudes are not directly observable but rather are inferred from the objective, evaluative responses a person makes.",
    "language":"Tamil"
  },
  {
    "id": "3",
    "name": "The Secret",
    "poster": "https://m.media-amazon.com/images/I/81fdQIY6ykL.jpg",
    "rating": 8.8,
    "trailer": "https://www.youtube.com/embed/san61qTwWsU",
    "summary": "There's no secret to The Secret. The book and movie simply state that your thoughts control the universe. Through this “law of attraction” you “manifest” your desires. “It is exactly like placing an order from a catalogue",
    "language":"Tamil"
  },
  {
    "id": "4",
    "name": "Discover Your Destiny",
    "poster": "https://m.media-amazon.com/images/I/61t18yWH5qL.jpg",
    "rating": 6,
    "trailer": "https://www.youtube.com/embed/o8wUR2JAeUw",
    "summary": "'Discover Your Destiny' is a story about enlightenment of Dar Sanderson, who is an incredibly ambitious executive. The book throws light on the fact that 'happiness and harmony can never be achieved and assured by SUCCESS'. Dar is an achiever in almost every aspect of life, yet he is void from the inside.",
    "language":"Tamil"
  },
  {
    "id": "5",
    "name": "The 5 AM Club",
    "poster": "https://m.media-amazon.com/images/I/71zytzrg6lL.jpg",
    "rating": 8.6,
    "trailer": "https://www.youtube.com/embed/Kxvp3eOYphY",
    "summary": "In The 5 AM Club: Own Your Morning. Elevate Your Life, he uses a fictitious story about a billionaire mentor teaching a struggling artist and an entrepreneur about the importance of waking up early to show how revolutionary it is for success.",
    "language":"English"
  },
  {
    "id": "6",
    "name": "The power is within you",
    "poster": "https://play-lh.googleusercontent.com/1aghoDaz52K3bbZA3EJGHvEpgaru4uMC3Ud2ik_EAW7SjNLwK7nXxOp_Uad-3L6Ovvg4C2-_d1kqVg=w480-h690-rw",
    "rating": 9,
    "summary": "Louise expands on her philosophy of \"loving the self\" and shows you how to overcome emotional barriers through learning to listen to your inner voice, loving the child within, letting your true feelings out, and much more!",
    "trailer": "https://www.youtube.com/embed/4UzY6ksC6gU",
    "language":"Tamil"
  },
  {
     "id": "7",
    "name": "elon musk: tesla, spacex, and the quest for a fantastic future",
    "poster": "https://rukminim1.flixcart.com/image/832/832/kplisnk0/book/l/l/t/elon-musk-original-imag3shevuu2d9qq.jpeg?q=70",
    "rating": 7,
    "summary": "elon musk: tesla, spacex, and the quest for a fantastic future",
    "trailer": "https://www.youtube.com/embed/icKzGoLjFu8",   
    "language":"Hindi"
  },
  {
     "id": "008",
    "name": "Harry potter",
    "poster": "https://images-na.ssl-images-amazon.com/images/I/91bsMwU7IzL._RI_.jpg",
    "rating": 9.8,
    "summary": "Adaptation of the first of J.K. Rowling's popular children's novels about Harry Potter, a boy who learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own.",
    "trailer": "https://www.youtube.com/embed/fFGS4zZWGoA",
    "language":"Tamil"
   
  }
]

app.get("/",(req,res)=>{
  res.send("Hello Everyone")
});

app.use("/books",booksRouter)
app.use("/users",usersRouter)

app.listen((PORT),()=> console.log("server started at port number",PORT))



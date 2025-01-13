import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'
dotenv.config({
    path:'./.env'
})

const app=express();
app.use(cors({
    origin:["http://localhost:5174","http://localhost:5173"]
}))

const port=process.env.PORT || 8000;
app.use(express.static(path.join(path.resolve(),'../forntend/dist')))

app.get('/jokes',(req,res)=>{
    const jokes = [
        {
          id: 1,
          title: "Why don’t scientists trust atoms?",
          description: "Because they make up everything!"
        },
        {
          id: 2,
          title: "What do you call fake spaghetti?",
          description: "An impasta!"
        },
        {
          id: 3,
          title: "Why couldn’t the bicycle stand up by itself?",
          description: "It was two tired!"
        },
        {
          id: 4,
          title: "What did one wall say to the other?",
          description: "I’ll meet you at the corner!"
        },
        {
          id: 5,
          title: "Why don’t skeletons fight each other?",
          description: "They don’t have the guts!"
        },
        {
          id: 6,
          title: "What do you call cheese that isn’t yours?",
          description: "Nacho cheese!"
        },
        {
          id: 7,
          title: "Why can’t your nose be 12 inches long?",
          description: "Because then it would be a foot!"
        },
        {
          id: 8,
          title: "What do you call a bear with no teeth?",
          description: "A gummy bear!"
        },
        {
          id: 9,
          title: "Why don’t eggs tell jokes?",
          description: "They’d crack each other up!"
        },
        {
          id: 10,
          title: "Why did the scarecrow win an award?",
          description: "Because he was outstanding in his field!"
        }
      ];

      res.send(jokes);
      
})

app.listen(port,()=>{
    console.log(`Server running on PORT: ${port}`)
})
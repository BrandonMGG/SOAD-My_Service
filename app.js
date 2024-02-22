// Importing required modules
import express from 'express';
import dotenv from 'dotenv';
import nodemon from 'nodemon';
// Loading environment variables from .env file
dotenv.config();

// Creating an Express application
const app = express();

// Define a route

app.get("/", (req, res) => {
    res.send('todo bien');
    
});


app.post("/",()=>{})
// Define the port
const PORT = process.env.PORT || 8888 ; // Use port from environment variable or default to 3000

// Start the server
app.listen(PORT, () => {
    console.log(`The application is listening on port ${PORT}`);
    
});

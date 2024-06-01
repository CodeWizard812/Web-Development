import express from "express";

const sig = express();
const port = 3000;

sig.listen(port, ()=>{
    console.log(`Server is connected to ${port}`);
});
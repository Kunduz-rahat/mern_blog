import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'



const app = express()
dotenv.config()
const DB_NAME = process.env.DB_NAME
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_PORT = process.env.DB_PORT
app.use(express.json())
app.use(cors())

async function start(){
	try{
		await mongoose.connect(
			`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.dg6ylqc.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
		) 
		app.listen(DB_PORT, ()=> console.log(`server started on Port ${DB_PORT}`))
	}catch(e){

	}
}
start()




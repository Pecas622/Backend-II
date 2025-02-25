import express from 'express'
import usersRouter from './routes/users.routes.js'
import mongoose from 'mongoose'

const app = express()
const PORT = 8000

mongoose.connect("mongodb+srv://santizorrilla:Pecas622@cluster0.eazxc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("DB is connected"))
.catch((e) => console.log(e))

app.use(express.json())
app.use('/api/users', usersRouter)

app.listen(PORT, () => {
    console.log("Server on port:",PORT);
})
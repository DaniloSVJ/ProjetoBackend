import "reflect-metadata"
import express from "express"
import routes from './routes';
import './database'


const app = express()
app.use(express.json())

app.use(routes)


//routes.use("/appointments",appointmentsRouter)


//app.post('appointments')

app.listen(3333)

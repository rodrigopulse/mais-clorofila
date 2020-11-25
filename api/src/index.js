import express from 'express'
import routes from './routes'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

const app = express()

app.use(express.json())

dotenv.config()

const port = process.env.PORT || 3000

// mongoose
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const host = process.env.DB_HOST
mongoose.connect(`mongodb+srv://${user}:${password}@${host}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

app.use(routes)

app.listen(port, () => { console.log(`app listening at http://localhost:${port}`) })
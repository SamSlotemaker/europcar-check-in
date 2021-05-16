import express from 'express'
import dotenv from 'dotenv'
const app = express()
const PORT = process.env.PORT || 3001

dotenv.config()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(PORT, () => console.log(`app listening on localhost:${PORT}`))
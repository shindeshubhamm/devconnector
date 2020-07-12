const express = require('express')
const connectDB = require('./db/db')
const userRouter = require('./controllers/user')
const authRouter = require('./controllers/auth')
const profileRouter = require('./controllers/profile')
const postRouter = require('./controllers/post')

// Initialize express instance
const app = express()

// Initialize database
connectDB()

app.get('/', (req, res) => {
  res.send("Server started. Working fine.")
})

// Define routes
app.use('/api/users', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/profile', profileRouter)
app.use('/api/posts', postRouter)

// Listen
const port = process.env.PORT
app.listen(port, () => {
  console.log(`server running on port: ${port}`)
})

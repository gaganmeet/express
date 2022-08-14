import express from 'express'
import friendsRouter from './routes/friends.router.mjs'
import messagesRouter from './routes/messages.router.mjs'

const app = express()

app.use((req, res, next) => {
  const start = Date.now()
  next()
  const end = Date.now()
  const diff = end - start
  console.log(`${req.method} ${req.url} ${diff}ms`)
})
app.use(express.json())
app.use('/friends', friendsRouter)
app.use('/messages', messagesRouter)

app.listen(8080)
console.log('Listening on port 8080')

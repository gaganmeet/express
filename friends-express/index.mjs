import express from 'express'

const app = express()

const friends = [
  {
    name: 'John',
    age: 30,
    id: 1,
  },
]

app.use((req, res, next) => {
  const start = Date.now()
  next()
  const end = Date.now()
  const diff = end - start
  console.log(`${req.method} ${req.url} ${diff}ms`)
})
app.use(express.json())
app.get('/friends', (req, res) => {
  res.json(friends)
})
app.get('/friends:id', (req, res) => {
  const friend = friends.find((f) => f.id === parseInt(req.params.id))
  if (!friend) res.status(404).send('Friend not found')
  res.json(friend)
})
app.post('/friends', (req, res) => {
  const friend = {
    id: friends.length + 1,
    name: req.body.name,
    age: req.body.age,
  }
  friends.push(friend)
  res.json(friend)
})
app.listen(8080)
console.log('Listening on port 3000')

import express from "express"
const app = express()

app.use(express.json())

app.get("/api/ping", (_req, res) => {
  console.log("someone pinged here")
  res.send("pong")
})

const PORT = 3002
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
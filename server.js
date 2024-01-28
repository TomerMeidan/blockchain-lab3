const express = require("express")
const cors = require("cors");
const app = express()
const port = 7000
const tasksRouter = require("./Routers/tasksRouter")

// Middlewares
app.use(express.json());
app.use(cors());

// Tasks Router
app.use('/tasks', tasksRouter)

app.listen(7000, () => console.log(`Server is listening on http://localhost:${port}`))
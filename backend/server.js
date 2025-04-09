const express = require('express')
const { errorHandler } = require('./middleware/errorMiddleware')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const connectDB = require('./config/db')
const colors = require('colors')
const cors = require("cors");
const http = require("http")
const { Server } = require("socket.io");
connectDB();
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors());
app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/players', require('./routes/playerRoutes'))
app.use('/api/results', require('./routes/resultsRoutes'))
app.use('/api/currentgame', require('./routes/currentGameRoutes'))
app.use('/api/game', require('./routes/gameRoutes'))
app.use('/api/tournaments', require('./routes/tournamentRoutes'))

app.use(errorHandler)

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5000",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("send_message", (data) => {
        socket.broadcast.emit("receive_message", data)
    })
})

server.listen(port, () => console.log(`Server started on port ${port}`))
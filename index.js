const app = require('./src/app');
const socket = require('socket.io')
const connectToDb = require('./src/config/database');
// const PORT = require('./config');
const PORT = 8000
connectToDb();

const server = app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`.yellow.bold);
});

const io = socket(server, {
  cors:{
    origin: '*'
  }
})

let onlineUsers = []

const addNewUser = (userid, socketId) => {
  !onlineUsers.some((user)=>user.userid === userid) && onlineUsers.push({userid, socketId})
}

const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user)=>user.socketId !== socketId)
}

const getUser = (userId) => {
  return onlineUsers.find(user=>user.userid === userId)
}


io.on("connection", (socket)=>{
  socket.on("newSubasta", (idsubasta)=>{
    socket.join(idsubasta)
  })

  socket.on("addSubasta", ({idsubasta, name})=>{
    io.to(idsubasta).emit("add", name)
  })

  socket.on("salir",()=>{
    socket.disconnect(true)
  })

  socket.on("disconnect",()=>{
    console.log(socket.rooms)
  })
})
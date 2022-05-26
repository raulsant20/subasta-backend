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
  console.log('conectando')
  socket.on("newSubasta", (id)=>{
    console.log('newSubsta', id)
    socket.join(id)
  })

  socket.on("addSubasta", ({idsubasta, name})=>{

    console.log('aumentando')
    console.log(socket.rooms)
    socket.to(idsubasta).emit("add", name)
  })

  socket.on("salir",()=>{
    socket.disconnect(true)
  })

  socket.on("disconnect",()=>{
    console.log('desconectando')
    console.log(socket.rooms)
  })
})
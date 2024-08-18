import socketIOClient from 'socket.io-client'

const socket = socketIOClient('http://localhost:5173/')

export default socket;

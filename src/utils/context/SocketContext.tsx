import { createContext } from 'react';
 import { io } from 'socket.io-client';
const SOCKET_API = import.meta.env.WEBSOCKET_URL

 export const socket = io("http://localhost:3000",{
    withCredentials: true
 });
 export const SocketContext = createContext(socket);
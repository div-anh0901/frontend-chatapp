import { createContext } from 'react';
 import { io } from 'socket.io-client';
 
 export const socket = io(import.meta.env.REACT_APP_WEBSOCKET_URL!);
 export const SocketContext = createContext(socket);
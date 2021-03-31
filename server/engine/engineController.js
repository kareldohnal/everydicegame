import { Server } from 'socket.io';
import consola from 'consola';

export default app => {
  const io = new Server(app, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
      credentials: true
    }
  });

  io.on('connection', socket => {
    consola.info('Client Connected:');
    consola.info(socket);
    consola.info(socket.id);
  });

  return io;
};
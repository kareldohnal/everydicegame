import { Server } from 'socket.io';

export default app => {
  const io = new Server(app, {});

  io.on('connection', socket => {
    logger.info('Client Connected:');
    logger.info(socket);
  });

  return io;
};
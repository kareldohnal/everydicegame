import { io } from "socket.io-client";

// export const socket = io(process.env.REACT_APP_ENDPOINT);

export function GameSocket(roomID) {
    const socket = io(process.env.REACT_APP_ENDPOINT, {
        query: {
            roomID
        }
    });
    return socket;
}
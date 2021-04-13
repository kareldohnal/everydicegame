import { useEffect } from 'react';
import { useParams } from 'react-router';
import { GameSocket } from '../../utils/socket';

// import './Game.scss';

export const Game = () => {
    let { roomID } = useParams();


    useEffect(() => {
        let socket = GameSocket(roomID)

        socket.on("connect", () => {
                // ERASE LOG
                console.log(socket.id)
                console.log(roomID)
            })
        socket.on("log", (msg) => {
                console.log(msg);
            })

    }, [roomID]);

return (
    <>
        <div>{roomID}</div>
    </>
);
};
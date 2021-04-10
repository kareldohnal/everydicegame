import { useEffect } from 'react';
import { useParams } from 'react-router';
import { GameSocket } from '../../utils/socket';

// import './Game.scss';

export const Game =  () => {
    let { roomID } = useParams();
    let socket = GameSocket(roomID)

    useEffect(() => {
        socket.on("connect", () => {
            // ERASE LOG
            console.log(socket.id)
            console.log(roomID)
        });
        // socket.on("log", (msg) => {
        //     console.log(msg);
        // })
    }, []);

    // useEffect(() => {
    //     socket.on("connect", () => {
    //         // ERASE LOG
    //         console.log(socket.id)
    //         console.log(roomID)
    //     });
    //     socket.on("log", (msg) => {
    //         console.log(msg);
    //     })
    // })

    return (
        <>
            <div>{roomID}</div>
        </>
    );
};
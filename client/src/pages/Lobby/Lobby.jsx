import { useEffect } from 'react';
import { socket } from '../../utils/socket';

// import './Lobby.css';

export const Lobby = () => {
    useEffect(() => {
        socket.on("connect", () => {
            console.log(socket.id)
        });
    })

    return (
        <>
            <div className="lobby">
                Create room:

            </div>
        </>
    );
};
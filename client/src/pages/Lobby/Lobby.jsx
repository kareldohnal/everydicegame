import { useState } from 'react';
// import { socket } from '../../utils/socket';

// import './Lobby.scss';

export const Lobby = () => {
    const [game, setGame] = useState('dice');
    const [roomID, setRoomID] = useState('pica');

    // useEffect(() => {
    //     socket.on("connect", () => {
    //         // ERASE LOG
    //         console.log(socket.id)
    //     });
    // });

    const handleChange = (e) => {
        setGame(e.target.value)
    }
    const handleChangeRoom = (e) => {
        setRoomID(e.target.value)
    }

    const handleSubmit = (e) => {
        alert('Your favorite flavor is: ' + game + roomID);
        e.preventDefault();
    }

    return (
        <>
            <div className="lobby">
                Create game :
                <form onSubmit={handleSubmit}>
                    <label>
                        Pick your game:
                        <select value={game} onChange={handleChange}>
                            <option value="dice">Dice1</option>
                            <option value="dice2">Dice2</option>
                            <option value="dice3">Dice3</option>
                        </select>
                        <input type="text" id="roomID" name="roomID" value={roomID} onChange={handleChangeRoom} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
};
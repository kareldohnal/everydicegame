import { useEffect, useState } from 'react';
import { socket } from '../../utils/socket';

// import './Lobby.css';

export const Lobby = () => {
    const [game, setGame] = useState('dice');

    // useEffect(() => {
    //     socket.on("connect", () => {
    //         // ERASE LOG
    //         console.log(socket.id)
    //     });
    // });

    const handleChange = (e) => {
        setGame(e.target.value)
    }

    const handleSubmit = (e) => {
        alert('Your favorite flavor is: ' + game);
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
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
};
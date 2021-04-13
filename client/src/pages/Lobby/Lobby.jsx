import { useState } from 'react';
import { Nav } from '../../components/Nav/Nav';

// import './Lobby.scss';

export const Lobby = () => {
    const [game, setGame] = useState('dice');
    const [roomID, setRoomID] = useState('pica');

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

    const [tab, setTab] = useState('game-tab');

    const handleTab = (e) => {
        setTab(e.target.id)
    }

    return (
        <>
            <div className="lobby">
                <Nav />
                <div className="tabs">
                    <button id='game-tab' className={'game-tab' === tab ? 'tab-item active' : 'tab-item'}onClick={handleTab}>London</button>
                    <button id='sim-tab' className={'sim-tab' === tab ? 'tab-item active' : 'tab-item'} onClick={handleTab}>Paris</button>
                </div>
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
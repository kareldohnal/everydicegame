import { useState } from 'react';
import { Nav } from '../../components/Nav/Nav';

// import './Lobby.scss';

export const Lobby = () => {
    const [tab, setTab] = useState('game-tab');

    const handleTab = (e) => {
        setTab(e.target.id)
    }

    return (
        <>
            <div className="lobby">
                <Nav />
                <div className="tabs">
                    <button id='game-tab' className={'game-tab' === tab ? 'tab-item active' : 'tab-item'} onClick={handleTab}>Game rooms</button>
                    <button id='sim-tab' className={'sim-tab' === tab ? 'tab-item active' : 'tab-item'} onClick={handleTab}>Dice simulator</button>
                </div>

                {tab === 'game-tab' && (
                    <div>hra</div>
                )}

                {tab === 'sim-tab' && (
                    <div>simulátor</div>
                )}

            </div>
        </>
    );
};
import { useState } from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Nav } from '../../components/Nav/Nav';

import './Landing.scss';

export const Landing = () => {
    const [tab, setTab] = useState('game-tab');

    const handleTab = (e) => {
        setTab(e.target.id)
    }

    return (
        <>
            <div className="landing">
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
            <Footer />
        </>
    );
};

import './Nav.scss';

import { Avatar } from "../Avatar/Avatar"
import { Logo } from "../Logo/Logo"

export const Nav = () => {

return (
    <>
        <div className="nav">
            <Logo />
            <Avatar />
        </div>
    </>
);
};
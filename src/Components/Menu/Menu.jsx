import React from 'react';
import taskIcon from "../../assets/taskicon.png"
import bell from "../../assets/bell.png"
import user from "../../assets/user.png"
import analytics from "../../assets/chart-square-bar.png"
import s from "./Menu.module.css"

const Menu = ({active, setActive}) => {
    return (
        <div className={active ? `${s.menu} ${s.active}`: `${s.menu}`} onClick={() => setActive(false)}>
            <div className={s.menu__content} onClick = {e => e.stopPropagation()}>
                <ul>
                    <li>
                        <img className={s.icon} src={taskIcon} alt=""/>
                        <a className={s.link} href="/">Task</a>
                    </li>
                    <li>
                            <img className={s.icon} src={bell} alt=""/>
                        <a className={s.link} href="/notifications">Notifications</a>
                    </li>
                    <li>
                        <img className={s.icon} src={analytics} alt=""/>
                        <a className={s.link} href="/">Analytics</a>
                    </li>
                    <li>
                        <img className={s.icon} src={user} alt=""/>
                        <a className={s.link} href="/profile">Profile</a>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Menu;
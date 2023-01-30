import React from "react"

import s from "./Header.module.css"
import arrow from "../../assets/cheveron-down.png"

const Header = ({active, setActive}) => {
    return (
        <div className={s.header} >
                <nav>
                    <div className={s.burgerBtn} onClick={() => setActive(!active)}>
                        Todo List
                        <img className={active ? `${s.burgerArrow} ${s.active}`: `${s.burgerArrow}`} src={arrow} alt="/"/>
                    </div>
                </nav>
        </div>
    )
}
export default Header
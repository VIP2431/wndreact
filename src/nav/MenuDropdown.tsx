import {NavDropdown} from "react-bootstrap";
import React from "react";
import MenuDropdownRight from "./MenuDropdownRight";
import {ITypeLinkMenu} from "../types/ITypeLinkMenu";

const MenuDropdown: React.FC<{links: ITypeLinkMenu[]}> = ({links}) => {

    return (
        <div className="dropdown">
            <ul className="dropdown-menu" title="MenuDropdown" role="menu" aria-labelledby="dLabel">
                <li><a href="#">Действие</a></li>
                <li><a href="#">Другое действие</a></li>
                <li><a href="#">Еще ссылка</a></li>
                <li className="divider"></li>
                <li className="dropdown-submenu"><a href="#">Доп. ссылка</a>
                    <ul className="dropdown-menu">
                        { links.map( p => <li><a href={p.link}>{p.name}</a></li>)}
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default MenuDropdown;



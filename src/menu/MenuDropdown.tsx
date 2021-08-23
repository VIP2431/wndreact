import {DropdownButton} from "react-bootstrap";
import React from "react";
import {ITypeLinkMenu} from "../types/ITypeLinkMenu";

const MenuDropdown = (props: any) => {// React.FC<{links: ITypeLinkMenu[]}> = ({links}) => {

    return (
        <DropdownButton title="MenuDropdown" variant="secondary">
            <ul title="MenuDropdown" role="menu" aria-labelledby="dLabel">
                <li><a href="#">Действие</a></li>
                <li><a href="items">Другое действие</a></li>
                <li><a href="#">Еще ссылка</a></li>
                <li className="divider">Enum-Пусто</li>
                <li className="dropdown-submenu"><a href="#">Доп. ссылка</a>
                    <ul title="DropdownSubmenu" role="menu" aria-labelledby="dLabel">
                        { props.links.map( (p:ITypeLinkMenu) => <li key={p.name}>
                            <a href={p.link}>{p.name}</a>
                        </li>)}
                    </ul>
                </li>
            </ul>
        </DropdownButton>
    );
}

export default MenuDropdown;



import {Button, DropdownButton, NavDropdown} from "react-bootstrap";
import React from "react";
import {ETableVariant} from "../../types/IMain";
import {useDispatch} from "react-redux";
import {ENavbarActionTypes} from "../../store/reducers/navbarReducer";

export const MenuVariant: React.FC = () => {

    const dispatch = useDispatch();
    const setVariant = (variant: ETableVariant) => {
        localStorage.setItem("mainWndMainVariant", variant)
        dispatch({type:ENavbarActionTypes.RENDER_NAVBAR, payload: 1})
    }
    const variant =  localStorage.getItem("mainWndMainVariant")
    const curVariant = (variant !== null && variant !== undefined) ?  variant : ETableVariant.TABLE_FULL

    return (
        <DropdownButton className="drop" variant="secondary" title={curVariant}>
            {console.log('MenuVariant return=[' + curVariant + ']')}
                <NavDropdown.Item>
                    <Button onClick={() => setVariant( ETableVariant.TABLE_SHORT)} variant="secondary">
                        TABLE_SHORT
                    </Button>
                </NavDropdown.Item>
                <NavDropdown.Item>
                     <Button onClick={() => setVariant( ETableVariant.TABLE_MIDL)} variant="secondary">
                         TABLE___MIDL
                    </Button>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <Button onClick={() => setVariant( ETableVariant.TABLE_FULL)} variant="secondary">
                        TABLE___FULL_
                    </Button>
                </NavDropdown.Item>
        </DropdownButton>
    )
}


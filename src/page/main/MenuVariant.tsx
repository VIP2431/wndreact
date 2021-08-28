import {Button, DropdownButton, NavDropdown} from "react-bootstrap";
import React, {useEffect} from "react";
import {ETableVariant} from "../../types/IMain";
import {useDispatch} from "react-redux";
import {navbarChange, setVariant} from "../../store/toolkitRedux/navbarSlice";
import {useAppSelector} from "../../hooks/hooks";

export const MenuVariant: React.FC = () => {

    const curVariant = useAppSelector((state) => state.navbar.curVariant);

    const dispatch = useDispatch();
    const loadVariant = (variant: ETableVariant) => {
        localStorage.setItem("mainWndMainVariant", variant)
        dispatch(setVariant( variant))
        dispatch(navbarChange())
    }

    useEffect(() => {
        console.log("MenuVariant-useEffect")
        dispatch( setVariant(curVariant));
    }, []);

    return (
        <DropdownButton className="drop" variant="secondary" title={curVariant}>
            {console.log('MenuVariant return=[' + curVariant + ']')}
                <NavDropdown.Item>
                    <Button onClick={() => loadVariant( ETableVariant.TABLE_SHORT)} variant="secondary">
                        TABLE_SHORT
                    </Button>
                </NavDropdown.Item>
                <NavDropdown.Item>
                     <Button onClick={() => loadVariant( ETableVariant.TABLE_MIDL)} variant="secondary">
                         TABLE___MIDL
                    </Button>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <Button onClick={() => loadVariant( ETableVariant.TABLE_FULL)} variant="secondary">
                        TABLE___FULL_
                    </Button>
                </NavDropdown.Item>
        </DropdownButton>
    )
}


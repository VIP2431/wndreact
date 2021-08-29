import {Button, DropdownButton, NavDropdown} from "react-bootstrap";
import React, {FC, useEffect} from "react";
import {ETableVariant} from "../../types/IMain";
import {useDispatch} from "react-redux";
import {setVariant} from "../../store/toolkitRedux/navbarSlice";
import {useAppSelector} from "../../hooks/hooks";

export const MenuVariant: FC = () => {

    const navbar: number = useAppSelector((state) => state.navbar.value);
    let savVariant = localStorage.getItem("mainWndVariant")
    const curVariant: string = useAppSelector((state) => state.navbar.variant);

    if(typeof savVariant != "string"){
        savVariant = curVariant
        localStorage.setItem("mainWndVariant", curVariant)
    }
    const dispatch = useDispatch();
    if(!navbar) {
        dispatch(setVariant( savVariant))
    }
    const loadVariant = (variant: ETableVariant) => {
        localStorage.setItem("mainWndVariant", variant)
        dispatch(setVariant( variant))
    }
    console.log('MenuVariant-2 return=[' + curVariant + ']')

    useEffect(() => {
        dispatch( setVariant(curVariant));
    }, []);

    return (
        <DropdownButton className="drop" variant="secondary" title={curVariant}>
            {console.log('MenuVariant-4 return=[' + curVariant + ']')}
                <NavDropdown.Item>
                    <Button key={1} onClick={() => loadVariant( ETableVariant.TABLE_SHORT)} variant="secondary">
                        TABLE_SHORT
                    </Button>
                </NavDropdown.Item>
                <NavDropdown.Item>
                     <Button key={2} onClick={() => loadVariant( ETableVariant.TABLE_MIDL)} variant="secondary">
                         TABLE___MIDL
                    </Button>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <Button key={3} onClick={() => loadVariant( ETableVariant.TABLE_FULL)} variant="secondary">
                        TABLE___FULL_
                    </Button>
                </NavDropdown.Item>
        </DropdownButton>
    )
}


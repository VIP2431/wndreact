import React, {FC, useEffect} from "react";
import {TableRoom} from "../../componets/table/TableRoom";
import {TabNodeFull} from "./TabNodeFull";
import {ETableVariant} from "../../types/IMain";
import {TabNodeShort} from "./TabNodeShort";
import {TabNodeMidl} from "./TabNodeMidl";
import {useAppSelector} from "../../hooks/hooks";
import {loadItems} from "../../store/toolkitRedux/itemSlice";
import {useDispatch} from "react-redux";
import {navbarChange} from "../../store/toolkitRedux/navbarSlice";


const WndMain: FC = () => {

    const variant: string = useAppSelector((state) => state.navbar.variant);
    const navbar: number = useAppSelector((state) => state.navbar.value);
    const {items, isLoading, error, url} = useAppSelector((state) => state.items);

    const dispatch = useDispatch()
    if(!navbar) {
        dispatch(navbarChange())
    }

    useEffect(() => {
         dispatch( loadItems( url));
    }, [url]);

    return (
        <>
            {isLoading && <h1>Идет загрузка...url=[{url}]</h1>}
            {error && <h1>{error}</h1>}
            <h3>Смета -{navbar}-</h3>{console.log("WndMain return")}
            <TableRoom key='TableRoom' title={navbar}/>
            {
                (variant === ETableVariant.TABLE_MIDL) ?  <TabNodeMidl items={items}/>
                : (variant === ETableVariant.TABLE_SHORT) ?  <TabNodeShort items={items}/>
                    : <TabNodeFull items={items}/>
            }
        </>
    )
}

export default WndMain;

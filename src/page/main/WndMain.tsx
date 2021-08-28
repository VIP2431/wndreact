import React, {useEffect} from "react";
import {TableRoom} from "../../componets/table/TableRoom";
import {TabNodeFull} from "./TabNodeFull";
import {ETableVariant} from "../../types/IMain";
import {TabNodeShort} from "./TabNodeShort";
import {TabNodeMidl} from "./TabNodeMidl";
import { useAppSelector} from "../../hooks/hooks";
import { loadItems} from "../../store/toolkitRedux/itemSlice";
import {useDispatch} from "react-redux";


const WndMain = () => {

    const variant = localStorage.getItem("mainWndMainVariant")

    const navbar = useAppSelector((state) => state.navbar.value);
    const {items, isLoading, error, url} = useAppSelector((state) => state.items);

    const dispatch = useDispatch()
    useEffect(() => {
        console.log("WndMain-useEffect")
        dispatch( loadItems( url));
    }, [url]);

    return (
        <>
            {isLoading && <h1>Идет загрузка...url=[{url}]</h1>}
            {error && <h1>{error}</h1>}
            <h3>Смета -{navbar}-</h3>{console.log("WndMain return")}
            <TableRoom title={navbar}/>
            {
                (variant === ETableVariant.TABLE_MIDL) ?  <TabNodeMidl items={items}/>
                : (variant === ETableVariant.TABLE_SHORT) ?  <TabNodeShort items={items}/>
                    : <TabNodeFull items={items}/>
            }
        </>
    )
}

export default WndMain;

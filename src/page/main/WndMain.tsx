import React, {FC, useEffect} from "react";
import {TabNodeFull} from "./TabNodeFull";
import {ETableVariant} from "./IPageMain";
import {TabNodeShort} from "./TabNodeShort";
import {TabNodeMidl} from "./TabNodeMidl";
import {useAppSelector} from "../../hooks/hooks";
import {loadItems} from "../../store/toolkitRedux/itemSlice";
import {useDispatch} from "react-redux";

const WndMain: FC = () => {

    console.log("WndMain")
    const navbar: number = useAppSelector((state) => state.navbar.value);

    const variant: string = useAppSelector((state) => state.navbar.variant);
    const {items, isLoading, error, url} = useAppSelector((state) => state.items);

    const dispatch = useDispatch()
    useEffect(() => {
        console.log("WndMain useEffect №№№")
        dispatch( loadItems( url));
    }, [url]);

    return (
        <>{console.log("WndMain return")}
            {isLoading && <h1>Идет загрузка...url=[{url}]</h1>}
            {error && <h1>{error}</h1>}
            <h3>Смета -{navbar}-</h3>
            {
                (variant === ETableVariant.TABLE_MIDL) ?  <TabNodeMidl items={items}/>
                : (variant === ETableVariant.TABLE_SHORT) ?  <TabNodeShort items={items}/>
                    : <TabNodeFull items={items}/>
            }
        </>
    )
}

export default WndMain;

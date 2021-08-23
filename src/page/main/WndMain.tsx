import React, {FC, useEffect} from "react";
import {TableRoom} from "../../componets/table/TableRoom";
import {TabNodeFull} from "./TabNodeFull";
import {ETableVariant} from "../../types/IMain";
import {TabNodeShort} from "./TabNodeShort";
import {TabNodeMidl} from "./TabNodeMidl";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {getItems} from "../../store/action-creators/item";
import {EUrlApart} from "../../types/IItem";

const WndMain = () => {

    const variant = localStorage.getItem("mainWndMainVariant")

    const {navbar} = useTypedSelector(state => state.navbar);

    const {items, error, loading } = useTypedSelector( state => state.items);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getItems(EUrlApart.ITEM_DTO_NAME_REST_API_URL))
    }, []);

    if (loading){
        return <h1>Идет загрузка...</h1>
    }

    if (error){
        return <h1>{error}</h1>
    }

    return (
        <>
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

//     ItemService.getItemDtoListName().then((response) => {
//         setItems( response.data );
//         localStorage.setItem("mainWndMainSrc", response.data)})
//

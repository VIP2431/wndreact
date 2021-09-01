import React, {FC, useEffect} from "react";
import {TabNodeFull} from "./TabNodeFull";
import {ETableVariant} from "./IPageMain";
import {TabNodeShort} from "./TabNodeShort";
import {TabNodeMidl} from "./TabNodeMidl";
import {useAppSelector} from "../../hooks/hooks";
import {loadItems} from "../../store/toolkitRedux/itemSlice";
import {useDispatch} from "react-redux";
import WndParam from "./WndParam";
import {FormItem} from "./FormItem";

const WndMain: FC = () => {

    const navbar: number = useAppSelector((state) => state.navbar.value);
    const variant: string = useAppSelector((state) => state.navbar.variant);
    const {items, isLoading, error, url} = useAppSelector((state) => state.items);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadItems(url))
        },[ url, dispatch]
    )

    return (
        <main className='wnd-main'>
            <div className='wnd-home'>{console.log("WndMain return")}
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>{error}</h1>}
                <h3>Смета -{navbar}-</h3>
                {
                    (variant === ETableVariant.TABLE_MIDL) ?  <TabNodeMidl items={items}/>
                        : (variant === ETableVariant.TABLE_SHORT) ?  <TabNodeShort items={items}/>
                        : <TabNodeFull items={items}/>
                }
            </div>
            <aside className='wnd-param'>
                <div className='wnd-section-2'>
                    <WndParam />
                </div>
                <div className='wnd-section'>
                     <FormItem item={items[1]}/>
                </div>
                 <div className='wnd-section'>
                     <FormItem item={items[2]} />
                 </div>
            </aside>
        </main>
    )
}

export default WndMain;


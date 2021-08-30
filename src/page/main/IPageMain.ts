import {IItem} from "../../types/IItem";

export enum EUrlApart{
    ITEM_REST_API_URL = 'http://localhost:8091/api/items',
    NODE_REST_API_URL = 'http://localhost:8091/api/nodes',
    NODE_TYPE_REST_API_URL = 'http://localhost:8091/api/itemDtoTypeList',
    ITEM_DTO_NAME_REST_API_URL = 'http://localhost:8091/api/itemDtoListName',
    ITEM_DTO_ID_REST_API_URL = 'http://localhost:8091/api/itemDtoListId',
}

export enum ETableVariant {
    TABLE_FULL = 'TABLE_FULL',
    TABLE_MIDL = 'TABLE_MIDL',
    TABLE_SHORT = 'TABLE_SHORT'
}

export interface ITableProps {
    items: IItem[];
    variant?: ETableVariant.TABLE_FULL;
}

export const VARIANT_WND_MAIN_INIT_STATE = ETableVariant.TABLE_FULL
export const URL_ITEMS_INIT_STATE = EUrlApart.ITEM_DTO_NAME_REST_API_URL

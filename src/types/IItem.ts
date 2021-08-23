export  interface IItem {
    key: number;
    keyParent: number;
    codePoz: string;
    id: string;
    type: string;
    status: string;
    unit: string;
    name: string;
    title: string;
    flags: number;
    i1: number;
    i2: number;
    i3: number;
    d1: number;
    d2: number;
    d3: number;
    d4: number;
    category?:string;
    code?: string;
    vendor?: string;
}

export enum EUrlApart{
    ITEM_REST_API_URL = 'http://localhost:8091/api/items',
    NODE_REST_API_URL = 'http://localhost:8091/api/nodes',
    NODE_TYPE_REST_API_URL = 'http://localhost:8091/api/itemDtoTypeList',
    ITEM_DTO_NAME_REST_API_URL = 'http://localhost:8091/api/itemDtoListName',
    ITEM_DTO_ID_REST_API_URL = 'http://localhost:8091/api/itemDtoListId',
}

export interface IItemState {
    items: IItem[];
    loading: boolean;
    error: null | string;
}

export enum EItemActionTypes {
    GET_ITEMS = 'GET_ITEMS',
    GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS',
    GET_ITEMS_ERROR = 'GET_ITEMS_ERROR',
}

interface  IGetItemsAction {
    type: EItemActionTypes.GET_ITEMS;
}

interface IGetItemsSuccessAction {
    type: EItemActionTypes.GET_ITEMS_SUCCESS;
    payload: IItem[];
}

interface IGetItemsErrorAction {
    type: EItemActionTypes.GET_ITEMS_ERROR;
    payload: string;
}

export type IItemAction = IGetItemsAction | IGetItemsErrorAction | IGetItemsSuccessAction

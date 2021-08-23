import {IItem} from "./IItem";

export enum ETableVariant {
    TABLE_FULL = 'TABLE_FULL',
    TABLE_MIDL = 'TABLE_MIDL',
    TABLE_SHORT = 'TABLE_SHORT'
}

export interface ITableProps {
    items: IItem[];
    variant?: ETableVariant;
}

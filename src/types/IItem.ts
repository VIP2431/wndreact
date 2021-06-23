export  interface IItem {
    key: number;
    id: string;
    type: string;
    status: string;
    title: string;
    name: string;
    percentItem: number;
    unit: string;
    quantity: number;
    price: number;
    cost: number;
    sum: number;
    idItemDirectory?: string;
    category?:string;
    code?: string;
    vendor?: string;
};
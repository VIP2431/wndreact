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

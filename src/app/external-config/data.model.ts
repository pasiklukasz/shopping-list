export enum CATEGORIES {
    Fruits = 'Fruits',
    Vegetables = 'Vegetables',
    Sweets = 'Sweets',
    Others = 'Others'
}

export interface Item {
    name: string,
    category: CATEGORIES
}

//Todo change to some server js and finally to the DB data
export const STATIC_DATA_ITEMS: Item[] = [
    {name: 'jabłka', category: CATEGORIES.Fruits},
    {name: 'pomidory', category: CATEGORIES.Vegetables},
    {name: 'gruszki', category: CATEGORIES.Fruits},
    {name: 'papryka', category: CATEGORIES.Vegetables}
];

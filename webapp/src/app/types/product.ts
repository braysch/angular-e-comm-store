export interface Product {
    _id?: string;
    name: string;
    description?: string;
    shortDescription?: string;
    price?: number;
    discount?: number;
    sellingPrice?: number;
    images?: string[];
    categoryId?: string[];
}
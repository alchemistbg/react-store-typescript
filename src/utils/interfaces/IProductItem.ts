interface IProductItem {
    id: number,
    manufacturer: string,
    name: string,
    description: string,
    images: string[],
    sizes: string[],
    price: number,
    timesSold: number,
}

export default IProductItem;
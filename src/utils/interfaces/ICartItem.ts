import IProductItem from './IProductItem';

interface ICartItem extends IProductItem {
    productSize: string,
    productQty: number,
    productTotalPrice: number
}

export default ICartItem;
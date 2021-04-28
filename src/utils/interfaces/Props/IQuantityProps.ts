import IProductItemQty from "../IProductItemQty";

interface IQuantityProps {
    className: string,
    productItem: IProductItemQty,
    productQty: number,
    handleDecrement(): void,
    handleIncrement(): void
}

export default IQuantityProps;
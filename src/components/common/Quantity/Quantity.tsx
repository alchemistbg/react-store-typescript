import Button from './../Button/Button';
// import IProductItem from './../../../utils/interfaces/IProductItem';
// import ProductItem from './../../ProductItem/ProductItem';
import IQuantityProps from './../../../utils/interfaces/Props/IQuantityProps';
import QuantityWrapper from './Quantity.styles';

const Quantity: React.FC<IQuantityProps> = ({ className, productItem, productQty, handleDecrement, handleIncrement }) => {
    let qty;
    if (productItem) {
        qty = productItem.productQty;
    } else {
        qty = productQty;
    }

    return <QuantityWrapper className={className}>
        {
            qty === 1 ? (
                <Button
                    dataTestId={"decr"}
                    isDisabled={true}
                    className="form-button decrement"
                    onClick={handleDecrement}
                    btnText={""}
                    btnIcon="" />
            ) : (
                <Button
                    dataTestId={"decr"}
                    isDisabled={false}
                    className="form-button decrement"
                    onClick={handleDecrement}
                    btnText={""}
                    btnIcon="" />
            )
        }
        <span className="qty-number">{qty}</span>
        <Button
            dataTestId={"incr"}
            isDisabled={false}
            className="form-button increment"
            onClick={handleIncrement}
            btnText={""}
            btnIcon="" />
    </QuantityWrapper>;
}

export default Quantity;
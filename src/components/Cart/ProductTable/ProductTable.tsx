import { Link } from 'react-router-dom';
import ICartItem from './../../../utils/interfaces/ICartItem';
import Image from './../../common/Image/Image';
import Button from './../../common/Button/Button';
import ProductTableWrapper from './ProductTable.styles';
import Quantity from './../../common/Quantity/Quantity';
import ProductTableHeader from './ProductTableHeader/ProductTableHeader';
import { Fragment } from 'react';

type Props = {
    cart: ICartItem[],
    handleRemoveFromCart: (product: ICartItem) => void,
    handleDecrement: (product: ICartItem) => void,
    handleIncrement: (product: ICartItem) => void,
}

const ProductTable: React.FC<Props> = ({ cart, handleRemoveFromCart, handleDecrement, handleIncrement }) => {

    return <ProductTableWrapper>
        <ProductTableHeader />
        {
            cart.map((cartItem) => {

                const { productTotalPrice, productSize, ...clearedProduct } = cartItem;

                return <li key={cartItem.id + cartItem.productSize} className="cart-item">
                    <span className="cart-item-title">
                        <Link to={`/products/${cartItem.id}`}>
                            <Image
                                image={cartItem.images[0]}
                                imageClass="cart-image"
                                productItemName={cartItem.name}
                            />
                            <div className="title-info">
                                <span>
                                    Manufacturer:{" "}
                                    <span className="manufacturer">
                                        {cartItem.manufacturer}
                                    </span>
                                </span>
                                <span>Product name:
                                    <span className="name"> {cartItem.name}
                                    </span>
                                </span>
                                <span>
                                    Size:{" "}
                                    <span className="size">
                                        {cartItem.productSize}
                                    </span>
                                </span>
                            </div>
                        </Link>
                        <Button
                            dataTestId="buttonTestId"
                            isDisabled={false}
                            className="form-button button-delete product-table"
                            onClick={() => handleRemoveFromCart(cartItem)}
                            icon=""
                            btnText={"Remove this product"}
                        ></Button>
                    </span>
                    <span className="cart-item-sprice">
                        {cartItem.price.toFixed(2)} DKK
					</span>
                    <Quantity
                        className="cart-item-qty"
                        productItem={clearedProduct}
                        productQty={clearedProduct.productQty}
                        handleDecrement={() => handleDecrement(cartItem)}
                        handleIncrement={() => handleIncrement(cartItem)}
                    />
                    <span className="cart-item-tprice">
                        {cartItem.productTotalPrice} DKK
					</span>
                </li>
            })
        }
    </ProductTableWrapper >
}

export default ProductTable;
import db from './../../utils/db.json';

import { useContext, useState, useReducer } from 'react';
import { RouteComponentProps } from 'react-router-dom';

// import { ProductItemType } from './../../utils/types/types';

import ProductItemWrapper from './ProductItem.styles';
import Image from './../common/Image/Image';
import ImageThumbs from './ImageThumbs/ImageThumbs';
import Size from './../Size/Size';
import Quantity from './../common/Quantity/Quantity';
import Button from './../common/Button/Button';
import CartContext from '../../contexts/CartContext';
import showToast from './../../utils/toastr';
import { initialCartState, cartReducer } from '../../reducers/CartReducer';
import IProductItem from './../../utils/interfaces/IProductItem';
import ICardItem from './../../utils/interfaces/ICardItem';

type Props = {
    id: string;
}

const ProductItem = ({ match }: RouteComponentProps<Props>) => {

    const cartContext = useContext(CartContext);

    const { id } = match.params;

    const productItem: IProductItem = db.products.filter((targetProduct) => {
        return targetProduct.id === +id;
    })[0];

    let [productSize, setProductSize] = useState("");
    const handleSizeSelection = (size: string) => {
        setProductSize(size);
        document.getElementById('size-warning')?.classList.remove('visible');
        Array.from(document.getElementsByClassName('size-label')).map(elem => elem.classList.remove('selected'))
        document.getElementById(`${size}`)?.classList.add('selected');
    }

    let [imageToShow, setImageToShow] = useState(productItem.images[0]);
    const handleImageThumbClick = (image: string) => {
        setImageToShow(image);
    }

    let [productQty, setProductQty] = useState(1);

    const handleDecrement = () => {
        if (productQty > 1) {
            productQty -= 1;
            setProductQty(productQty);
        }
    }

    const handleIncrement = () => {
        productQty += 1;
        setProductQty(productQty);
    }

    const handleAddToCartClick = () => {
        if (!productSize) {
            document.getElementById('size-warning')?.classList.add('visible');
            showToast('simpleError', {
                title: "Please select a size!",
                message: ""
            });
            return;
        }

        showToast('success', {
            title: `${productItem.name} added successfully to your cart.`,
            message: ""
        });

        cartContext.cartDispatch({
            type: 'ADD_TO_CART',
            payload: {
                ...productItem,
                productQty,
                productSize,
                productTotalPrice: 0
            }
        });
    }

    return <ProductItemWrapper>
        <h3 className="manufacturer">{productItem.manufacturer}</h3>
        <span className="images">
            <Image image={imageToShow} imageClass="image-main" productItemName={productItem.name} />
            <ImageThumbs productItemName={productItem.name} images={productItem.images} handleImageThumbClick={handleImageThumbClick}></ImageThumbs>
        </span>
        <span className="wrapper">
            <span className="info-wrapper">
                <h5>{productItem.name}</h5>
                <h4>{productItem.price} DKK</h4>
                <h6>Description</h6>
                <p>{productItem.description}</p>
                <Size sizes={productItem.sizes} handleSizeSelection={handleSizeSelection} />
            </span>
            <span className="qty-wrapper">
                <Quantity
                    className="product-item-qty"
                    productItem={{ ...productItem, productQty }}
                    productQty={productQty}
                    handleDecrement={handleDecrement}
                    handleIncrement={handleIncrement} />
                <Button
                    isDisabled={false}
                    className="form-button product-item-btn"
                    btnText="Add to cart"
                    onClick={handleAddToCartClick}
                    dataTestId="" icon="" />
            </span>
        </span>
    </ProductItemWrapper>
}

export default ProductItem;
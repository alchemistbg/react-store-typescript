import { Link } from "react-router-dom";

import { miscConstants } from './../../utils/miscConstants';
import { CardItemType } from './../../utils/types';
import { ProductItemType } from './../../utils/types';
import ProductCardWrapper from './ProductCard.styles';
import Image from './../common/Image/Image';

type Props = {
    productItem: ProductItemType;
}

const ProductCard: React.FC<Props> = ({ productItem }) => {
    return <ProductCardWrapper>
        <Link className="product-card" to={`${miscConstants.basicUrl}/products/${productItem.id}`}>
            <span className="card-inner">
                <div className="details">
                    Details
                </div>
                <Image image={productItem.images[0]} imageClass="card-media" productItemName={productItem.name} />
                <span className="card-meta">
                    <p className="manufacturer">{productItem.manufacturer}</p>
                    <h6>{productItem.name}</h6>
                </span>
                <span className="card-footer">
                    <h6 className="price">{productItem.price} DKK</h6>
                </span>
            </span>
        </Link >
    </ProductCardWrapper>
}

export default ProductCard;
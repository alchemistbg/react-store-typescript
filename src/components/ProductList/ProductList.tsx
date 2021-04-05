import IProductItem from '../../utils/interfaces/IProductItem';
import ProductCard from '../ProductCard/ProductCard';
// import { ProductItemType } from '../../utils/types/types';


import { ProductListWrapper } from './ProductList.styles';

type Props = {
    productItems: IProductItem[]
}

const ProductList: React.FC<Props> = ({ productItems }) => {
    return (
        <ProductListWrapper>
            <h1 className="list-title">Our Products</h1>

            <div className="product-list">
                {
                    productItems.map((product => {
                        return <ProductCard key={product.id} productItem={product} />
                    }))
                }
            </div>

        </ProductListWrapper>
    );
}

export default ProductList;
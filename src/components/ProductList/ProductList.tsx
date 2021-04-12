import { useState } from 'react';
import IProductItem from '../../utils/interfaces/IProductItem';
import ProductCard from '../ProductCard/ProductCard';
// import { ProductItemType } from '../../utils/types/types';


import { ProductListWrapper } from './ProductList.styles';
import Select from './../common/Select/Select';

type Props = {
    productItems: IProductItem[]
}

const ProductList: React.FC<Props> = ({ productItems }) => {
    const selectListItems = ['123', '1', '2'];

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(selectListItems[0]);

    const onClickHandler = (evt: React.SyntheticEvent<HTMLLIElement>) => {
        const clickedItem = evt.currentTarget as HTMLLIElement;
        setSelectedOption(clickedItem.innerText);
        setIsOpen(false);
    };

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <ProductListWrapper>
            <h1 className="list-title">Our Products</h1>

            <span className="sort-select-container">
                <h6 className={`sort-select-header ${isOpen ? "opened" : ""}`} onClick={toggleOpen}>Sort by: {selectedOption}</h6>
                {
                    isOpen &&
                    <Select
                        // className=""
                        selectListClassName="sort-select-list"
                        selectItemClassName="sort-select-item"
                        selectListItems={selectListItems}
                        onClickHandler={onClickHandler}
                        selectedOption={selectedOption}
                    />
                }
            </span>
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
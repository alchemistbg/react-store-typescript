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
    const selectListItems: ISelectItem[] = [
        {
            text: "Popularity (Desc)",
            key: "timesSoldDesc",
            criteria: "timesSold",
            direction: "Desc"
        },
        {
            text: "Popularity (Asc)",
            key: "timesSoldAsc",
            criteria: "timesSold",
            direction: "Asc"
        },
        {
            text: "Price (Desc)",
            key: "priceDesc",
            criteria: "price",
            direction: "Desc"
        },
        {
            text: "Price (Asc)",
            key: "priceAsc",
            criteria: "price",
            direction: "Asc"
        },
    ]

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    let [sortCriteria, setSortCriteria] = useState(sortContext.sortState.sort.criteria);
    let [sortDirection, setSortDirection] = useState(sortContext.sortState.sort.direction);
    const getSelectedItem = (clickedItem: HTMLLIElement | string): ISelectItem => {
        let selectedItem: ISelectItem;
        if (typeof clickedItem === 'string') {
            selectedItem = selectListItems.filter((item) => {
                return item.key === clickedItem;
            })[0];
        } else {
            selectedItem = selectListItems.filter((item) => {
                return item.key === clickedItem.getAttribute("item-key");
            })[0];
        }
        return selectedItem;
    }

    const sortProductList = () => {
        productItems.sort((p1, p2) => {
            if (sortDirection === "Desc") {
                return +p2[sortCriteria as keyof IProductItem] - +p1[sortCriteria as keyof IProductItem]
            } else {
                return +p1[sortCriteria as keyof IProductItem] - +p2[sortCriteria as keyof IProductItem]
            }
        });
    }
    sortProductList();
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }
    const onLoad = () => {
        const localStorageSortData: ISortState = JSON.parse(localStorage.getItem('tsSortData')!);

        if (localStorageSortData) {
            // console.log(localStorageSortData);
            sortContext.sortDispatch({
                type: "LOAD_SORT_FROM_STORAGE",
                payload: {
                    ...localStorageSortData
                }
            });
            setSortCriteria(sortContext.sortState.sort.criteria);
            setSortDirection(sortContext.sortState.sort.direction);

            const selectedOption = getSelectedItem(`${sortCriteria}${sortDirection}`);
            if (selectedOption) {
                setSelectedOption(selectedOption.text);
            }
        }

        sortProductList();
    }
    const onSelectChange = (evt: React.SyntheticEvent<HTMLLIElement>) => {
        const clickedItem = evt.currentTarget.lastChild as HTMLLIElement;
        setSelectedOption(clickedItem.innerText);
        setIsOpen(false);

        const selectedItem = getSelectedItem(clickedItem);

        sortContext.sortDispatch({
            type: 'SORT',
            payload: {
                sort: { ...selectedItem }
            }
        });

        setSortCriteria(selectedItem.criteria);
        setSortDirection(selectedItem.direction);

        sortProductList();
    };

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
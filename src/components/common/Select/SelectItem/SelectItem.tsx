import SelectItemWrapper from './SelectItem.styles';

type Props = {
    selectItemKey: string,
    selectItemClassName: string,
    selectItem: string,
    onClickHandler(evt: React.SyntheticEvent<HTMLLIElement>): void,
    isSelected: boolean
}

const SelectItem: React.FC<Props> = ({ selectItemKey, selectItemClassName, selectItem, onClickHandler, isSelected }) => {
    console.log(selectItem + isSelected);
    return (
        <SelectItemWrapper
            key={selectItemKey}
            className={`${selectItemClassName} ${isSelected ? "selected" : ""}`}
            onClick={onClickHandler}
        >
            <span className="list-item">{selectItem}</span>

        </SelectItemWrapper>
    )
}

export default SelectItem;
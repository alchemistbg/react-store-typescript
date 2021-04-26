import ISelectItemProps from '../../../../utils/interfaces/Props/ISelectItemProps';
import SelectItemWrapper from './SelectItem.styles';

const SelectItem: React.FC<ISelectItemProps> = ({ selectItemKey, selectItemClassName, selectItem, onSelectChange, isSelected }) => {
    return (
        <SelectItemWrapper
            key={selectItemKey}

            className={`${selectItemClassName} ${isSelected ? "selected" : ""}`}
            onClick={onSelectChange}
        >
            <span className="list-item" item-key={selectItemKey}>{selectItem}</span>

        </SelectItemWrapper>
    )
}

export default SelectItem;
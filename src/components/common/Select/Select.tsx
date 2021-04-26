import SelectItem from './SelectItem/SelectItem';
import SelectWrapper from './Select.styles';
import ISelectProps from './../../../utils/interfaces/Props/ISelectProps';

const Select: React.FC<ISelectProps> = ({ selectListClassName, selectItemClassName, selectListItems, onSelectChange, selectedOption }) => {

    return <SelectWrapper className={selectListClassName}>
        {
            selectListItems.map((item) => (
                <SelectItem
                    key={item.text}
                    selectItemClassName={selectItemClassName}
                    selectItemKey={item.key} selectItem={item.text}
                    onSelectChange={onSelectChange}
                    isSelected={selectedOption === item.text}
                />
            ))
        }
    </SelectWrapper>
}

export default Select;
// import { useState } from 'react';
import SelectItem from './SelectItem/SelectItem';
import SelectWrapper from './Select.styles';
import ISelectItem from './../../../utils/interfaces/ISelectItem';

type Props = {
    selectListClassName: string,
    selectItemClassName: string,
    selectListHeader?: string,
    selectListItems: ISelectItem[],
    onSelectChange(evt: React.SyntheticEvent<HTMLLIElement>): void,
    selectedOption: string,
}

const Select: React.FC<Props> = ({ selectListClassName, selectItemClassName, selectListItems, onSelectChange, selectedOption }) => {

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
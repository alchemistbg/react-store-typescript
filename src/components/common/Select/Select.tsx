import { useState } from 'react';
import SelectItem from './SelectItem/SelectItem';
import SelectWrapper from './Select.styles';

type Props = {
    selectListClassName: string,
    selectItemClassName: string,
    selectListHeader?: string,
    selectListItems: string[],
    onClickHandler(evt: React.SyntheticEvent<HTMLLIElement>): void,
    selectedOption: string,
}

const Select: React.FC<Props> = ({ selectListClassName, selectItemClassName, selectListItems, onClickHandler, selectedOption }) => {

    return <SelectWrapper className={selectListClassName}>
        {
            selectListItems.map((item) => (
                <SelectItem
                    key={item}
                    selectItemClassName={selectItemClassName}
                    selectItemKey={item} selectItem={item}
                    onClickHandler={onClickHandler}
                    isSelected={selectedOption === item}
                />
            ))
        }
    </SelectWrapper>
}

export default Select;
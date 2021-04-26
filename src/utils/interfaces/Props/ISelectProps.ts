import ISelectItem from "../ISelectItem";

interface ISelectProps {
    selectListClassName: string,
    selectItemClassName: string,
    selectListHeader?: string,
    selectListItems: ISelectItem[],
    onSelectChange(evt: React.SyntheticEvent<HTMLLIElement>): void,
    selectedOption: string,
}

export default ISelectProps;
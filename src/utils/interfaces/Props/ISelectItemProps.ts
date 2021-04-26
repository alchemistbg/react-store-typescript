interface ISelectItemProps {
    selectItemKey: string,
    selectItemClassName: string,
    selectItem: string,
    onSelectChange(evt: React.SyntheticEvent<HTMLLIElement>): void,
    isSelected: boolean
}

export default ISelectItemProps;
import styled from 'styled-components';

const SelectListWrapper = styled.ul.attrs((props) => ({
    className: props.className
}))`
    cursor: pointer;
`;

export default SelectListWrapper;
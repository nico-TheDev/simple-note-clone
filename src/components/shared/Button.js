import styled from 'styled-components';

export default styled.button`
    color: ${(props) => props.color ? props.color : 'inherit'};
    display: inline-block;
`;
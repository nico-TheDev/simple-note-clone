import styled from 'styled-components';

export default styled.div`
    padding:1rem;
    background:${props => props.bg};
    height:90px;
    border-bottom:1px solid black;
    color:${props => props.color}
`;
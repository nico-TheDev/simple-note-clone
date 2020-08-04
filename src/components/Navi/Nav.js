import styled from "styled-components";

export default styled.nav`
    width: 20vw;
    display: grid;
    grid-template-rows: auto 1fr;
    position:absolute;
    height:100%;
    transform:translateX(${props => props.open ? '0' : '-100%'});
    border-right:1px solid black;
`;

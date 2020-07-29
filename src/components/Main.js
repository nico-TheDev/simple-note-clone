import styled from 'styled-components';

const Main = styled.div`
    display:grid;
    grid-template-columns:30vw 1fr;
    height:100vh;
    background:${props => props.theme}
    /* transform:translateX(20%) */
`;

export default Main;
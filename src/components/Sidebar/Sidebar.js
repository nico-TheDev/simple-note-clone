import styled from 'styled-components';

const Sidebar = styled.div`
    display:grid;
    grid-template-rows:12vh 88vh;
    border-right:1px solid black;
    border-left:1px solid black;
    transform:translateX(${props => props.navbarOpen ? '20vw' : '0'})

`;

export default Sidebar;
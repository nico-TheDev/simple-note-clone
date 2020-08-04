import styled from 'styled-components';

const Sidebar = styled.div`
    display:grid;
    grid-template-rows:12vh 88vh;
    border-right:1px solid black;
    transform:translateX(${props => props.navbarOpen ? '20vw' : '0'});
    filter:${props => props.navbarOpen ? 'blur(3px)' : 'none'};
    /* visibility:${props => props.sidebarOpen ? 'visible' : 'hidden'}; */
    /* position:${props => props.sidebarOpen ? 'static' : 'absolute'}; */
    /* order:${props => props.sidebarOpen ? '10' : 'unset'}; */

    @media only screen and (max-width:800px){
        transform:translateX(${props => props.navbarOpen ? '30vw' : '0'});

    }

`;

export default Sidebar;
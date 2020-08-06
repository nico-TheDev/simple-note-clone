import styled from "styled-components";
import { useContext } from "react";
import { UIContext } from "../../contexts/UIContext";

const { state } = useContext(UIContext);

const Sidebar = styled.div`
    display: grid;
    grid-template-rows: 12vh 88vh;
    border-right: 1px solid black;
    transform: translateX(${(props) => (state.isNavbarOpen ? "20vw" : "0")});
    filter: ${(props) => (state.isNavbarOpen ? "blur(3px)" : "none")};
    
    @media only screen and (max-width: 800px) {
        transform: translateX(${(props) => (props.navbarOpen ? "30vw" : "0")});
    }
`;

export default Sidebar;

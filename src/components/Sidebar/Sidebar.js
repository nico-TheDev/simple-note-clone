import styled from "styled-components";

const Sidebar = styled.div`
    display: grid;
    grid-template-rows: 12vh 88vh;
    border-right: 1px solid black;
    transform: translateX(${({ showNavbar }) => (showNavbar ? "20vw" : "0")});
    filter: ${({ showNavbar }) => (showNavbar ? "blur(3px)" : "none")};

    @media only screen and (max-width: 800px) {
        transform: translateX(${({showNavbar}) => (showNavbar ? "30vw" : "0")});
    }
`;

export default Sidebar;

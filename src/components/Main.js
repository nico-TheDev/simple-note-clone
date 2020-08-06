import styled from "styled-components";
import { useContext } from "react";
import { UIContext } from "../contexts/UIContext";

const { state } = useContext(UIContext);

const Main = styled.div`
    display: grid;
    grid-template-columns:30vw 1fr;
    height: 100vh;
    background: ${(props) =>
        props.darkMode ? "var(--darkMain)" : "var(--lightMain)"};
    color: ${(props) =>
        props.darkMode ? "var(--darkText)" : "var(--lightText)"};
    transform: ${(props) => (props.showInfo ? "translateX(-20vw)" : "none")};
    filter: ${(props) => (props.showInfo ? "blur(3px)" : "none")};
    
    @media only screen and (max-width:800px){
        grid-template-columns:1fr;
    }

`;

export default Main;

import styled from "styled-components";

export default styled.ul`
    display: grid;
    gap: 1rem;
    align-content: start;
    width: 20vw;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    background: ${(props) =>
        props.darkMode ? "var(--darkMain)" : "var(--lightMain)"};
    transform: ${(props) =>
        props.showInfo ? "translateX(0)" : "translateX(100%)"};
    color: ${(props) =>
        props.darkMode ? "var(--darkText)" : "var(--lightText)"};
    border-left: 1px solid black;
    & > * {
        padding: 0.5rem 1rem;
    }
`;

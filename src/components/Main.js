import styled from "styled-components";

const Main = styled.div`
    display: grid;
    grid-template-columns: 30vw 1fr;
    height: 100vh;
    background: ${({ darkMode }) =>
        darkMode ? "var(--darkMain)" : "var(--lightMain)"};
    color: ${({ darkMode }) =>
        darkMode ? "var(--darkText)" : "var(--lightText)"};
    transform: ${({ showInfo }) => (showInfo ? "translateX(-20vw)" : "none")};
    filter: ${({ showInfo }) => (showInfo ? "blur(3px)" : "none")};

    @media only screen and (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`;

export default Main;

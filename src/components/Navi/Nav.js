import styled from "styled-components";

export default styled.nav`
    width: 20vw;
    display: grid;
    grid-template-rows: auto 1fr;
    position: absolute;
    height: 100%;
    transform: translateX(${({ open }) => (open ? "0" : "-100%")});
    border-right: 1px solid black;
    background: ${({ darkMode }) =>
        darkMode ? "var(--darkMain)" : "var(--lightMain)"};

    @media only screen and (max-width: 800px) {
        width: 30vw;
    }
`;

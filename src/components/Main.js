import styled from "styled-components";

const Main = styled.div`
    display: grid;
    grid-template-columns: 30vw 1fr;
    height: 100vh;
    background: ${(props) => (props.darkMode ? 'var(--darkMain)' : "var(--lightMain)")};
    color:${(props) => (props.darkMode ? 'var(--darkText)' : 'var(--lightText)')};
`;

export default Main;

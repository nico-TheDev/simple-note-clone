import styled from "styled-components";

export default styled.input`
    background: ${({ bg }) => (bg ? "transparent" : "white")};
    font-size: 1rem;
    color: inherit;
    border: none;
    width: 10rem;
    justify-self: start;
    padding: 0.5rem;
    outline: none;
`;

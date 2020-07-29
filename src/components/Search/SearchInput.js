import styled from "styled-components";

export default styled.input`
    flex: 1;
    padding: 0.5rem 1rem;
    color: inherit;
    border: 1px solid ${(props) => props.color};
    border-radius: 3rem;
    outline:none;
    margin:0 0.5rem;
`;

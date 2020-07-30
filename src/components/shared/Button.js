import styled from "styled-components";

export default styled.button`
    color: ${(props) => (props.color ? props.color : "inherit")};
    display: inline-block;
    background: ${(props) => (props.bg ? props.bg : "initial")};
    padding: ${(props) => (props.bg ? '0.5rem 1rem' : "initial")};

    &:hover{
        background:darken(${(props) => (props.bg ? props.bg : "initial")},10%);
    }
`;

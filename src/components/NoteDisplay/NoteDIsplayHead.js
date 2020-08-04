import styled from 'styled-components';


export default styled.div`
    display:flex;
    align-items:center;
    border-bottom:1px solid black;
    padding:0.5rem 1rem;
    width:100%;
    & button{
        margin-left:1rem;
    }
    & button:first-child{
        margin-right:auto;
        margin-left:0;
    }
`;

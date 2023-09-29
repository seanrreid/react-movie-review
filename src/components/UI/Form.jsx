import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    padding: 1rem;
    width: 100%;

    label,
    input {
        font-size: 1.3rem;
        width: 100%;
    }

    label {
        margin: 4px 0;
    }

    input {
        margin: 8px 0;
        padding: 4px 8px;
    }
`
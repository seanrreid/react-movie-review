import styled from 'styled-components';

export const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 8px;
`;

export const Card = styled.div`
    background-color: #eaeaea;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    color: #111010;
    display: grid;
    flex: 1 0 30rem;
    margin: 0.5rem;
    max-width: 35rem;
    overflow: hidden;

    figure {
        margin: 0;
        padding: 0;
    }

    img {
        height: auto;
        object-fit: fill;
        width: 100%;
    }

    .wrapper {
        padding: 8px 16px 16px;
        width: 100%;
    }

    h2,
    h3 {
        margin: 0.5rem 0;
    }
`;

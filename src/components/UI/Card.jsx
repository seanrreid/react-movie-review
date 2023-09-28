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
    display: flex;
    flex-wrap: wrap;
    margin: 0.5rem;
    max-width: 25rem;
    overflow: hidden;
    width: 100%;

    img {
        height: auto;
        width: 100%;
    }

    .caption {
        color: #111010;
        padding: 8px 16px;
    }

    .caption h2 {
        margin: 0.5rem 0;
    }
`;

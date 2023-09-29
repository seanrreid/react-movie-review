import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, UnorderedList } from './UI';
import { MovieReview } from './MovieReview';

const MovieCardLayout = styled(Card)`
    grid-template-columns: repeat(2, 1fr);

    figure {
        padding: 16px 8px 0;
    }

    .submit-review {
        display: flex;
        flex-wrap: wrap;
        grid-column: 1/span 2;
        padding: 0 1rem 1rem;
    }
`;

export const MovieCard = ({ movie }) => {
    return (
        <MovieCardLayout>
            <figure className='image'>
                <img src={movie.Poster} alt='image' />
            </figure>
            <div className='content'>
                <div className='wrapper'>
                    <h2>{movie.Title}</h2>
                    <p>{movie.Plot}</p>
                </div>
                <div className='wrapper reviews'>
                    <h3>Reviews</h3>
                    <UnorderedList>
                        {movie.Ratings.map((rating, index) => (
                            <li key={`${index} + ${rating.Source}`}>
                                {rating.Source}: {rating.Value}
                            </li>
                        ))}
                    </UnorderedList>
                </div>
            </div>
            <MovieReview movieTitle={movie.Title} className='submit-review' />
        </MovieCardLayout>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        Poster: PropTypes.string,
        Title: PropTypes.string,
        Plot: PropTypes.string,
        Ratings: PropTypes.array,
    }),
};

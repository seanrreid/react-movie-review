import PropTypes from 'prop-types';
import { Card, UnorderedList } from './UI';

export const MovieCard = ({ movie }) => {
    return (
        <Card>
            <img src={movie.Poster} alt='image' />
            <div className='caption'>
                <h2>{movie.Title}</h2>
                <p>{movie.Plot}</p>
                <UnorderedList>
                    {movie.Ratings.map((rating, index) => (
                        <li key={`${index} + ${rating.Source}`}>
                            {rating.Source}: {rating.Value}
                        </li>
                    ))}
                </UnorderedList>
            </div>
        </Card>
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

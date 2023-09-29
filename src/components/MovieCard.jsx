import PropTypes from 'prop-types';
import { Card, UnorderedList } from './UI';
import { MovieReview } from './MovieReview';

export const MovieCard = ({ movie }) => {
    return (
        <Card>
            <img src={movie.Poster} alt='image' />
            <div className='details'>
                <h2>{movie.Title}</h2>
                <p>{movie.Plot}</p>
            </div>
            <div className='details reviews'>
                <h3>Reviews</h3>
                <UnorderedList>
                    {movie.Ratings.map((rating, index) => (
                        <li key={`${index} + ${rating.Source}`}>
                            {rating.Source}: {rating.Value}
                        </li>
                    ))}
                </UnorderedList>
            </div>
            <MovieReview movieTitle={movie.Title} />
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

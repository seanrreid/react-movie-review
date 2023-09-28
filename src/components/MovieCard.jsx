import { Card } from './UI';

// eslint-disable-next-line react/prop-types
export const MovieCard = ({ movie }) => {
    console.log('movie', movie);
    return (
        <Card>
            <img src={movie.Poster} alt='image' />
            <div className='caption'>
                <h2>{movie.Title}</h2>
                <p>{movie.Plot}</p>
            </div>
        </Card>
    );
};

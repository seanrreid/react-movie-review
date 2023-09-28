import { useState } from 'react';
import { CardWrapper } from './UI';
import { MovieCard } from './MovieCard';

export const MovieSearch = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const getMovie = async (movieTitle) => {
        const apiUrl = `http://www.omdbapi.com/?t=${movieTitle}&apikey=66f230e4`;
        const data = await fetch(apiUrl).then((response) => response.json());
        setMovies([...movies, data]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getMovie(searchValue);
        setSearchValue('');
    };

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <>
            <section>
                <form onSubmit={handleSubmit}>
                    <label>
                        Search For a Move by Title
                        <input
                            type='text'
                            value={searchValue}
                            placeholder='What title should I look up?'
                            onChange={handleChange}
                        />
                    </label>
                    <button type='submit'>Get Movie</button>
                </form>
            </section>
            <section>
                <CardWrapper>
                    {movies.length > 0 &&
                        movies.map((movie) => (
                            <MovieCard key={movie.imdbID} movie={movie} />
                        ))}
                </CardWrapper>
            </section>
        </>
    );
};

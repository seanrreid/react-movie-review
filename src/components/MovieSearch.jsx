import { useState } from 'react';
import { MovieCard } from './MovieCard';
import { CardWrapper } from './Card';

export const MovieSearch = () => {
    const [movie, setMovie] = useState(null);

    const getMovie = async () => {
        console.log(movie);
        const apiUrl = 'http://www.omdbapi.com/?t=Hackers&apikey=66f230e4';
        const data = await fetch(apiUrl).then((response) => response.json());
        setMovie(data);
    };

    return (
        <>
            <section>
                <button onClick={getMovie}>Get Movie</button>
            </section>
            <section>
                <CardWrapper>
                    {!!movie && <MovieCard movie={movie} />}
                </CardWrapper>
            </section>
        </>
    );
};

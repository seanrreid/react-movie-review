import { MovieSearch } from './components/MovieSearch';
import { Main, Wrapper, Title } from './components/UI';

function App() {
    return (
        <>
            <header>
                <Wrapper>
                    <Title>Movie Reviews Are Sooooooooo Cool</Title>
                </Wrapper>
            </header>
            <Main>
                <Wrapper>
                    <MovieSearch />
                </Wrapper>
            </Main>
        </>
    );
}

export default App;

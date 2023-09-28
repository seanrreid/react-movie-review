import { MovieSearch } from './components/MovieSearch';
import { MainWrapper } from './components/MainWrapper';
import { Title } from './components/Headings';

function App() {
    return (
        <>
            <MainWrapper>
                <Title>Movie Reviews Are Sooooooooo Cool</Title>
                <MovieSearch />
            </MainWrapper>
        </>
    );
}

export default App;

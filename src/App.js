import { LanguageContextProvider } from './Context/Language';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Comments from './components/Comments/Comments';


function App() {
  return (
    <LanguageContextProvider>
      <NavBar />
      <Home />
      <Comments />
    </LanguageContextProvider>
  );
}

export default App;

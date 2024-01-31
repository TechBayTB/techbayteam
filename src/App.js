import { LanguageContextProvider } from './Context/Language';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Comments from './components/Comments/Comments';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <LanguageContextProvider>
      <NavBar />
      <Home />
      <Comments />
      <Contact />
    </LanguageContextProvider>
  );
}

export default App;

import { LanguageContextProvider } from './Context/Language';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Comments from './components/Comments/Comments';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <LanguageContextProvider>
      <NavBar />
      <Home />
      <Comments />
      <Services />
      <Contact />
    </LanguageContextProvider>
  );
}

export default App;

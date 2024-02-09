import { LanguageContextProvider } from './Context/Language';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Comments from './components/Comments/Comments';
import Services from './components/Services/Services';
import Email from './components/Email/Email';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './index.css'


function App() {
  return (
    <LanguageContextProvider>
      <NavBar />
      <Home />
      <AboutMe />
      <Comments />
      <Services />
      <Email />
      <Contact />
      <Footer />
    </LanguageContextProvider>
  );
}

export default App;

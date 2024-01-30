import NavBar from './components/NavBar/NavBar';
import { LanguageContextProvider } from './Context/Language';


function App() {
  return (
    <LanguageContextProvider>
      <NavBar />
    </LanguageContextProvider>
  );
}

export default App;

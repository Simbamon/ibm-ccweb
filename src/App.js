import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar, Footer } from './components'
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';

function App() {

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      < Home />
      <Footer />
    </Router>
  );
}

export default App;

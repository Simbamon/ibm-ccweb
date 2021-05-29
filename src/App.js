import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Footer } from './components'
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';

function App() {

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/ibm-demozone/' exact component={ Home } />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

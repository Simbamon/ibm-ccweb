import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Footer } from './components'
import GlobalStyle from './globalStyles';

function App() {
  const { t, i18n } = useTranslation();
  
  function handleClick(lang){
    i18n.changeLanguage(lang);
  }

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <p>Test</p>
      <p onClick={()=>handleClick('en')}>English</p>
      <p onClick={()=>handleClick('ko')}>Korean</p>      
      <p>{t('Language.1')}</p>
      <p>{t('Summary.1')}</p>
    </Router>
  );
}

export default App;

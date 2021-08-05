import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';


function App() {
  return (
    <>
    
    <ThemeProvider theme ={ theme }>
      <GlobalStyle/>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ Home}/>
        </Switch>
        </BrowserRouter>
      </ThemeProvider>
      </>
  );
}

export default App;

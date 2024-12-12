import './App.css';
import FullApp from './App/FullApp';
import './variables.css';
import { ThemeProvider } from './components/ThemeContext';
import { Provider as StoreProvider } from'react-redux'; 
import store from "../src/redux/AppStore";

function App() {

  return (
    <div>
      <StoreProvider store={store}>
      <ThemeProvider>
      <FullApp />
      </ThemeProvider>
      </StoreProvider>
    </div>
  );
}

/**
 * <Router>
 *  <Appsetup>
 * <switch>
 * <route>
 * </route>
 * </switch>
 *  </Appsetup>
 * </Router>
 */

/**
 * <leftsidebar>
 * </leftsidebar>
 * <topbar/>
 * {children}
 */



export default App;

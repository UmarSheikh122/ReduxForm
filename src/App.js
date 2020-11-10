import ClickButton from './ClickButton'
import {Provider} from 'react-redux'
import store from './Redux/store'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Contact from './Contact'
import Navbar from './Navbar'
function App() {
  return (
    <Router>
    <div className="App">
    
  <Provider store={store}>
    <Switch>
    <Route exact path="/Contact" component={Contact}/>
    
    </Switch>
      
  <ClickButton/>   
  </Provider>
    </div>
    </Router>
  );
}



export default App;

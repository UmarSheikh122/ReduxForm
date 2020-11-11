import ClickButton from './ClickButton'
import {Provider} from 'react-redux'
import store from './Redux/store'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Contact from './Contact'
import Navbar from './Navbar';

console.log(store.getState());
function App() {
  return (
     <Router>
    <Provider store={store}>

  <div className="App">
    <Switch>
    <Route exact path="/" component={ClickButton}/>
    <Route exact path="/Contact" component={Contact}/>
    
    </Switch>
    </div>
    </Provider>

    </Router>
  );
}



export default App;

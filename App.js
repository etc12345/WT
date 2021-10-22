import './App.css';
import Final from './components/Final';
import Login from './components/Login';
import Form from './components/Form';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route exact path="/Final">
          <Final/>
        </Route>
        <Route exact path="/Form">
          <Form/>
        </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;


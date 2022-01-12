import './App.scss';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Cocktail from './pages/Cocktail';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/cocktail/:drinkId" component={Cocktail} />
          <Route path="/" component={Home} exact />
          <Route>404 not found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

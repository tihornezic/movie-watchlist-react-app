import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Watchlist from './components/Watchlist'
import Watched from './components/Watched'
import Add from './components/Add'

function App() {

  return (
    <div>
      <Router>
        <Header />
        <div className='container'>
          <Switch>
            {/* home route */}
            <Route exact path='/'>
              <Watchlist />
            </Route>
            <Route path='/watched'>
              <Watched />
            </Route>
            <Route path='/add'>
              <Add />
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;

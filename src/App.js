import './App.css';
import GameList from './components/gamelist/GameList'
import Game from './components/game/Game'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </header>
      <Router>
        <Switch>
          <Route exact path="/"><GameList /></Route>
          <Route exact path="/game/:id"><Game /></Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

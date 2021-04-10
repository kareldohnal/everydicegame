import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import './App.css';
import { Game } from "./pages/Game/Game";
import { Lobby } from './pages/Lobby/Lobby';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/game/:roomID" component={Game} />
          <Route path="/" component={Lobby} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import './App.css';
import { Game } from "./pages/Game/Game";
import { Landing } from './pages/Landing/Landing';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/game/:roomID" component={Game} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

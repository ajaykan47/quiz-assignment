import './App.css';
import Quiz from './components/Quiz';
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      	<Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Quiz />
            )}
          />
        </Switch>
    </div>
  );
}

export default App
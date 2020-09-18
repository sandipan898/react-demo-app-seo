import React from 'react';
import { PostList } from './components/PostList';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={PostList}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

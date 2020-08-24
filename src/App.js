import React from 'react';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chats from './Chats';
import ChatScreen from './ChatScreen';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/chat/:person'>
            <Header backButton='/chat' />
            <ChatScreen />
          </Route>
          <Route path='/chat'>
            <Header backButton='/' />
            <Chats />
          </Route>
          <Route path='/'>
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;


{/* Header  */ }
{/* Tinder Cards */ }
{/* Buttons below tinder cards */ }

{/* Chats screen */ }
{/* Individual Chat screen */ }

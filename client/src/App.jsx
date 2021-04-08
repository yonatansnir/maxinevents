import React, { useState } from 'react'
import { Switch, Route } from "react-router-dom";
import EventsList from './components/events/events-list'
import Header from './components/header/header'
import SignIn from './components/signin/signin'
import EventPage from './pages/event-page/event-page';

function App() {
  return (
    <div className="App">
      <Header />
      <SignIn />
      <Switch>
        <Route path="/event/:id" component={EventPage} />
        <Route path="/" component={EventsList} />
      </Switch>
    </div>
  )
}

export default App

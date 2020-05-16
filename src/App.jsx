import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Podcast from './pages/Podcast'
import Podcasts from './pages/Podcasts'
import Devocionais from './pages/Devocionais'
import Devocional from './pages/Devocional'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/podcast" component={Podcast} />
        <Route exact path="/podcasts" component={Podcasts} />
        <Route exact path="/devocional" component={Devocional} />
        <Route exact path="/devocionais" component={Devocionais} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;



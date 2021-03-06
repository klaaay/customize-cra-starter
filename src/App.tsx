import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Page1 from '@/pages/page1';
import Page2 from '@/pages/page2';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Page1} />
        <Route exact path="/page2" component={Page2} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

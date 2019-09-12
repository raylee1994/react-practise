import React from 'react';
import GlobalNav from 'components/nav';
import {BrowserRouter, Switch} from "react-router-dom";
import routes from 'router';
import RouterGuard from 'routerGuard';

function App() {
  return (
    <div id="App">
        <BrowserRouter>
          <GlobalNav></GlobalNav>
          <Switch>
          {
            routes.map((item, index) => {
              return (
                <RouterGuard {...item} key={index}></RouterGuard>
              )
            })
          }
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;

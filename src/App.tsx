import React from 'react';
import './App.less';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  RouteComponentProps,
} from 'react-router-dom';
import routers from './route';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routers.map((route) => {
            return (
              <Route
                path={route.path}
                key={route.name}
                exact
                render={(props: RouteComponentProps) => {
                  const { location } = props;
                  return (
                    <>
                      <nav className="menu">
                        <ul>
                          {routers
                            .filter((item) => item.type === 'menu')
                            .map((r) => {
                              return (
                                <li
                                  key={r.name}
                                  className={
                                    location.pathname === r.path ? 'active' : ''
                                  }
                                >
                                  <Link to={r.path}>{r.label}</Link>
                                </li>
                              );
                            })}
                        </ul>
                      </nav>
                      <route.component {...props}></route.component>
                    </>
                  );
                }}
              ></Route>
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

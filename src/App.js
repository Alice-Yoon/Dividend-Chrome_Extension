import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home/Home';
import Community from './components/pages/Community/Community';
import MyPage from './components/pages/MyPage/MyPage';
import Search from './components/pages/Search/Search';
import NavBar from './components/commons/NavBar';

function App() {

  const AppStyle = {
    width: '500px',
    height: '500px',
    display: 'flex',
  }

  const leftStyle = {
    border: '1px solid red',
    flex: '3'
  }

  const rightStyle = {
    border: '1px solid blue',
    flex: '7'
  }

  return (
    <>
    <Router>
    <div style={AppStyle}>
      <div style={leftStyle}>
        <NavBar />
      </div>
      <div style={rightStyle}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/community" component={Community} />
          <Route exact path="/mypage" component={MyPage} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </div>
    </div>
    </Router>
    </>
  );
}

export default App;

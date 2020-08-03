import React from 'react';
import styled from 'styled-components';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home/Home';
import Community from './components/pages/Community/Community';
import MyPage from './components/pages/MyPage/MyPage';
import Search from './components/pages/Search/Search';
import NavBar from './components/commons/NavBar';

function App(props) {


  return (
    <div className={props.className}>
    <Router>
      <div className="appStyle">
        <div className="leftStyle">
          <NavBar />
        </div>
        <div className="rightStyle">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/community" component={Community} />
            <Route exact path="/mypage" component={MyPage} />
            <Route exact path="/search" component={Search} />
          </Switch>
        </div>
      </div>
    </Router>
    </div>
  );
}

export default styled(App)`
  & {
    .appStyle {
      width: 700px;
      height: 500px;
      display: flex;
    }
    .leftStyle {
      border: 1px solid red;
      flex: 3;
    }
    .rightStyle {
      border: 1px solid blue;
      flex: 7;
      
    }
  }
`;

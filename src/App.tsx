import React, { lazy, Suspense, Fragment } from 'react';
import { BrowserRouter, Switch, Route, HashRouter, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// 全局基础样式文件
import './App.less'; 

// lazy,suspense懒加载代码分割方案
// const Login = lazy( () => import('./views/login'))
// const Home = lazy( () => import('./views/home'))

import Login from './views/login'
import Home from './views/home'


const App: React.FC = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Route
          render={({ location, match }) => (
            // 路由过渡动画
            <TransitionGroup>
              <CSSTransition
                key={location.pathname || 'app_door'}
                classNames={'slide'}
                timeout={300} // 动画时长仍需在对应css上设置
                mountOnEnter={true}
                unmountOnExit={true}
              >
                <Switch location={location}>
                  {/* 如果views组件chunk.js加载速度很快，会出现loading闪屏，目前suspense暂不支持maxDuration */}
                  {/* <Suspense fallback={<div>loading...</div>}> */}
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                  {/* </Suspense>   */}
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;

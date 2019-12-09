import React, { lazy, Suspense, Fragment } from 'react';
import { BrowserRouter, Switch, Route, HashRouter, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// 全局基础样式文件
import './App.less'; 

// 懒加载代码分割方案 react.lazy, suspense实现。注：在配置了路由转场动画后，首次懒加载不执行转场特效。
// const Login = lazy( () => import('./views/login'))
// const Home = lazy( () => import('./views/home'))

import Login from './views/login'
import Home from './views/home'

const mapRouter: any = {
  PUSH: "forward",
  POP: "back"
}

const App: React.FC = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Route
          render={({ location, match, history }) => (
           // 路由进出场动画
            <TransitionGroup
              childFactory={
                (child: React.ReactElement) => React.cloneElement(child, 
                {classNames: mapRouter[history.action]} 
              )}
            >
              <CSSTransition
                key={location.pathname}
                timeout={300}
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

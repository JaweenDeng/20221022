import React, { ReactNode } from 'react';
import { Counter } from './features/counter/Counter';
import { Counter1 } from './features/counter1/Counter1';
import { PostList } from './features/posts/PostList';
import { HomeLayout } from './compoments/HomeLayout';
import { PostChild } from './features/posts/PostChild'
import { Login } from './compoments/Login';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
interface IRoutes {
  path:string,
  auth:boolean,
  component:ReactNode,
  child?:Array<IRoutes>
}
function App() {
  const isLogin = true
  const routes:Array<IRoutes> = [
    {
      path: '/',
      auth: false,
      component: <HomeLayout />,
      child:[
        {
          path: 'Counter',
          auth: true,
          component: <Counter /> 
        },
        {
          path: 'Counter1',
          auth: true,
          component: <Counter1 /> 
        },
        {
          path: 'PostList',
          auth: true,
          component: <PostList />,
          child:[
            {
              path: ':id',
              auth: true,
              component: <PostChild /> 
            },
          ] 
        },
      ]
    },
    {
      path: '/login',
      auth: false,
      component: <Login /> 
    },
  ]
  //请求页面路径需要验证 && 没有登录 -> 跳转登录页 ， 后续考虑登录后是否自动跳转被拦截路径 
  const RouteNav = (param: any) => {
    return (
      param.map((item: {path: string, auth: boolean, component: ReactNode, child?: Array<IRoutes>}) => {
        return (
          <Route path={item.path} element={item.auth && !isLogin ? <Navigate to='/login' replace={true}></Navigate> : item.component} key={item.path}>
            {
              item?.child && RouteNav(item.child)
            }
          </Route>
        )
      })
    )
  }
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="Counter" element={<Counter />} />
          <Route path="Counter1" element={<Counter1 />} />
          <Route path="PostList" element={<PostList />}>
            <Route path=":id" element={<PostChild />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes> */}
      <Routes>
      {
        RouteNav(routes)
      }
    </Routes>
    </div>
  );
}

export default App;

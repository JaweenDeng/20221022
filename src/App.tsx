import React from 'react';
import { Counter } from './features/counter/Counter';
import { Counter1 } from './features/counter1/Counter1';
import { PostList } from './features/posts/PostList'
import './App.css';

function App() {
  return (
    <div className="App">
      {
        false && <Counter />
      }
      <Counter1 />
      <PostList />
    </div>
  );
}

export default App;

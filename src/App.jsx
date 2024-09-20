import { useState } from 'react';
import './App.css';
import { TestHook } from './components/use-outside-click/TestHook';

function App() {
  return (
    <div>
      <TestHook />
    </div>
  );
}

export default App;

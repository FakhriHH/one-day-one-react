import React from 'react'
import Header from './components/header';
import Greeting from './components/greeting';
import Day03State from './pages/Day03State';
import Day04Conditional from './pages/Day04Conditional';
import Day05Reusable from './pages/Day05Reusable';

const App = () => {
  return (
    <div>
      <Header />
        <Day05Reusable />;
    </div>
  );
}

export default App
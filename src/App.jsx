import React from 'react'
import Header from './components/header';
import Greeting from './components/greeting';
import Day03State from './pages/Day03State';
import Day04Conditional from './pages/Day04Conditional';
import Day05Reusable from './pages/Day05Reusable';
import Day06Tailwind from './pages/Day06Tailwind';

const App = () => {
  return (
    <div>
      <Header />
        <Day06Tailwind />;
    </div>
  );
}

export default App
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Header from './components/header';
import Greeting from './components/greeting';
import Day03State from './pages/Day03State';
import Day04Conditional from './pages/Day04Conditional';
import Day05Reusable from './pages/Day05Reusable';
import Day06Tailwind from './pages/Day06Tailwind';
import Day07Todo from './pages/Day07Todo';
import Day08Router from './pages/Day08Router';
import Day09LocalStorage from './pages/Day09LocalStorage';
import Day10Form from './pages/Day10Form';

const App = () => {
  return (
    <BrowserRouter>
      <div className="p-4">
        <nav className="flex gap-4 mb-6 text-indigo-600 font-semibold">
          <Link to="/">Home</Link>
          <Link to="/day03">Day 3</Link>
          <Link to="/day04">Day 4</Link>
          <Link to="/day05">Day 5</Link>
          <Link to="/day06">Day 6</Link>
          <Link to="/day07">Day 7</Link>
          <Link to="/day09">Day 9</Link>
          <Link to="/day10">Day 10</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Day08Router />} />
          <Route path="/day03" element={<Day03State />} />
          <Route path="/day04" element={<Day04Conditional />} />
          <Route path="/day05" element={<Day05Reusable />} />
          <Route path="/day06" element={<Day06Tailwind />} />
          <Route path="day07" element={<Day07Todo />} />
          <Route path="/day09" element={<Day09LocalStorage />} />
          <Route path="/day10" element={<Day10Form />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
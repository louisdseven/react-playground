import React from 'react';
import './App.css';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';

const milliseconds = 1000
setInterval(
  function callback() {
    // update the state.date in here
  },
  milliseconds
)

function App() {
  return (
    <main className='App'>
      <TheDate />
      <br />
      <Counter count={123} />
      <br />
      <HelloWorld />
      <br />
      <Bomb />
      <br />
      <RouletteGun />
    </main>
  )
}

export default App;
import React from 'react';
// import Split from './composition/Split';
import './App.css';
// import Tooltip from './composition/Tooltip';
// import Messages from './Messages';
import TheDate from './state/TheDate';

// make 2 tooltips here and another inside the App directly
/*
const firstTooltip = (
  <Tooltip message='tooltip message'>
   ipsum
  </Tooltip>
)
const secondTooltip = (
  <Tooltip message='another tooltip message'>
    officiis
  </Tooltip>
)
*/
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
   {/*
      <Split className='left' flexBasis='2'>
        This is the content for the left Split. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
        

        // make another tooltip directly inside the App

        <Tooltip message='one more tooltip message'>
          Necessitatibus?
        </Tooltip>
      </Split>

      <Split className='right'>
        This is the content for the right Split. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split>
         */}
    </main>
  )
}

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>YOUR APPLICATION NAME!</h1>
        <div>Hello!</div>
      </div>
      <div>This does not belong here</div>
    );
  }
}
*/



export default App;
import React from 'react';
import Tabs from './state/Tabs';

const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];

class Tabs extends React.Component {
  static defaultProps = { tabs: [] };
  render() {
    const buttons = this.props.tabs.map((tab, index) => (
      <button key={index}>
        {tab.name}
      </button>
    ))
    return (
      <div>
  {buttons}
  {/* only show content when the tabs array has length */}
  {this.props.tabs.length && (
    <div className='content'>
      {currentTab.content}
    </div>
  )}
</div>
    )
  }
}

export default App;
import React from "react";

class Tabs extends React.Component {
  static defaultProps = { tabs: [] };
  state = {
    currentTabIndex: 0;
  }

  renderContent() {
    const CurrentTab = this.props.tabs[this.state.currentTabIndex];
    return (
      <div className="content">
        {currentTab.content}
      </div>
    )
  }

  render() {
    const buttons = this.props.tabs.map((tab, index) => (
      <button key={index}>
        {tab.name}
      </button>
    ))
    const currentTab = this.props.tabs[0]

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


export default Tabs;

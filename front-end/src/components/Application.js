import React from 'react';
import HeaderView from './HeaderView';
import JournalView from './JournalView';
import HistoryView from './HistoryView';
import OverallView from './OverallView';
import LoginOverallView from './LoginOverallView';

const HeaderLayoutStyle = {
  top: '05%',
  textAlign: 'center'
};

class Application extends React.Component {
  constructor(props) {
    super(props);
    document.body.style = 'background-color: #5F9EA0;';

    this.state = {
      loggedIn: false,
      view: 'Journal',
      // Eventually this will load the data for the current user
      historyData: []
    };

    this.handleViewChange = this.handleViewChange.bind(this);
    this.setHistoryData = this.setHistoryData.bind(this);
  }

  handleViewChange(viewString) {
    console.log(viewString);
    this.setState({ view: viewString });
  }

  setHistoryData(data) {
    let newHistoryData = this.state.historyData;
    newHistoryData.unshift(data);
    this.setState({ historyData: newHistoryData });
  }

  render() {
    return (
      <div>
        <meta name="viewport" content="initial-scale=1" />
        <div style={HeaderLayoutStyle}>
          <HeaderView
            state={this.state}
            onViewButtonClick={this.handleViewChange}
          />
          <div>
            <MainView
              state={this.state}
              changeView={this.handleViewChange}
              setHistoryData={this.setHistoryData}
            />
          </div>
        </div>
      </div>
    );
  }
}

function MainView(props) {
  const viewType = props.state.view;
  if (viewType === 'Journal') {
    return (
      <JournalView
        changeView={props.changeView}
        setHistoryData={props.setHistoryData}
      />
    );
  } else if (viewType === 'History') {
    return <HistoryView
              state={props.state}
            />;
  } else if (viewType === 'Overall') {
    return <OverallView />;
  } else if (viewType === 'Login') {
    return <LoginOverallView />;
  } else {
    return;
  }
}

export default Application;

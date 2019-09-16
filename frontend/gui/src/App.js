import React from 'react';
import 'antd/dist/antd.css';
import SiderDemo from './containers/Layout';
import NamesList from './containers/NamesListView'
class Names extends React.Component {
  render() {
    return (
      <div className="App">
        <SiderDemo>
          <NamesList />
        </SiderDemo>
      </div>
    );
  }
}

export default Names;

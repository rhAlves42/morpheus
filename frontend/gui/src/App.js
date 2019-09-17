import React from 'react';
import 'antd/dist/antd.css';
import SiderDemo from './containers/Layout';
import NamesList from './containers/NamesListView';
import CustomForm from './components/Form';
class Names extends React.Component {
  render() {
    return (
      <div className="App">
        <SiderDemo>
          <h2>Adicionar novo nome</h2>
          <CustomForm />
          <NamesList />
        </SiderDemo>
      </div>
    );
  }
}

export default Names;

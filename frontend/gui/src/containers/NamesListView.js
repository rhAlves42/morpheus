import React from 'react';
import axios from 'axios';


class NamesList extends React.Component {

  state = {
    names:[]
  }

  componentDidMount(){
    axios.get('http://127.0.0.1:3300/names')
    .then(res => {
      this.setState({
        names: res.data
      });
      console.log(this.state.names);
    })

  }
  renderName (name){
    return (
      <p key={name}>{name}</p>
    );
  }

  render() {
    let name = this.state.names
    return (
      <div>{name.map(this.renderName)}</div>
    );
  }
}
export default NamesList;

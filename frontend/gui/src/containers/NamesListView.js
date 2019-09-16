import React from 'react';
import axios from 'axios';
import { List, Avatar } from 'antd';

let data = [];
class NamesList extends React.Component {
  componentDidMount(){
    axios.get('http://127.0.0.1:3300/names')
    .then(res => {
      data = JSON.stringify(res.data)
      console.log(data);
    })
  }
  render() {
    return (
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a>"teste"</a>}
            />
          </List.Item>
        )}
      />
    );
  }
}
export default NamesList;

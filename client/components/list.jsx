import React from 'react';
import Item from './item';

class List extends React.Component {

  render() {
    return (<div className='list'>
      <div className = 'title'>{this.props.list.name}</div>
      <ul>
        {this.props.list.items.map((item, key) => {
          return <Item key={key} item={item} />;
        })}
      </ul>
    </div>);
  }
}

export default List;

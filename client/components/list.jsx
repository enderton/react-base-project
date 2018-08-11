import React from 'react';
import Item from './item';

class List extends React.PureComponent {
  render() {
    const { list } = this.props;
    return (
      <div className='list'>
        <div className='title'>
          {list.name}
        </div>
        <ul>
          {/* eslint-disable-next-line react/no-array-index-key */}
          {list.items.map((item, key) => <Item key={ key } item={ item } />)}
        </ul>
      </div>
    );
  }
}

export default List;

import React from 'react';

class Item extends React.PureComponent {
  render() {
    const { item } = this.props;
    return (
      <div className='item'>
        {'- '}
        {item.name}
      </div>
    );
  }
}

export default Item;

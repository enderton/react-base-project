import React from 'react';
import List from './list';

import '../styles/main';

const list1 = {
  name: 'List # 1',
  items: [{ name: 'List Item 1' }, { name: 'List Item 2' }]
};
const list2 = {
  name: 'List # 2',
  items: [{ name: 'List Item 1' }, { name: 'List Item 2' }, { name: 'List Item 3' }]
};

const BaseLayer = function BaseLayer(props, context) {
  return (
    <div>
      <div className='base-layer'>
        <div>
          My React List App
          <List list={ list1 } />
          <List list={ list2 } />
        </div>
      </div>
    </div>
  );
};

export default BaseLayer;

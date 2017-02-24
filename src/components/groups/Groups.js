import React, { Component } from 'react';
import mock from '../../mock/groups';

class Groups extends Component {
  render() {
    return (
      <div>
        <h1>Groups</h1>
        {mock.groups.map((group, index) =>
          <div className='group'
            key={index}
          >
            <p>{group.name}</p>
            <p>{group.groupusers}</p>
            <p>{group.sub_end}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Groups;

import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

function User({ user }){
  return(
    <div className='user'>
      <div className='user-info'>
        <Link
          to="`${id}`"> { user.username }
        </Link>
        <p>{ user.email }</p>
      </div>
      <p>{ user.stripe_id }</p>
      <p>{ user.sub_end }</p>
    </div>
  )
}

export default User;







{/* // onClick={(user) => selectedUser(user)}> */}

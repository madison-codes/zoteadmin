import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

function User({ id, name, email, stripe_id, sub_end }){
  return(
    <div className='user'>
      <div className='user-info'>
        <Link to="`${id}`" params={{selectedUser: name}}>{ name }</Link>
        <p>{ email }</p>
      </div>
      <p>{ stripe_id }</p>
      <p>{ sub_end }</p>
    </div>
  )
}

export default User;

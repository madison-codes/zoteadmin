import React from 'react';
import { Link } from 'react-router';

const User = ({ user, formattedDate }) => {
  return(
    <div className='user'>
      <div className='user-info'>
        <Link
          to="`${user.id}`"> { user.username }
        </Link>
        <p>{ user.email }</p>
      </div>
      <p>{ user.sub_end }</p>

      <p>{ formattedDate }</p>
    </div>
  )
}

export default User;

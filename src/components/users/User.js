import React, { Component} from 'react';
import { Link } from 'react-router';

class User extends Component {

  handleSelectedUser(user){
    console.log(user);
  }

  render(){
    return(
      <div className='user'>
        <div className='user-info'>
          <Link
            onClick={(e) => this.props.selectUser(this.props.user) }
            to={this.props.user.id.toString()}> { this.props.user.username }
          </Link>
          <p>{ this.props.user.email }</p>

        </div>
        <p>{ this.props.user.sub_end }</p>

        <p>{ this.props.formattedDate }</p>
      </div>
    )
  }
}

export default User;

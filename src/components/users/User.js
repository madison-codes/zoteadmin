import React, { Component} from 'react';
import { Link } from 'react-router';
import unixTimestamp from '../../helpers/formatDateTime';

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
        <p>{ this.props.subEndFormatted }</p>
        <p>{ this.props.createdFormatted }</p>


        {/* <p>{ this.props.formattedDate }</p> */}
      </div>
    )
  }
}

export default User;

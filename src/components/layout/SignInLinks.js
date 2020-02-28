import React from 'react';
import { signOut } from '../../store/actions/authActions';
import { connect } from 'react-redux';

const SignInLinks = (props) => {

    return (
            <ul className="right">
                <li><a onClick={props.signOut}>Log Out</a></li>
            </ul>
            
            
        )

}
const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
  }

export default connect(null, mapDispatchToProps)(SignInLinks);
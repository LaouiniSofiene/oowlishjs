import React from 'react';
import { Link } from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';
import Clock from 'react-live-clock';
import Moment from 'react-moment';
import  getCurrentDate  from '../../utils/Currentdate';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { auth , profile } = props;
    const dateToFormat = getCurrentDate();
    const links = auth.uid ? <SignInLinks profile={profile}/> : <SignOutLinks />;
    return (
        
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/'><img src="http://www.oowlish.com/wp-content/uploads/2017/10/xheader-logo-light.png.pagespeed.ic.g6LARoRhl5.webp" id="logo" alt="oowlish" data-pagespeed-url-hash="2472288307" /></Link>
                { links }
                <ul className="right">
                    <li><Clock format={'HH:mm:ss'} ticking={true} /></li>
                    <li>&ensp;&ensp;</li>
                    <li><Moment format="YYYY/MM/DD">{dateToFormat}</Moment></li>
                </ul>
            </div>
        </nav>     
        )

}

const mapStateToProps = (state) => {
    return{
      auth: state.firebase.auth,
      profile: state.firebase.profile
    }
  }

export default connect(mapStateToProps)(Navbar);
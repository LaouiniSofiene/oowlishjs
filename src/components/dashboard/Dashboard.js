import React, { Component } from 'react';
import OutputTime from '../workingday/OutputTime';
import InputTime from '../workingday/InputTime';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { db } from '../../config/fbConfig';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {

    state = {
        works: null
    }

    componentDidMount(){
        const {auth} = this.props;
        console.log('mounted');
        db.collection('works')
        .doc(auth.uid)
        .get()
        .then( doc => {
            const works =[];
            const data = doc.data();
            works.push(data);
            this.setState({ works : works});
            console.log(works);
        })
        .catch( error => console.log(error))
    }
    render(){
        const {auth} = this.props;
        if (!auth.uid) return <Redirect to='/signin' /> 
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <InputTime works={this.state.works}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <OutputTime works={this.state.works}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
        return{
            works: state.work.works,
            auth: state.firebase.auth
        }
    
}

export default compose(
    firestoreConnect({ collection: "works" ,orderBy: ["Date", "desc"]}),
    connect(mapStateToProps)
    
)(Dashboard)

import React, { Component } from 'react';
import OutputTime from '../workingday/OutputTime';
import InputTime from '../workingday/InputTime';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


class Dashboard extends Component {
    render(){
        const { works } = this.props;


        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <InputTime works={works}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <OutputTime works={works}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
        return{
            works: state.work.works
        }
    
}

export default compose(
    firestoreConnect({ collection: "works" ,orderBy: ["Date", "desc"]}),
    connect(mapStateToProps)
    
)(Dashboard)

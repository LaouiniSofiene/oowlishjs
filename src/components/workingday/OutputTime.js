import React from 'react';
import OutputTable from './OutputTable';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';


const OutputTime = (props) => {
    const { auth , works } = props;
        if (!auth.uid) return <Redirect to='/signin' /> 
    return (
        <div className ="card z-depth-0 project-summary">
            <div className="card-content text-darken-3">
                <span className="card-title">Outputs</span>
                <div className="card-action">
                    { works && works.map(work => {
                        return (
                            <OutputTable work={work}/>
                        )
                    })
                        
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth
    }
  }

  export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
      collection: 'works'
    }])
  )(OutputTime)
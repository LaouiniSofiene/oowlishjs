import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const OutputTable = (props) => {
    const { auth ,work} = props;
    var timeStart = new Date("28/02/2020 " + work.StartTime).getHours();
    var nowHours = new Date().getHours();
    var hourDiff = nowHours - timeStart; 
        if (!auth.uid) return <Redirect to='/signin' /> 
        if (!work) return <p>Day didnt start yet</p>
    return (
                <table className="responsive-table">
                    
                        <tbody>
                    <tr>
                        <td><span className="blue-text text-darken-2">Entry Time</span></td>
                        <td><span className="blue-text text-darken-2">Exit Time</span></td>
                    </tr>
                    <tr>
                        <td><time>{work.StartTime}</time></td>
                        <td><time>{work.EndTime}</time></td>
                    </tr>
                    <tr>
                        <td><span className="blue-text text-darken-2">Lunch Break Start</span></td>
                        <td><span className="blue-text text-darken-2">Lunch Break End</span></td>
                    </tr>
                    <tr>
                        <td><time>{work.StartBreak}</time></td>
                        <td><time>{work.EndBreak}</time></td>
                    </tr>
                    </tbody>
                    <span>You worked {hourDiff}</span>
                    <br></br>
                    <span>Must work : 8 hours per day</span>
                    
                </table>
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
  )(OutputTable)
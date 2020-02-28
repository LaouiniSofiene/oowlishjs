import React, { Component } from 'react';
import { createWork, endWork, startBreak, endBreak } from '../../store/actions/workActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class InputTime extends Component {

    
    state = {
    }
    
    

    handleStartWork = (e) =>{
        e.preventDefault();
        this.props.createWork(this.state);
    }

    handleExitWork = (e) =>{
        e.preventDefault();
        this.props.endWork(this.state);
    }

    handleStartBreak = (e) =>{
        e.preventDefault();
        this.props.startBreak(this.state);
    }

    handleEndBreak = (e) =>{
        e.preventDefault();
        this.props.endBreak(this.state);
    }


    render(){
        const { auth ,works } = this.props;
        if (!auth.uid) return <Redirect to='/signin' /> 
    return (
        <div className ="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">Inputs</span>
                
                <table className="responsive-table">
                <tbody>
                    <tr>
                        <td><button className="waves-effect waves-light btn-large" onClick={this.handleStartWork} >Start Work</button></td>
                        <td><button className="waves-effect waves-light btn-large" onClick={this.handleExitWork} >Exit WOrk</button></td>
                    </tr>
                    <tr>
                        <td><button className="waves-effect waves-light btn-large" onClick={this.handleStartBreak} >Start Break</button></td>
                        <td><button className="waves-effect waves-light btn-large" onClick={this.handleEndBreak} >End Break</button></td>
                    </tr>
                    </tbody>
                </table>
                
            </div>
        </div>
    )
}
}

const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        createWork: (work) => dispatch(createWork(work)),
        endWork: (work) => dispatch(endWork(work)),
        startBreak: (work) => dispatch(startBreak(work)),
        endBreak: (work) => dispatch(endBreak(work))
    }
}

export default connect(mapStateToProps, mapDispatchProps)(InputTime);
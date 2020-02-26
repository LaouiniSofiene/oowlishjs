import React, { Component } from 'react';
import { createWork } from '../../store/actions/workActions';
import { connect } from 'react-redux';

class InputTime extends Component {

    
    state = {
    }
    
    

    handleStartWork = (e) =>{
        e.preventDefault();
        this.props.createWork(this.state);
    }

    handleExitWork = (e) =>{
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        e.preventDefault();
        this.setState({
            exitTime : time

        });
        console.log(this.state);
    }

    handleStartBreak = (e) =>{
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        e.preventDefault();
        this.setState({
            BreakStart : time

        });
        console.log(this.state);
    }

    handleEndBreak = (e) =>{
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        e.preventDefault();
        this.setState({
            BreakEnd : time

        });
        console.log(this.state);
    }


    render(){
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
const mapDispatchProps = (dispatch) => {
    return {
        createWork: (work) => dispatch(createWork(work))
    }
}

export default connect(null, mapDispatchProps)(InputTime);
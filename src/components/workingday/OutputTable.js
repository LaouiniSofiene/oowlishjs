import React from 'react';


const OutputTable = ({work}) => {
    return (
                <table className="responsive-table">
                    {
                        <tbody>
                    <tr>
                        <td><span className="blue-text text-darken-2">Entry Time</span></td>
                        <td><span className="blue-text text-darken-2">Exit Time</span></td>
                    </tr>
                    <tr>
                        <td><time>{work.startTime}</time></td>
                        <td><time>{work.endTime}</time></td>
                    </tr>
                    <tr>
                        <td><span className="blue-text text-darken-2">Lunch Break Start</span></td>
                        <td><span className="blue-text text-darken-2">Lunch Break End</span></td>
                    </tr>
                    <tr>
                        <td><time>{work.breakStart}</time></td>
                        <td><time>{work.breakEnd}</time></td>
                    </tr>
                    </tbody>
                    }
                    
                </table>
    )
}

export default OutputTable;
import React from 'react';
import OutputTable from './OutputTable';
import {Link} from 'react-router-dom';

const OutputTime = ({works}) => {
    return (
        <div className ="card z-depth-0 project-summary">
            <div className="card-content text-darken-3">
                <span className="card-title">Outputs</span>
                <div className="card-action">
                    { works && works.map(work => {
                        return (
                            <Link to={"/" + work.id}>
                            <OutputTable work={work} key={work.id}/>
                            </Link>
                        )
                    })
                        
                    }
                </div>
            </div>
        </div>
    )
}

export default OutputTime;
import React from 'react'


export default props => 
    <div className="character-list-metadata">
        <p><strong>copyright:</strong> {props.copyright}</p>
        <p>Showing {props.count} results of {props.total}.</p>
    </div>
import React from 'react'

import withLoader from '../hocs/withLoader';

const CharacterListMetaData = props => 
    <div className="character-list-metadata">
        <p><strong>copyright:</strong> {props.copyright}</p>
        <p>Showing {props.count} results of {props.total}.</p>
    </div>

// export default withLoader(CharacterListMetaData);

export default withLoader(CharacterListMetaData);
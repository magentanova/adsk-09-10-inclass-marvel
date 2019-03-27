import React from 'react';

import withLoader from '../hocs/withLoader';

const CharacterDetail = props => 
    <div className="character-detail-container">
        <img src={`${props.thumbnail.path}.${props.thumbnail.extension}`} />
    </div>

export default withLoader(CharacterDetail);
import React from 'react';
import { connect } from 'react-redux';

import withLoader from '../hocs/withLoader';

const CharacterDetail = props => 
    <div className="character-detail-container">
        <img src={`${props.thumbnail.path}.${props.thumbnail.extension}`} />
    </div>

const mapStateToProps = state => state.detailCharacter;

const componentConnector = connect(mapStateToProps);

const ConnectedCharacterDetail = componentConnector(CharacterDetail);

export default withLoader(ConnectedCharacterDetail);
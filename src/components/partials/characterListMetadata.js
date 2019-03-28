import React from 'react'
import { connect } from 'react-redux'
import withLoader from '../hocs/withLoader';

const CharacterListMetaData = props => 
    <div className="character-list-metadata">
        <p><strong>copyright:</strong> {props.copyright}</p>
        <p>Showing {props.count} results of {props.total}.</p>
    </div>

// export default withLoader(
//     connect(
//         state => state.metadata
//     )(CharacterListMetaData)
// )

// vvv same as below vvv

// export default withLoader(CharacterListMetaData);

const Loaderized = withLoader(CharacterListMetaData);

const mapStateToProps = state => state.metadata

const ConnectedAndLoaderizedCharacterListMetaData = 
    connect(
        mapStateToProps
    )(Loaderized)
    
export default ConnectedAndLoaderizedCharacterListMetaData;
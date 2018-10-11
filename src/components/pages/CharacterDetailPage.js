import React from 'react';

import Banner from '../partials/Banner';

class CharacterDetailPage extends React.Component {
    render() {
        return (
            <div className="character-detail-page">
                <Banner />
                <h2>Details for character with id {this.props.match.params.charId}</h2>
            </div>
        )
    }
}

export default CharacterDetailPage
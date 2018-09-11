import * as React from 'react';

const CharacterDetailPage = (props:any) => {
    return (
    <div className="character-detail-page">
        <h2>character details for {props.match.params.id}</h2>
    </div>
    )
}

export default CharacterDetailPage;
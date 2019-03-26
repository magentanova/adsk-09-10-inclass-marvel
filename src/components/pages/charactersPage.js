import React from 'react';

import TopBar from '../partials/topBar';
import ListOfCharacters from '../partials/listOfCharacters';

export default class CharactersPage extends React.Component {
    render() {
        return (
            <div className="page characters-page">
                <TopBar />
                <ListOfCharacters />
            </div>
        )
    }
}
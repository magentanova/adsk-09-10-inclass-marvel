import React from 'react';

import Character from './character';

const importedStuff = require("./character");

console.log("imported stuff", importedStuff);

const dummyData = {
    metadata: {
        character_count: 50,
        page_no: 1,
        last_page: 97,
        status_code: 200,
        total_characters: 4982
    },
    characters: [
        {
            real_name: "Peter Parker",
            alias: "Spider Man", 
            power: "spider webs and stuff",
            headshot: "https://via.placeholder.com/300" 
        },
        {
            real_name: "Eddie Brock",
            alias: "Venom", 
            power: "has a parasite",
            headshot: "https://via.placeholder.com/300" 
        },
        {
            real_name: "Otto Octavius",
            alias: "Doctor Octopus", 
            power: "metal arms",
            headshot: "https://via.placeholder.com/300" 
        },
        {
            real_name: "Wade Wilson",
            alias: "Deadpool", 
            power: "funny. crazy. can't get hurt or die.",
            headshot: "https://via.placeholder.com/300" 
        },
    ]
}


export default class extends React.Component {

    render() {
        const charactersJSX = dummyData.characters.map( (characterObj, i) =>
            <Character key={characterObj.alias} details={characterObj} />
        )
        return (
            <div className="list-of-characters">
                {charactersJSX}
            </div>
        )
    }
}

// React.createElement(Character, {...props}, /*children*/);
// const character = new Character();
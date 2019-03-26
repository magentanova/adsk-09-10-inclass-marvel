import React from 'react';

// {
//     real_name: "Wade Wilson",
//     alias: "Deadpool", 
//     power: "funny. crazy. can't get hurt or die.",
//     headshot: "https://via.placeholder.com/300" 
// },

export default props => 
    <div className="character">
        <div className="headshot-wrapper">
            <img src={props.details.headshot} />
        </div>
        <div className="info-wrapper">
            <p className="info real-name"><strong>real name</strong>: {props.details.real_name}</p>
            <p className="info alias"><strong>alias</strong>: {props.details.alias}</p>
            <p className="info power"><strong>power</strong>: {props.details.power}</p>
        </div>
    </div>

// vvv same as vvv

// function Character(props) {
//     return (
//         <div className="character">
//             <div className="headshot-wrapper">
//                 <img src />
//             </div>
//             <div className="info-wrapper">
//                 <p className="info real-name">{props.details.real_name}</p>
//                 <p className="info alias"></p>
//                 <p className="info power"></p>
//             </div>
//         </div>
//     )
// }

// export default Character

export const foo = "bar";
import React from 'react';

// {
//     real_name: "Wade Wilson",
//     alias: "Deadpool", 
//     power: "funny. crazy. can't get hurt or die.",
//     headshot: "https://via.placeholder.com/300" 
// },

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }
        this.toggleExpand = this.toggleExpand.bind(this);
    }

    toggleExpand(e) {
        this.setState({
            expanded: !this.state.expanded
        })
    }

    render() {
        const characterExpandedClass = `character-expanded ${this.state.expanded ? "" : "hidden"}`
        return (
            <div className="character">
                <div className="character-label">
                    <span>{this.props.details.alias}</span>
                    <button onClick={this.toggleExpand} >{this.state.expanded ? "-" : "+"}</button>
                </div>
                <div className={characterExpandedClass}>
                    <div className="headshot-wrapper">
                        <img src={this.props.details.headshot} />
                    </div>
                    <div className="info-wrapper">
                        <p className="info real-name"><strong>real name</strong>: {this.props.details.real_name}</p>
                        <p className="info alias"><strong>alias</strong>: {this.props.details.alias}</p>
                        <p className="info power"><strong>power</strong>: {this.props.details.power}</p>
                    </div>
                </div>
            </div>
        )
    }

}


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
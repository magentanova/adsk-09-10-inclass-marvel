import React from 'react';
import PropTypes from 'prop-types';

// {
//     real_name: "Wade Wilson",
//     alias: "Deadpool", 
//     power: "funny. crazy. can't get hurt or die.",
//     headshot: "https://via.placeholder.com/300" 
// },

const propTypes = {
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired
}

class Character extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            focussed: false,
            order: this.props.order
        }
        this.imgClickHandler = this.imgClickHandler.bind(this);
        this.toggleExpand = this.toggleExpand.bind(this);
    }

    imgClickHandler(e) {
        // need redux
    }

    toggleExpand(e) {
        this.setState({
            expanded: !this.state.expanded
        })
    }

    render() {
        const characterExpandedClass = `character-expanded ${this.state.expanded ? "" : "hidden"}`
        return (
            <div className="character" >
                <div className="character-label">
                    <span>{this.props.name}</span>
                    <button onClick={this.toggleExpand} >{this.state.expanded ? "-" : "+"}</button>
                </div>
                <div className={characterExpandedClass}>
                    <div className="headshot-wrapper">
                        <img 
                            onClick={this.imgClickHandler}
                            src={`${this.props.thumbnail.path}.${this.props.thumbnail.extension}`} 
                        />
                    </div>
                    <div className="info-wrapper">
                        <p className="info name"><strong>name</strong>: {this.props.name}</p>
                        <p className="info description"><strong>description</strong>: {this.props.description}</p>
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


Character.propTypes = propTypes;

export default Character;
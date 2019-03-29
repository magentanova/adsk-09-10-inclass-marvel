import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as character_style from "./character.css";
import actionTypes from "../../../state/actionTypes";

class Character extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        }
        this.toggleExpand = this.toggleExpand.bind(this);
        }

    static propTypes = {
        name: PropTypes.string.isRequired,
        thumbnail: PropTypes.shape({
            path: PropTypes.string.isRequired,
            extension: PropTypes.string.isRequired
        }).isRequired,
        description: PropTypes.string.isRequired
    }    

    toggleExpand(e) {
        this.setState({
            expanded: !this.state.expanded
        })
    }

    render() {
        const characterExpandedClass = `character-expanded ${this.state.expanded ? "" : "hidden"}`
        return (
            <div className="character wrapper" >
                <div className="character-label">
                    <span>{this.props.name}</span>
                    <button onClick={this.toggleExpand} >{this.state.expanded ? "-" : "+"}</button>
                </div>
                <div className={characterExpandedClass}>
                    <div className="headshot-wrapper">
                        <img 
                            onClick={this.props.onImgClick}
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

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onImgClick: () => {
            dispatch({
                type: actionTypes.DETAIL_CHARACTER_SELECTED,
                payload: ownProps
            })
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Character);
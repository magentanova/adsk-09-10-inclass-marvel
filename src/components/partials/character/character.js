import React, { useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import "./character.css";
import actionTypes from "../../../state/actionTypes";

const useToggle = initialValue => {
    const [ value, setter ] = useState(initialValue);
    const eventHandler = () => setter(!value);
    return [ value, eventHandler]
}

const propTypes = {
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
        path: PropTypes.string.isRequired,
        extension: PropTypes.string.isRequired
    }).isRequired,
    description: PropTypes.string.isRequired
}    

const Character = props => {
    // get state
        // togglers
    const [ expanded, toggleExpanded ] = useToggle(false);
    const [ uppercase, toggleUppercase ] = useToggle(false);
        // highlighter
    const [ highlighted, setHighlighted ] = useState(false);

    // event handlers
    const highlight = () => setHighlighted(true);
    const unhighlight = () => setHighlighted(false);

    // state-dependent class modifiers
    const expansionHiddenClassModifier = expanded ? "" : "hidden";
    const expansionHighlightedClassModifier = highlighted ? "highlighted" : "";
    const expansionUppercaseClassModifier = uppercase ? "uppercase" : "";
    const expansionClass = `
        character-expansion 
        ${expansionHiddenClassModifier} 
        ${expansionHighlightedClassModifier}
        ${expansionUppercaseClassModifier}
    `
    // &uarr; &darr;
    return (
        <div className="character wrapper" >
            <div className="character-label">
                <span>{props.name}</span>
                <button onClick={toggleExpanded} >{expanded ? "-" : "+"}</button>
            </div>
            <div onMouseEnter={highlight} onMouseLeave={unhighlight} className={expansionClass}>
                <div className="headshot-wrapper">
                    <img 
                        onClick={props.onImgClick}
                        src={`${props.thumbnail.path}.${props.thumbnail.extension}`} 
                    />
                    <button 
                        dangerouslySetInnerHTML={{__html: uppercase ? "&darr;" : "&uarr;" }}
                        onClick={toggleUppercase}>
                    </button>

                </div>
                <div className="info-wrapper">
                    <p className="info name"><strong>name</strong>: {props.name}</p>
                    <p className="info description"><strong>description</strong>: {props.description}</p>
                </div>
            </div>
        </div>
    )
}
Character.propTypes = propTypes;

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
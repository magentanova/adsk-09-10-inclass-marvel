import React from 'react';
import { Link } from 'react-router-dom';

class CharacterItem extends React.PureComponent {

    constructor(props) {
        super(props)
    }
    
    _handleClick = () => {
        const myId = this.props.id
        const selectedId = this.props.selectedCharacter
        if (myId === selectedId) {
            this.props.dispatch({
                type: "UNSELECT_CHARACTER"
            })
        }
        else {
            this.props.dispatch({
                type: "SELECT_CHARACTER",
                payload: this.props.id
            })    
        }
    }

    _handleDetailClick = () => {
        this.props.history.push('/detail/' + this.props.id)
    }

    render() {
        const imgSrc = this.props.thumbnail.path + '.' + this.props.thumbnail.extension
        const imageToRender = this.props.selectedCharacter ===
            this.props.id ?
                <div className="thumbnail-wrapper">
                    <img src={imgSrc} />
                    <Link to={"/detail/" + this.props.id}>
                        detail
                    </Link>
                </div>
            : 
            null

        return (
            <li     
                onClick={this._handleClick.bind(this)}
                className="character-item">
                <p>name: {this.props.name}</p>
                {imageToRender}
            </li>
        )
    }
}

export default CharacterItem;

// // module1.js

// export const mod1Var1 = "hurricane";

// export const mod1Var2 = "michael";

// // module2.js

// const mod2Var = "florida";

// export default mod2Var

// // module3.js

// // without default export
// import { mod1Var1, mod1Var2 } from './module1'
// import mod1Var1 from './module1'

// // with default export
// import mod2Var from './module2'
// import fredSnyder from './module2'

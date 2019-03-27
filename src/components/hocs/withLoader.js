import React from 'react';
import LoadingGif from '../partials/loadingGif';


function withLoader(Component) {
    // VVV this is a React Component VVV
    function LoaderComponent({ loaded, ...otherProps}) {
        if (typeof loaded !== "boolean") {
            throw new Error("a `withLoader` component must receive a boolean `loaded` prop.");
        }
        let toRender = <LoadingGif />;
        if (loaded) {
            toRender = <Component {...otherProps} />;
        }
        return toRender;
    }
    return LoaderComponent;
}

// const CharacterPage = props => <div>
//     {props.name}
//     {props.height}
// </div>

// const LoadableCharacterPage = withLoader(CharacterPage)

// <LoadableCharacterPage loaded={true} name={"spiderman"} height={"6'"} />

export default withLoader;
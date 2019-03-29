import React from 'react';

import "./HIGLink.css";

const HIGLink = props => {
    const className = props.wrapperClassName || "hig-link-wrapper" 
    return (
        <div className={className} >
            <a href={props.href} className={props.aClassName || "hig-link"} >props.children</a>
        </div>
    )
}

<HigLink>contact page</HigLink>


<SomeComponent children={[]}>
    <img />
    whatevertext
</SomeComponent>

// SomeComponent's props.children...
    [
        React.createElement("img"),
        whatevertext
    ]
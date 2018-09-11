
import * as React from 'react';

import { dispatch, store } from '../../state/store';
import { IAppState } from '../../state/types';

// write a function with the following signature:
    // input: a react component
    // output: that react component, wrapped in a parent component that subscribes 
        // to the store and passes all stateful information down to the original
        // input component.


class Provider extends React.PureComponent<{},IAppState> {
    public unsubscribe:() => void;

    constructor(props:{}) {
        super(props);
        this.state = store.getState()
    }

    public componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState())
        })
    }

    public componentWillUnmount() {
        this.unsubscribe();
    }

    public render() {
        return (
            <div className="provider" >
                {this.props.children}
            </div>
        )
    }
}

const provide = (component:React.Component) => (
    <Provider >
        {component}
    </Provider>
)
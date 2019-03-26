
import * as React from 'react';

import { store } from '../../state/store';
import { IAppState } from '../../state/types';

// write a function with the following signature:
    // input: a react component
    // output: that react component, wrapped in a parent component that subscribes 
        // to the store and passes all stateful information down to the original
        // input component.



const provide = (ComponentClass:React.ComponentClass) => (
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
                    <ComponentClass {...this.state} />
                </div>
            )
        }
    }
)

export default provide
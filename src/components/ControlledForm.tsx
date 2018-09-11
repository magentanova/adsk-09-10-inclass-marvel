import * as React from 'react'

interface IState {
    email: string;
    password: string;
    username: string;
}

class ControlledForm extends React.PureComponent<{},IState> {
    constructor(props:{}) {
        super(props)
        this.state = {
            email: '', 
            password: '',
            username: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public handleChange(e:React.ChangeEvent) {
        const stateUpdate = {};
        const target = e.target as any;
        stateUpdate[target.name] = target.value;
        this.setState(stateUpdate);
    }

    public handleSubmit(e:React.SyntheticEvent) {
        e.preventDefault();
        alert(JSON.stringify(this.state));
    }

    public render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    name="email" 
                    onChange={this.handleChange} 
                    value={this.state.email} />
                <input 
                    name="username" 
                    onChange={this.handleChange} 
                    value={this.state.username} />
                <input 
                    name="password" 
                    onChange={this.handleChange} 
                    type="password"
                    value={this.state.password} />
                <button type="submit" />
            </form>
        )
    }
}

export default ControlledForm;
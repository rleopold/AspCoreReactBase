import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: "???"}
        this.getMessage = this.getMessage.bind(this);
    }

    getMessage() {
        fetch('http://localhost:5001').then(response => response.text().then(text => this.setState({text: text})));
    }

    render() {
        return (
            <div>
                <Hello name="Richard" say={this.state.text} dostuff={this.getMessage} />
            </div>
        );
    }

}

render(<App />, document.getElementById('app'));

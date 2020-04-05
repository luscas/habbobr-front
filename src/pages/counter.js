import React, { Component } from 'react';
import {connect} from 'react-redux';
import {decrementCounter, incrementCounter} from '../redux/actions/counterActions';

import Layout from '../components/Layout';

class Counter extends Component {
	static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

	render() {
		return (
			<Layout>
				<div className="container mt-5">
					<h1>Counter</h1>

					<h3>{this.props.counter}</h3>

					<button onClick={this.props.incrementCounter}>Increment</button>
					<button onClick={this.props.decrementCounter}>Decrement</button>
				</div>
			</Layout>
		);
	}
}

const mapStateToProps = state => ({
    counter: state.counter.value
});

const mapDispatchToProps = {
    incrementCounter: incrementCounter,
    decrementCounter: decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
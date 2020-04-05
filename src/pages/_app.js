// import App from 'next/app'
import React, { Component } from 'react';
import {Provider} from 'react-redux';
import withRedux from "next-redux-wrapper";

import store from '../redux/store';

import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';

class MyApp extends Component {
	static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        //Anything returned here can be access by the client
        return {pageProps: pageProps};
    }

	render() {
		const {Component, pageProps, store} = this.props;

		return (
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		)
	}
}
  
//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);
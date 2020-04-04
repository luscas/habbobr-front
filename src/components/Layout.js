import { useState } from 'react';
import Head from 'next/head';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Player from '../components/Player';

const Layout = ({ children, title }) => {
	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);

	return (
		<div className="App">
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />

				<title>{title}</title>

				<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
			</Head>

			<Header />

			<main>
				{children}
			</main>

			<Player />
			
			<Footer />
		</div>
	);
}

export default Layout;
import React, { Component, useState } from 'react';
import Head from 'next/head';
import {connect} from 'react-redux';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import {toggleModal, hideModal, showModal} from '../redux/actions/modalActions';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Player from '../components/Player';

class Layout extends Component {
	static getInitialProps({store}) {}

    constructor(props) {
		super(props);
		
		this.state = {
			formShowing: 'login'
		}
	}

	toggleForm() {
		this.setState((state, props) => ({
			formShowing: state.formShowing == 'login' ? 'register' : 'login'
		}));
	}
	
	render() {
		const { children, title } = this.props;
		const modalCloseButton = <button type="button" className="close" onClick={() => this.props.hideModal()}><i className="fas fa-times" /></button>;

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


				<Modal isOpen={this.props.modal} toggle={this.props.toggleModal} size="lg">
					<div className="row no-gutters">
						<div className="col-md-6">
							<div className="bg-login">
								<h3>Um lugar divertido com gente incrível.</h3>
							</div>
						</div>
						
						<div className="col-md-6">
							<div className="toggle-login">
								<div className="login">
									<ModalHeader
										close={ modalCloseButton}
										tag="h3"
									>
										{this.state.formShowing == 'login' ? 'Entrar' : 'Criar conta'}
									</ModalHeader>

									<ModalBody>
										<div className={`${this.state.formShowing == 'register' && 'd-none'}`}>
											<form id="loginform" method="post">
												<p className="login-username">
													<label htmlFor="user_login">Nome de usuário ou endereço de e-mail</label>
													<input type="text" name="log" id="user_login" className="input" placeholder="4Queijos" size={20} />
												</p>

												<p className="login-password">
													<label htmlFor="user_pass">Senha</label>
													<input type="password" name="pwd" id="user_pass" className="input" placeholder="Sua senha" size={20} />
												</p>

												<p className="login-remember">
													<label>
														<input name="rememberme" type="checkbox" id="rememberme" value="forever" />
														&nbsp;Lembrar-me
													</label>
												</p>

												<p className="login-submit">
													<input type="submit" className="button button-primary" value="Acessar" />
												</p>
											</form>

											<hr className="ou my-4" />

											<div className="text-center">
												<a onClick={() => this.toggleForm()} className="btn btn-lg btn-success show-register">Criar nova conta</a>
											</div>
										</div>

										<div className={`${this.state.formShowing == 'login' && 'd-none'}`}>
											<form method="post">
												<div className="form-group">
													<label>Usuário</label>
													<input type="text" name="user_login" id="user_login" className="form-control alt" />
												</div>

												<div className="form-group">
													<label>E-mail</label>
													<input type="text" name="user_email" id="user_email" className="form-control alt" />
												</div>

												<p className="text-muted">Uma confirmação de registro será enviada para você por e-mail.</p>
												<input className="btn btn-lg btn-block btn-success" type="submit" value="Cadastre-se" id="register" />

												<div className="text-center text-muted mt-4">
													Já tem uma conta?
													&nbsp;<a onClick={() => this.toggleForm()} className="text-link text-primary show-login">Entre agora</a>
												</div>
											</form>
										</div>
									</ModalBody>
								</div>
							</div>
						</div>
					</div>
				</Modal>
			</div>
		);
	}
}

const mapStateToProps = state => ({
    modal: state.modal.value
});

const mapDispatchToProps = {
    showModal: showModal,
    hideModal: hideModal,
    toggleModal: toggleModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
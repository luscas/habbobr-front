import Layout from '../components/Layout';

const Login = () => {
	return (
		<Layout>
			<section>
				<div className="container pt-3">
					<div className="row">
						<div className="col-md-4 offset-md-4">
							<div className="toggle-login">
								<div className="login">
									<h3 className="mb-4">Entrar</h3>
									
									<form method="post" id="loginform">
										<p className="login-username">
											<label htmlFor="user_login">Nome de usuário ou endereço de e-mail</label>
											<input type="text" name="log" id="user_login" className="input" size="20" />
										</p>

										<p className="login-password">
											<label htmlFor="user_pass">Senha</label>
											<input type="password" name="pwd" id="user_pass" className="input" size="20" />
										</p>
										
										<p className="login-remember">
											<label>
												<input name="rememberme" type="checkbox" id="rememberme" value="forever" /> Lembrar-me
											</label>
										</p>

										<p className="login-submit">
											<input type="submit" name="wp-submit" id="wp-submit" className="button button-primary" value="Acessar" />
										</p>
									</form>

									<hr className="ou my-4" />
									<div className="text-center">
										<a href="/register" className="btn btn-lg btn-success show-register">Criar nova conta</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Login;
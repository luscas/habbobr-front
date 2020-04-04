import Layout from '../components/Layout';

const Register = () => {
	return (
		<Layout>
			<section>
				<div className="container pt-3">
					<div className="row">
						<div className="col-md-4 offset-md-4">
							<div className="register">
								<h3 className="mb-4">Criar conta</h3>
								
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
										Já tem uma conta? <a href="/login" className="text-link text-primary show-login">Entre agora</a>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Register;
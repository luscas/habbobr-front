import Layout from '../components/Layout';

function Equipe() {
	let equipe = {
		webmasters: ['Colecction', 'Sven', ',Abobado'],
		administradores: ['Renato_Moura', '@Flaz', 'Rutoc'],
		jornalismo: ['LeoToddy', 'Cheaply'],
	};

	return (
		<Layout>
			<>
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="mb-0">Equipe</h1>
					</div>
				</div>

				<section>
					<div className="container">
						<div className="card mb-4 d-none">
							<div className="list-team">
								<a href="#administracao" className="item active">Administração</a>
								<a href="#jornalismo" className="item">Jornalismo</a>
							</div>
						</div>

						<h4 className="mb-3">Web Masters</h4>
						<div className="row mb-4">
							{equipe.webmasters.map((user, key) => (
							<div className="col-md-2" key={key}>
								<div className="card">
									<div className="card-body text-center">
										<div className="avatar pixel lg mx-auto mb-3">
											<img src={`https://www.habbo.com.br/habbo-imaging/avatarimage?&user=${user}&action=std&direction=2&head_direction=2&img_format=png&gesture=std&headonly=0&size=b`} alt={user} />
										</div>
										<a href={`/perfil/${user}`} className="h5 text-inherit mb-1 d-block" data-toggle="tooltip" title={user}>{user}</a>
									</div>
								</div>
							</div>))}
						</div>
						
						<h4 className="mb-3">Administradores</h4>
						<div className="row mb-4">
							{equipe.administradores.map((user, key) => (
							<div className="col-md-2" key={key}>
								<div className="card">
									<div className="card-body text-center">
										<div className="avatar pixel lg mx-auto mb-3">
											<img src={`https://www.habbo.com.br/habbo-imaging/avatarimage?&user=${user}&action=std&direction=2&head_direction=2&img_format=png&gesture=std&headonly=0&size=b`} alt={user} />
										</div>
										<a href={`/perfil/${user}`} className="h5 text-inherit mb-1 d-block" data-toggle="tooltip" title={user}>{user}</a>
									</div>
								</div>
							</div>))}
						</div>

						<h4 className="mb-3">Jornalismo</h4>
						<div className="row mb-4">
							{equipe.jornalismo.map((user, key) => (
							<div className="col-md-2" key={key}>
								<div className="card">
									<div className="card-body text-center">
										<div className="avatar pixel lg mx-auto mb-3">
											<img src={`https://www.habbo.com.br/habbo-imaging/avatarimage?&user=${user}&action=std&direction=2&head_direction=2&img_format=png&gesture=std&headonly=0&size=b`} alt={user} />
										</div>
										<a href={`/perfil/${user}`} className="h5 text-inherit mb-1 d-block" data-toggle="tooltip" title={user}>{user}</a>
									</div>
								</div>
							</div>))}
						</div>
					</div>
				</section>
			</>
		</Layout>
	);
}

export default Equipe;
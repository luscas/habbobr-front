import React from 'react';

function Equipe() {
	return (
		<section>
			<div class="container">
				<div class="card mb-4 d-none">
					<div class="list-team">
						<a href="#" class="item active">Administração</a>
						<a href="#" class="item">Jornalismo</a>
					</div>
				</div>

				<h4 class="mb-3">Administração</h4>
				<div class="row mb-4">
					<div class="col-md-2">
						<div class="card">
							<div class="card-body text-center">
								<div class="avatar pixel lg mx-auto mb-3">
									<img src="https://www.habbo.com.br/habbo-imaging/avatarimage?&user=Colecction&action=std&direction=2&head_direction=2&img_format=png&gesture=std&headonly=0&size=b" alt="Colecction" />
								</div>
								<a href="/perfil/Colecction" class="h5 text-inherit mb-1 d-block" data-toggle="tooltip" title="Colecction">Lucas Bueno</a>
							</div>
						</div>
					</div>
				</div>

				<h4 class="mb-3">Jornalismo</h4>

				<div class="row mb-4">
					<div class="col-md-2">
						<div class="card">
							<div class="card-body text-center">
								<div class="avatar pixel lg mx-auto mb-3">
									<img src="https://www.habbo.com.br/habbo-imaging/avatarimage?&user=Colecction&action=std&direction=2&head_direction=2&img_format=png&gesture=std&headonly=0&size=b" alt="Colecction" />
								</div>
								<a href="/perfil/Colecction" class="h5 text-inherit mb-1 d-block" data-toggle="tooltip" title="Colecction">Lucas Bueno</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
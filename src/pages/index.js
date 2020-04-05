import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Layout from '../components/Layout';
import Sidebar from '../components/Home/Sidebar';
import News from '../components/Home/News';
import Forum from '../components/Home/Forum';
import Badge from '../components/Home/Badge';

const Index = () => (
	<Layout title="Página Inicial">
		<div className="jumbotron jumbotron-fluid hero">
			<div className="container">
				<h1 className="my-3">
					É novo por aqui? Crie uma conta!
				</h1>
			</div>
		</div>

		<section>
			<div className="container">
				<div className="row">
					<Sidebar />

					<News />
				</div>
			</div>
		</section>

		<section>
			<div className="container">
				<div className="row">
				<div className="col-lg-9 pr-lg-3">
					<div>
						<div id="custom_widget_forum-2" className="widget widget_custom_widget_forum mb-4">
							<div className="section-title">
								<h3>Fórum</h3>
							</div>

							<div className="row row-forum">
								<Forum title="Procuro mulheres para sexo" author="Colecction" />
								<Forum title="Vendo pack do pezinho 50c" author=",-Isabel-," />
								<Forum title="Nova versão do Habbo vazou" author="Bromarks" />
								<Forum title="Vagas abertas" author="Janjao.ban" />
							</div>
						</div>

						<div id="custom_widget_coisas-2" className="widget widget_custom_widget_coisas mb-4">
							<div className="section-title">
								<h3>Coisas grátis</h3>
							</div>

							<div className="row">
								<Badge title="Corinthians" code="BR100" status={true} />
								<Badge title="Ganhe um emblema muito TOP!" code="DE572" status={true} />
								<Badge title="Ganhe emblema da organização BobbaFace" code="PT051" status={false} />
							</div>
						</div>
					</div>
				</div>

				<div className="col-lg-3 pl-lg-3">
					<div className="sidebar">
					<div id="custom_widget_evento-2" className="widget widget_custom_widget_evento mb-4">
						<div className="section-title">
						<h3>Eventos</h3>
						</div>
						<div className="row row-event">
						<div className="col">
							<div className="card event now event-151">
							<div className="cover">
								<div className="date">
								<div className="month">Abr</div>
								<div className="day">03</div>
								</div>
								<img src="https://marcocuel.com/p/fansite/wp-content/uploads/2020/01/thumb_10.png" alt="cover" />
								<div className="txt">Acontecendo</div>
								<div className="title">
								<a href="https://marcocuel.com/p/fansite/evento/encontre-o-marco/" title="Encontre o Marco">Encontre o Marco</a>
								</div>
							</div>
							</div>
						</div>
						<div className="col">
							<div className="card event now event-146">
							<div className="cover">
								<div className="date">
								<div className="month">Abr</div>
								<div className="day">03</div>
								</div>
								<img src="https://marcocuel.com/p/fansite/wp-content/uploads/2020/01/thumb_8.png" alt="cover" />
								<div className="txt">Acontecendo</div>
								<div className="title">
								<a href="https://marcocuel.com/p/fansite/evento/labirinto-2-0/" title="Labirinto 2.0">Labirinto 2.0</a>
								</div>
							</div>
							</div>
						</div>
						<div className="col">
							<div className="card event now event-109">
							<div className="cover">
								<div className="date">
								<div className="month">Abr</div>
								<div className="day">03</div>
								</div>
								<img src="https://marcocuel.com/p/fansite/wp-content/uploads/2020/01/thumb_6.png" alt="cover" />
								<div className="txt">Acontecendo</div>
								<div className="title">
								<a href="https://marcocuel.com/p/fansite/evento/danca-das-cadeiras/" title="Dança das cadeiras">Dança das cadeiras</a>
								</div>
							</div>
							</div>
						</div>
						</div>
					</div>
					</div>
					<div className="section-title mt-4">
					<h3>Novos usuários</h3>
					</div>
					<div className="card">
					<div className="card-body last-users">
						<div className="row">
						<div className="col">
							<div className="avatar pixel mx-auto" data-toggle="tooltip" title="Howper">
							<a href="https://marcocuel.com/p/fansite/perfil/Howper/">
								<img src="https://www.habbo.com.br/habbo-imaging/avatarimage?&user=Howper&action=std&direction=2&head_direction=3&img_format=png&gesture=std&headonly=0&size=s" alt="Howper" />
							</a>
							</div>
						</div>
						<div className="col">
							<div className="avatar pixel mx-auto" data-toggle="tooltip" title="Disco-lee">
							<a href="https://marcocuel.com/p/fansite/perfil/Disco-lee/">
								<img src="https://www.habbo.com.br/habbo-imaging/avatarimage?&user=Disco-lee&action=std&direction=2&head_direction=3&img_format=png&gesture=std&headonly=0&size=s" alt="Disco-lee" />
							</a>
							</div>
						</div>
						<div className="col">
							<div className="avatar pixel mx-auto" data-toggle="tooltip" title="Bromark">
							<a href="https://marcocuel.com/p/fansite/perfil/Bromark/">
								<img src="https://www.habbo.com.br/habbo-imaging/avatarimage?&user=Bromark&action=std&direction=2&head_direction=3&img_format=png&gesture=std&headonly=0&size=s" alt="Bromark" />
							</a>
							</div>
						</div>
						<div className="col">
							<div className="avatar pixel mx-auto" data-toggle="tooltip" title="4Queijos">
							<a href="https://marcocuel.com/p/fansite/perfil/4Queijos/">
								<img src="https://www.habbo.com.br/habbo-imaging/avatarimage?&user=4Queijos&action=std&direction=2&head_direction=3&img_format=png&gesture=std&headonly=0&size=s" alt="4Queijos" />
							</a>
							</div>
						</div>
						<div className="col">
							<div className="avatar pixel mx-auto" data-toggle="tooltip" title="Bromarks">
							<a href="https://marcocuel.com/p/fansite/perfil/Bromarks/">
								<img src="https://www.habbo.com.br/habbo-imaging/avatarimage?&user=Bromarks&action=std&direction=2&head_direction=3&img_format=png&gesture=std&headonly=0&size=s" alt="Bromarks" />
							</a>
							</div>
						</div>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
		</section>
	</Layout>
);

export default Index;
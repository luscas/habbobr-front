import React from 'react';
import slugify from 'slugify';

function Forum(props) {
	return (
		<div className="col">
			<div className="card topic topic-303">
				<div className="card-body">
					<div className="avatar pixel lg mr-3">
						<img src={`https://www.habbo.com.br/habbo-imaging/avatarimage?&user=${props.author}&action=std&direction=2&head_direction=2&img_format=png&gesture=std&headonly=0&size=b`} alt={props.author} />
					</div>

					<div className="content">
						<h5 className="card-title mb-2 text-ellipsis">
							<a href={"/topic/" + slugify(props.title).toLowerCase()} title={props.title}>{props.title}</a>
						</h5>

						<div className="card-text">
							<a href={"/perfil/" + props.author} data-toggle="tooltip" title={props.author}>{props.author}</a>
							<span className="ml-auto text-muted">
								<i className="fas fa-eye ml-3 mr-1" /> 0
								<a href="https://marcocuel.com/p/fansite/forum/um-topico-aleatorio/#comments">
									<i className="fas fa-comment-alt ml-3 mr-1" /> 0
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Forum;
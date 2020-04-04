import React from 'react';
import slugify from 'slugify';

function Badge(props) {
	return (
		<div className="col-4 col-sm-3 col-lg-2 order-6">
			<div className={`card free ${props.status == false ? 'disabled' : ''}`}>
				<a href={"badge/" + slugify(props.title).toLowerCase()} title={props.title}>
					<div className="box pixel" data-toggle="tooltip" data-html="true" title={`<strong>${props.title}</strong>`}>
						<img src={`https://images.habbo.com/c_images/album1584/${props.code}.gif`} alt={props.title} />
					</div>

					<div className="info">{props.status ? 'Disponível' : 'Indisponível'}</div>
				</a>
			</div>
		</div>
	);
}

export default Badge;
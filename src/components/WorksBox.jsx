import React from 'react'

function WorksBox(props) {
	return (
		<div className="grid">
			<div className="grid__img">
				<img src={props.img} alt={props.alt} />
			</div>
			<div className="grid__card">
				<h2 className="cord-title" id="title1" aria-hidden="true">{props.title}</h2>
				<p className="cord-explain">{props.explain}</p>

				<div className="button-container">
					<a href={props.website} className="button">Website</a>
					<a href={props.github} className="button">Github</a>
				</div>
			</div>
		</div>
	)
}

export default WorksBox

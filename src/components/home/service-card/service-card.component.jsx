import React from 'react';
import './service-card.styles.scss';

const ServiceCard = ({img, header, text}) => {
	return (
		<div className="service-card">
			<img src={img} alt="pict" />
			<h3>{header}</h3>
			<p>{text}</p>
		</div>
	);
};

export default ServiceCard;

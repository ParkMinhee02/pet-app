import React from 'react';
import { Link } from 'react-router-dom';

const NewCard = ({data, i}) => {
	return (
		<div className="newList">
			<Link to={`/about/${data.id}`}>
				<div className="img">
					<img src={process.env.PUBLIC_URL+data.img} alt={data.title} />
				</div>
				<div className="text"><p>{data.title}</p></div>
				<div className="add"><p>{data.add}</p></div>
			</Link>
		</div>
	);
};

export default NewCard;
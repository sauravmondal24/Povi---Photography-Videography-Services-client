import React from 'react';
import { Link } from 'react-router-dom';

const SingleServiceReview = ({ review }) => {
	const { name, photoURL, comments } = review;
	return (
		<div>
			<div className="card mb-3 bg-dark border border-white">
				<div className="row g-0">
					<div className="col-md-2">
						<img
							style={{ width: '180px' }}
							src={photoURL}
							className="img-fluid rounded-start"
							alt="..."
						/>
					</div>
					<div className="col-md-10">
						<div className="card-body ">
							<h5 className="card-title py-0">{name}</h5>

							<p className="card-text">
								{comments.slice(0, 60) + ' '}
								<Link to="/myreviews">read more...</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleServiceReview;

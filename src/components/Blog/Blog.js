import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
	useTitle('Blog');
	return (
		<div style={{ backgroundColor: '#242E37' }} className="py-5 ">
			<div className="container text-start">
				<div className="accordion" id="accordionPanelsStayOpenExample">
					<div className="accordion-item">
						<h2 className="accordion-header" id="panelsStayOpen-headingOne">
							<button
								className="accordion-button fw-bold fs-4 py-4"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#panelsStayOpen-collapseOne"
								aria-expanded="true"
								aria-controls="panelsStayOpen-collapseOne"
							>
								Difference between SQL and NoSQL?
							</button>
						</h2>
						<div
							id="panelsStayOpen-collapseOne"
							className="accordion-collapse collapse show"
							aria-labelledby="panelsStayOpen-headingOne"
						>
							<div className="accordion-body">
								SQL is the programming language used to interface with
								relational databases. (Relational databases model data as
								records in rows and tables with logical links between them).
								NoSQL is a class of DBMs that are non-relational and generally
								do not use SQL
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="panelsStayOpen-headingTwo">
							<button
								className="accordion-button collapsed fw-bold fs-4 py-4"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#panelsStayOpen-collapseTwo"
								aria-expanded="false"
								aria-controls="panelsStayOpen-collapseTwo"
							>
								What is JWT, and how does it work?
							</button>
						</h2>
						<div
							id="panelsStayOpen-collapseTwo"
							className="accordion-collapse collapse"
							aria-labelledby="panelsStayOpen-headingTwo"
						>
							<div className="accordion-body">
								JSON Web Token (JWT) is an open standard (RFC 7519) for securely
								transmitting information between parties as JSON object. It is
								compact, readable and digitally signed using a private key/ or a
								public key pair by the Identity Provider(IdP). So the integrity
								and authenticity of the token can be verified by other parties
								involved. The purpose of using JWT is not to hide data but to
								ensure the authenticity of the data. JWT is signed and encoded,
								not encrypted. JWT is a token based stateless authentication
								mechanism. Since it is a client-side based stateless session,
								server doesn't have to completely rely on a datastore(database)
								to save session information.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="panelsStayOpen-headingThree">
							<button
								className="accordion-button collapsed fw-bold fs-4 py-4"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#panelsStayOpen-collapseThree"
								aria-expanded="false"
								aria-controls="panelsStayOpen-collapseThree"
							>
								What is the difference between javascript and NodeJS?
							</button>
						</h2>
						<div
							id="panelsStayOpen-collapseThree"
							className="accordion-collapse collapse"
							aria-labelledby="panelsStayOpen-headingThree"
						>
							<div className="accordion-body">
								JavaScript is a simple programming language that can be used
								with any browser that has the JavaScript Engine installed. Node.
								js, on the other hand, is an interpreter or execution
								environment for the JavaScript programming language.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="panelsStayOpen-headingFour">
							<button
								className="accordion-button collapsed fw-bold fs-4 py-4"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#panelsStayOpen-collapseFour"
								aria-expanded="false"
								aria-controls="panelsStayOpen-collapseFour"
							>
								How does NodeJS handle multiple requests at the same time?
							</button>
						</h2>
						<div
							id="panelsStayOpen-collapseFour"
							className="accordion-collapse collapse"
							aria-labelledby="panelsStayOpen-headingFour"
						>
							<div className="accordion-body">
								NodeJS receives multiple client requests and places them into
								EventQueue. NodeJS is built with the concept of event-driven
								architecture. NodeJS has its own EventLoop which is an infinite
								loop that receives requests and processes them. <br />
								We know NodeJS application is single-threaded. Say, if
								processing involves request A that takes 10 seconds, it does not
								mean that a request which comes after this request needs to wait
								10 seconds to start processing because NodeJS event loops are
								only single-threaded. The entire NodeJS architecture is not
								single-threaded. <br />
								NodeJS receives multiple client requests and places them into
								EventQueue. NodeJS is built with the concept of event-driven
								architecture. NodeJS has its own EventLoop which is an infinite
								loop that receives requests and processes them. EventLoop is the
								listener for the EventQueue. If NodeJS can process the request
								without I/O blocking then the event loop would itself process
								the request and sends the response back to the client by itself.
								But, it is possible to process multiple requests parallelly
								using the NodeJS cluster module or worker_threads module.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;

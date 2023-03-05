import {
	Button,
	Card, Col, Container, Form, Row
} from 'react-bootstrap';

import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
	console.debug();
	return (
		<Container fluid>
			<Row className="justify-content-center">
				<Col xs={12} md={8} lg={6}>
					<Card border="dark" className="mt-4">
						<Card.Body>
							<Card.Title>Login</Card.Title>
							<Card.Text>
								<Form.Label className="text-muted mt-2">Email Address</Form.Label>
								<Form.Control type="email" placeholder="name@example.com" />
								<Form.Label className="text-muted mt-2">Password</Form.Label>
								<Form.Control type="password" placeholder="Password" />
							</Card.Text>
							<Row className="justify-content-end">
								<Col className="text-muted">
									<Link to="/forgot_password">Forgot Password?</Link>
								</Col>
								<Col xs={6} sm={3} md={2} className="text-end">
									<Button variant="primary" type="submit" className="w-100">Login</Button>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Login;

import { useState } from 'react';
import {
	Button,
	Card, Col, Container, Form, Row
} from 'react-bootstrap';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import withReactContent from 'sweetalert2-react-content';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [validated, setValidated] = useState(false);

	const navigate = useNavigate();

	const swal = withReactContent(Swal);

	const handleSubmit = async (event: React.FormEvent<HTMLInputElement>) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}
		event.preventDefault();
		try {
			// const response = await login({ email, password }).unwrap();
			setValidated(true);
			if (response.success === true) {
				swal.fire(({
					title: 'Success',
					icon: 'success',
					text: 'You have successfully logged in!',
				}));
				navigate('/home');
			}
		} catch (err) {
			setValidated(false);
			swal.fire(({
				title: 'Error',
				icon: 'error',
				text: 'There was an error logging in.',
			}));
		}
	};

	return (
		<Container fluid>
			<Row className="justify-content-center">
				<Col xs={12} md={8} lg={6}>
					<Card border="dark" className="mt-4">
						<Card.Body>
							<Card.Title>Login</Card.Title>
							<Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e)}>
								<Card.Text>
									<Form.Label className="text-muted mt-2">Email Address</Form.Label>
									<Form.Control
										required
										onChange={(e) => setEmail(e.target.value)}
										type="email"
										placeholder="name@example.com"
										value={email}
									/>
									<Form.Label className="text-muted mt-2">Password</Form.Label>
									<Form.Control
										required
										onChange={(e) => setPassword(e.target.value)}
										type="password"
										placeholder="Password"
										value={password}
									/>
								</Card.Text>
								<Row className="justify-content-end">
									<Col className="text-muted">
										<Link to="/forgot_password">Forgot Password?</Link>
									</Col>
									<Col xs={6} sm={4} md={3} className="text-end">
										<Button variant="primary" type="submit" className="w-100">Login</Button>
									</Col>
								</Row>
								<Row>
									<Col className="text-muted mt-2">
										Don&apos;t have an account?&nbsp;
										<Link to="/register">Register</Link>
									</Col>
								</Row>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Login;

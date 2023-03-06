import { useRef, useState } from 'react';
import {
	Button, Card, Col, Container, Form, Row
} from 'react-bootstrap';
import ReactPasswordChecklist from 'react-password-checklist';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

import { UserCreationPayload, useCreateUserMutation } from '../store/user';

const Register = () => {
	const [email, setEmail] = useState('');
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');

	const navigate = useNavigate();

	const [formValid, setFormValid] = useState(false);
	const [validPassword, setValidPassword] = useState(false);

	const swal = withReactContent(Swal);

	const user = useRef<UserCreationPayload>({
		email: '',
		userName: '',
		password: '',
	});

	const [createUser] = useCreateUserMutation();

	const resetFields = () => {
		setEmail('');
		setUserName('');
		setPassword('');
		setPasswordConfirm('');
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}
		event.preventDefault();
		setFormValid(true);
		if (validPassword) {
			user.current = {
				email,
				userName,
				password,
			};
			try {
				const response = await createUser(user.current).unwrap();
				if (response) {
					resetFields();
					swal.fire(({
						title: 'Success',
						icon: 'success',
						text: 'You have successfully registered an account!'
					}));
					navigate('/login');
				}
			} catch (error) {
				console.debug(error);
				resetFields();
				swal.fire(({
					title: 'Error',
					icon: 'error',
					text: 'Something went wrong trying to register.'
				}));
			}
		}
	};

	return (
		<Container fluid>
			<Row className="justify-content-center">
				<Col xs={12} md={8} lg={6}>
					<Card border="dark" className="mt-4">
						<Card.Body>
							<Card.Title>Register</Card.Title>
							<Form
								noValidate
								validated={formValid}
								onSubmit={(e) => handleSubmit(e)}
							>
								<Card.Text>
									<Row>
										<Col>
											<Form.Label className="text-muted mt-2">
												Email Address
											</Form.Label>
											<Form.Control
												required
												onChange={(e) => setEmail(e.target.value)}
												type="email"
												placeholder="name@example.com"
												value={email}
											/>
										</Col>
										<Col>
											<Form.Label className="text-muted mt-2">
												Username
											</Form.Label>
											<Form.Control
												required
												onChange={(e) => setUserName(e.target.value)}
												type="text"
												placeholder="Username"
												value={userName}
											/>
										</Col>
									</Row>
									<Row>
										<Col>
											<Form.Label className="text-muted mt-2">
												Password
											</Form.Label>
											<Form.Control
												required
												onChange={(e) => setPassword(e.target.value)}
												type="password"
												placeholder="Password"
												value={password}
											/>
										</Col>
										<Col>
											<Form.Label className="text-muted mt-2">
												Confirm Password
											</Form.Label>
											<Form.Control
												required
												onChange={(e) => setPasswordConfirm(e.target.value)}
												type="password"
												placeholder="Confirm Password"
												value={passwordConfirm}
											/>
										</Col>
									</Row>
									<Row className="mt-2">
										<Col>
											<ReactPasswordChecklist
												rules={[
													'minLength',
													'specialChar',
													'number',
													'capital',
													'match',
												]}
												minLength={5}
												value={password}
												valueAgain={passwordConfirm}
												onChange={(isValid) => setValidPassword(isValid)}
											/>
										</Col>
									</Row>
									<Row className="justify-content-end">
										<Col xs={6} sm={4} md={3} className="text-end">
											<Button
												disabled={!formValid && !validPassword}
												variant="primary"
												type="submit"
												className="w-100"
											>
												Register
											</Button>
										</Col>
									</Row>
								</Card.Text>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Register;

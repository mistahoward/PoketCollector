import { Card, Container } from 'react-bootstrap';

const Login = () => {
	console.debug();
	return (
		<Container fluid>
			<Card border="dark" className="mt-4">
				<Card.Body>
					<Card.Title>Login</Card.Title>
					<Card.Text>
						Login form
					</Card.Text>
				</Card.Body>
			</Card>
		</Container>
	)
};

export default Login;

import { Card, Col, Container, Row } from 'react-bootstrap'

const Error404 = () => {
	  return (
		<Container fluid>
			<Row>
				<Col xs={12} md={8} lg={6}>
					<Card border="dark" className="mt-4">
						<Card.Body>
							<Card.Title>404 - Page Not Found </Card.Title>
							<Card.Text>Ope. Something went wrong trying to find that page.
							If you think this is an error, you're probably right. We have been notified 
							and will fix it ASAP.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
  );
};

export default Error404;

// import { useGetUserQuery } from './store/user';
import { useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

const Layout = () => {
	// const { data, isLoading } = useGetUserQuery();

	const x = 'debug';
	console.debug(x);
	return (
		<Navbar bg="light" expand="lg">
			<Container fluid>
				<Navbar.Brand href="#home">PCG</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Offcanvas id="basic-navbar-nav" placement="end">
					<Offcanvas.Header closeButton>
						<Offcanvas.Title>Offcanvas</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav>
							<Nav.Link href="#action1">Action</Nav.Link>
							<Nav.Link href="#action2">Another action</Nav.Link>
							<Nav.Link href="#action3">Something else</Nav.Link>
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
};

export default Layout;

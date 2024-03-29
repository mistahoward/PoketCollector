import { faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	Container, Nav, Navbar, Offcanvas
} from 'react-bootstrap';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import styles from './Layout.module.css';

const Layout = () => {
	const navigate = useNavigate();
	// ! need to put hook here - use bool for debugging
	// console.log(userData);
	const signedIn = false;

	return (
		<>
			<Navbar bg="main" expand="lg">
				<Container fluid>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Brand onClick={() => navigate('home')}>PCGC</Navbar.Brand>
					<Navbar.Offcanvas id="basic-navbar-nav" placement="start">
						<Offcanvas.Header closeButton>
							<Offcanvas.Title>Menu</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav>
								<Nav.Link
									onClick={() => navigate('home')}
									className="d-lg-none"
								>
									Home
								</Nav.Link>
								<Nav.Link disabled>Collection</Nav.Link>
								<Nav.Link disabled>Shop</Nav.Link>
								<Nav.Link disabled>Expansions</Nav.Link>
								<Nav.Link disabled>Cards</Nav.Link>
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
					<Navbar.Text className={styles.navBarIcon}>
						{signedIn
							? <FontAwesomeIcon icon={faCircleUser} />
							: <Link to="login"><FontAwesomeIcon icon={faRightFromBracket} /></Link>}
					</Navbar.Text>
				</Container>
			</Navbar>
			<Outlet />
		</>
	);
};

export default Layout;

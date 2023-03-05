// import { useGetUserQuery } from './store/user';
import { ListGroup } from 'react-bootstrap';

const Layout = () => {
	// const { data, isLoading } = useGetUserQuery();
	const x = 'debug';
	console.debug(x);
	return (
		<ListGroup>
			<ListGroup.Item>Item 1</ListGroup.Item>
		</ListGroup>
	);
};

export default Layout;

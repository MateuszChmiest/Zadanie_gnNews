import { Routes, Route } from 'react-router-dom';
import HomePage from "../HomePage";

const Root = () => (
	<Routes>
		<Route path='/' element={<HomePage />} />
		<Route path='/country/:id' element={<HomePage />} />
	</Routes>
);

export default Root;

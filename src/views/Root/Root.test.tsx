import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Root from './Root';
import { store } from '../../store/store';

describe('Root Component', () => {
	test('Render Root', async () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Root />
				</BrowserRouter>
			</Provider>
		);
	});
});
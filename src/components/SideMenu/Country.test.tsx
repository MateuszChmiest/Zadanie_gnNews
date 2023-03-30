import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Country from './Country';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('Country Component', () => {
	test('Change route to Poland', async () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Country
						country={{
							name: 'Poland',
							flagURL: 'https://newsapi.org/images/flags/pl.svg',
							short: 'pl',
						}}
					/>
				</BrowserRouter>
			</Provider>
		);
   
		const polandLink = screen.getByText(/Poland/);
		userEvent.click(polandLink);
		await waitFor(() => expect(window.location.pathname).toBe('/country/pl'));
	});
});
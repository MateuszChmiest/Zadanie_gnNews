import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./Header";
import { store } from "../../store/store";

describe("Header Component", () => {
	test("Correct rendering", async () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>
		);
	});
	test("Changes view to list", () => {
		 render(
			<Provider store={store}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>
		);
        const listIcon = screen.getByTestId('listIcon');
        fireEvent.click(listIcon);
        expect(listIcon.getAttribute('class')).toContain('text-primary')
	});
    test("Changes view to block", () => {
        render(
           <Provider store={store}>
               <BrowserRouter>
                   <Header />
               </BrowserRouter>
           </Provider>
       );
       const blockIcon = screen.getByTestId('blockIcon');
       fireEvent.click(blockIcon);
       expect(blockIcon.getAttribute('class')).toContain('text-primary')
   });
});

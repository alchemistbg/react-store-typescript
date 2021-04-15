//Import external libraries
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Import internal libraries
import { products } from './../../utils/db.json';

//Import components
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import ProductList from "./../ProductList/ProductList";
import ProductItem from './../ProductItem/ProductItem';

import { CartContextProvider } from './../../contexts/CartContext';
import { cartReducer, initialCartState } from './../../reducers/CartReducer';

import { SortContextProvider } from './../../contexts/SortContext';
import { sortReducer, initialSortState } from './../../reducers/SortReducer';

//Import styles
import { GlobalStyle } from './../../utils/styles/GlobalStyle';

import { AppWrapper } from './App.styles';
import { miscConstants } from '../../utils/miscConstants';
import { useReducer } from 'react';
import Cart from "../Cart/Cart";

const App = () => {

	const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);
	const [sortState, sortDispatch] = useReducer(sortReducer, initialSortState);

	const cartContextValues = {
		cartState,
		cartDispatch
	}

	const sortContextValues = {
		sortState,
		sortDispatch
	}

	return (
		<CartContextProvider value={cartContextValues}>
			<SortContextProvider value={sortContextValues}>
				<Router>
					<GlobalStyle />
					<AppWrapper>

						<Header />

						<main className='site-main'>
							<Switch>
								<Route
									exact
									path={"/"}
									// path={`${miscConstants.basicUrl}`}
									render={() => (<ProductList productItems={products} />)}
								/>
								<Route
									exact
									// path={`${miscConstants.basicUrl}/products/:id`}
									path={"/products/:id"}
									component={ProductItem}
								/>
								<Route
									exact
									path={"/cart"}
									component={Cart}
								/>

							</Switch>
						</main>

						<Footer />
					</AppWrapper>
				</Router>
			</SortContextProvider>
		</CartContextProvider>
	);

}

export default App;

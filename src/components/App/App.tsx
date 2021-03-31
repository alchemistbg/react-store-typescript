//Import external libraries
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Import internal libraries
import { products } from './../../utils/db.json';

//Import components
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import ProductList from "../ProductList/ProductList";
import ProductItem from './../ProductItem/ProductItem';

//Import styles
import { GlobalStyle } from './../../utils/styles/GlobalStyle';

import { AppWrapper } from './App.styles';
import { miscConstants } from '../../utils/miscConstants';

const App = () => {
	return (
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

					</Switch>
				</main>

				<Footer />
			</AppWrapper>
		</Router>
	);

}

export default App;

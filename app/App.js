import React, {Component} from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducers from './reducers/index'
import NavigationContainer from './components/Navigation'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(reducers)


class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<NavigationContainer />
			</Provider>
		)
	}
} 


export default App
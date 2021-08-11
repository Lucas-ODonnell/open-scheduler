import React from 'react'
import ReactDOM from 'react-dom'
import App from '../src/App'
import { BrowserRouter as Router, Route } from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Router>
			<Route path='/'>
				<App />
			</Route>
		</Router>,
		document.body.appendChild(document.createElement('div')),
	)
})

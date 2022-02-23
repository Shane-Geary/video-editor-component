//Copyright 2021 Glowstik Inc. All rights reserved.
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import globalStyles from './GlobalResources/Theme/globalStyles'
import {GlobalStyles} from 'tss-react'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider} from '@mui/material';
import {CacheProvider} from '@emotion/react'
import createCache from '@emotion/cache'
import theme from './GlobalResources/Theme/theme'
import store from './GlobalResources/Redux/store'
import { Provider } from 'react-redux'

export const muiCache = createCache({
	'key': 'mui',
	'prepend': true
})

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<CacheProvider value={muiCache}>
				<ThemeProvider theme = {theme}>
			<GlobalStyles styles={globalStyles}/>
					<App />
				</ThemeProvider>
			</CacheProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

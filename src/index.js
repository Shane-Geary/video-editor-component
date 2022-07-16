//Copyright 2021 Glowstik Inc. All rights reserved.
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import {CacheProvider} from '@emotion/react'
import createCache from '@emotion/cache'

export const muiCache = createCache({
	'key': 'mui',
	'prepend': true
})

ReactDOM.render(
	<React.StrictMode>
		{/* <Provider store={store}> */}
		<CacheProvider value={muiCache}>
			{/* <GlobalStyles styles={globalStyles}/> */}
			<App />
		</CacheProvider>
		{/* </Provider> */}
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister()
// serviceWorkerRegistration.register()
// serviceWorkerRegistration.checkValidServiceWorker()
// serviceWorkerRegistration.headerReload()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
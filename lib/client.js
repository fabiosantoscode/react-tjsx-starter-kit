'use strict'

import ReactDOM from 'react-dom'
import tjsx from 'tjsx'
import App from './components/App'

ReactDOM.render(tjsx`<${App} />`, document.getElementById('root'))

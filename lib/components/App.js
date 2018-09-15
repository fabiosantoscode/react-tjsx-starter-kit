'use strict'

import tjsx from 'tjsx'
import styled from 'react-emotion'

const Container = styled('h1')`
  text-align: center;
  font-family: sans-serif;
`

module.exports = function App () {
  return tjsx`
    <${Container}>
      Welcome to react-tjsx-starter-kit
    </>
  `
}

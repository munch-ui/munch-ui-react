import React from 'react'

import { ExampleComponent } from 'munch-ui-react'
import 'munch-ui-react/dist/index.css'
import ComponentsViewport from './pages/ComponentsViewport'

const App = () => {
  return (
    <>
      <ExampleComponent text='Create React Library Example 😄' />
      <ComponentsViewport></ComponentsViewport>
    </>
  )
}

export default App

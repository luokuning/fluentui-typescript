import React, { Suspense } from 'react'
import { RecoilRoot } from 'recoil'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Fabric, Stack, initializeIcons, mergeStyles } from '@fluentui/react'


initializeIcons()

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <Fabric>
        <Stack horizontal verticalFill>
          <Router>
            <div></div>
          </Router>
        </Stack>
      </Fabric>
    </RecoilRoot>
  )
}

export default App

import React, { lazy, Suspense } from 'react'
import './styles/globals.css'
import { AppContainer } from './styles/AppStyle'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as ROUTE from './lib/routeConstant'
import Backdrop from './components/Backdrop'
const ReqIndex = lazy(() => import('./pages/ReqIndex'))
const ReqIndexNew = lazy(() => import('./pages/ReqIndexNew'))

const App: React.FC = () => {
  return (
    <AppContainer>
      <Suspense fallback={<Backdrop open={true}/>}>
        <BrowserRouter>
          <Switch>
            <Route path={ROUTE.REQ_INDEX} component={ReqIndex} exact/>
            <Route path={ROUTE.REQ_INDEX_NEW} component={ReqIndexNew} exact/>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </AppContainer>
  )
}

export default App

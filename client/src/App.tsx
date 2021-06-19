import React, { lazy, Suspense } from 'react'
// STYLES
import './styles/globals.css'
import { AppContainer } from './styles/AppStyle'
// QUERYING
import QueryProvider from './lib/QueryProvider'
// ROUTING
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as ROUTE from './lib/routeConstant'
// COMPONENTS
import Backdrop from './components/Backdrop'
const ReqIndex = lazy(() => import('./pages/ReqIndex'))


const App: React.FC = () => {


  return (
    <AppContainer>
      <QueryProvider>
        <Suspense fallback={<Backdrop open={true}/>}>
          <BrowserRouter>
            <Switch>
              <Route path={ROUTE.REQ_INDEX} component={ReqIndex} exact/>
            </Switch>
          </BrowserRouter>
        </Suspense>
      </QueryProvider>
    </AppContainer>
    
  )
}

export default App

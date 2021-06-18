import React, { lazy, Suspense } from 'react'
import './styles/globals.css'
import { AppContainer } from './styles/AppStyle'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider  } from 'react-query'
import * as ROUTE from './lib/routeConstant'
import Backdrop from './components/Backdrop'
const ReqIndex = lazy(() => import('./pages/ReqIndex'))


const App: React.FC = () => {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
    <AppContainer>
      <Suspense fallback={<Backdrop open={true}/>}>
        <BrowserRouter>
          <Switch>
            <Route path={ROUTE.REQ_INDEX} component={ReqIndex} exact/>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </AppContainer>
    </QueryClientProvider>
  )
}

export default App

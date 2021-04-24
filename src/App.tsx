import React, { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { ResetCSS } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js'
import { useFetchPublicData } from 'state/hooks'

import PageLoader from './components/PageLoader'
import Menu from './components/Menu'
import Sidebar from "./components/LightPaper/Siderbar"
import ResponsiveSidebar from "./components/LightPaper/ResponsiveSideBar"
import ToggleButton from "./components/LightPaper/ToggleButton"
import SidebarFaq from "./components/Faq/Siderbar"
import ResponsiveSidebarFaq from "./components/Faq/ResponsiveSideBar"
import ToggleButtonFaq from "./components/Faq/ToggleButton"
import NftGlobalNotification from './views/Nft/components/NftGlobalNotification'
import GlobalStyle from './style/Global'
import './App.css'




// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page'
const Home = lazy(() => import('./views/Home'))
const HomeNew = lazy(() => import('./views/HomeNew'))
const Farms = lazy(() => import('./views/Farms'))
// const Lottery = lazy(() => import('./views/Lottery'))
// const Pools = lazy(() => import('./views/Pools'))
// const Ifos = lazy(() => import('./views/Ifos'))
const NotFound = lazy(() => import('./views/NotFound'))
const Ambassador = lazy(() => import('./views/Ambassador'))
// const Nft = lazy(() => import('./views/Nft'))

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  const { account, connect } = useWallet()
  useEffect(() => {
    if (!account && window.localStorage.getItem('accountStatus')) {
      connect('injected')
    }
  }, [account, connect])

  useFetchPublicData()

  return (
    <Router>
      <ResetCSS />
      <GlobalStyle />
      <Menu>
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <Route path="/" exact>
              <HomeNew />
              {/* <Home /> */}
            </Route>
            <Route path="/farms">
              <Farms />
            </Route>
            <Route path="/stake">
              <Farms tokenMode />
            </Route>
            {/* <Route path = '/ambassador' exact render={() => {window.location.href="/ambassador/index.html";return null}} />                       */}
            <Route path="/ambassador">
              <Ambassador />
            </Route>
            {/* <Route path="/pools"> */}
            {/*  <Pools /> */}
            {/* </Route> */}
            {/* <Route path="/lottery"> */}
            {/*  <Lottery /> */}
            {/* </Route> */}
            {/* <Route path="/ifo"> */}
            {/*  <Ifos /> */}
            {/* </Route> */}
            {/* <Route path="/nft"> */}
            {/*  <Nft /> */}
            {/* </Route> */}
            {/* Redirect */}
            {/* <Route path="/staking"> */}
            {/*  <Redirect to="/pools" /> */}
            {/* </Route> */}
            {/* <Route path="/syrup"> */}
            {/*  <Redirect to="/pools" /> */}
            {/* </Route> */}
            {/* <Route path="/litepaper">
              <Sidebar />
            </Route> */}
            
            <Route path="/faq">
              <SidebarFaq />
            </Route>

            <Route path="/responsivelightpaper">
              <ToggleButton />
            </Route>
            {/* 404 */}

            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Menu>
      <NftGlobalNotification />
    </Router>
  )
}

export default React.memo(App)

/* eslint-disable */

import React from 'react'
import { makeStyles } from '@material-ui/core'
import Page from 'components/layout/Page'
import IFrame from 'views/Trade'
import TopHeader from './Components/TopHeader'

const useStyles = makeStyles((theme) => ({
  iframe: {
    width: '100%',
    // height: 'calc(100vh - 140px)',
    borderRadius: 10,
    marginTop: 20,
  },
}))

const Ambassador = () => {
  const classes = useStyles()
  const [height, setHeight] = React.useState(10)
  const ref = React.useRef(null)
  const [tvl, setTvl] = React.useState(0)
  const [ambassadorValue, setAmbassadorValue] = React.useState(0)
  const [yfsiInWallet, setYFSIInWallet] = React.useState(0)
  const [maxStake, setMaxStake] = React.useState(0)
  const [maxUnStake, setUnStake] = React.useState(0)
  const [stakeFee, setStakeFee] = React.useState(0)
  const [unStakeFee, setUnStakeFee] = React.useState(0)
  const [stakedToken, setStakeToken] = React.useState(0)
  const [connected, setConnected] = React.useState(false);

  const resizeIframe = (obj) => {
    setHeight(obj.target.contentWindow.document.documentElement.scrollHeight)
    obj.target.style.height = `${obj.target.contentWindow.document.documentElement.scrollHeight}px !important`
  }

  React.useEffect(() => {
    let ele = document.querySelector<HTMLElement>('.sc-gGmIRh > div:nth-child(2) button')
    ele.innerHTML = 'Connect Wallet'
    ele.style.opacity = '0'
    ele.style.pointerEvents = 'none'
    return () => {
      ele.innerHTML = 'Connect'
      ele.style.opacity = '1'
      ele.style.pointerEvents = 'all'
    }
  }, [])

  React.useEffect(() => {
    try {
      let timeOut = setInterval(setValues, 1000)
      return () => {
        clearInterval(timeOut)
      }
    } catch (err) {
      console.log(err)
    }
  }, [ref.current])

  const setValues = () => {
    let ele = ref?.current?.contentWindow?.document?.getElementById('l-tvl')
    let ele2 = ref?.current?.contentWindow?.document?.getElementById('_stakers_value')
    let ele3 = ref?.current?.contentWindow?.document?.getElementById('l-token-balance')
    let ele4 = ref?.current?.contentWindow?.document?.getElementById('l-deposit-input')
    let ele5 = ref?.current?.contentWindow?.document?.getElementById('l-withdraw-input')
    let ele6 = ref?.current?.contentWindow?.document?.getElementById('l-staking-fee')
    let ele7 = ref?.current?.contentWindow?.document?.getElementById('l-unstaking-fee')
    let ele8 = ref?.current?.contentWindow?.document?.getElementById('l-token-staked')
    if (ref?.current?.contentWindow?.document?.getElementById('_connect_state_achieved')?.innerHTML === "falseConnected") {
      setConnected(true);
    }
    setTvl(ele?.innerHTML);
    setAmbassadorValue(ele2?.innerHTML)
    setYFSIInWallet(ele3?.innerHTML);
    setMaxStake(ele4?.value);
    setUnStake(ele5?.value);
    setStakeFee(ele6?.innerHTML);
    setUnStakeFee(ele7?.innerHTML);
    setStakeToken(ele8?.innerHTML);
  }

  const connectPressed = () => {
    ref.current.contentWindow.document.getElementById('_connect_state_achieved').innerHTML = "true"
  }

  const stakePressed = () => {
    // ref.current.contentWindow.document.getElementById('_button_stake_achieved').innerHTML = "true"
    ref?.current?.contentWindow?.document?.getElementById('l-stake-btn')?.click()
  }

  const unStakePressed = () => {
    // ref?.current?.contentWindow?.document?.getElementById('_button_unStake_achieved').innerHTML = "true"
    ref?.current?.contentWindow?.document?.getElementById('l-unstake-btn')?.click()
  }

  const stakeMaxPressed = () => {
    // ref?.current?.contentWindow?.document?.getElementById('_button_stake_max_achieved').innerHTML = "true"
    ref?.current?.contentWindow?.document?.getElementById('l-set-max-deposit-btn')?.click()
    setMaxStake(ref?.current?.contentWindow?.document?.getElementById('l-deposit-input')?.value);
  }
  
  const unStakeMaxPressed = () => {
    // ref?.current?.contentWindow?.document?.getElementById('_button_unStake_max_achieved').innerHTML = "true"
    ref?.current?.contentWindow?.document?.getElementById('l-set-max-withdraw-btn')?.click()
    setUnStake(ref?.current?.contentWindow?.document?.getElementById('l-withdraw-input')?.value);
  }

  const stakeInput = (value) => {
    console.log(value)
    ref.current.contentWindow.document.getElementById('l-deposit-input').value = value
  }

  const unStakeInput = (value) => {
    console.log(value)
    ref.current.contentWindow.document.getElementById('l-withdraw-input').value = value
  }

  return (
    <Page>
      <TopHeader
        connected={connected}
        connectPressed={connectPressed}
        tvlValue={tvl}
        ambassadorValue={ambassadorValue}
        yfsiInWallet={yfsiInWallet}
        stakeFee={stakeFee}
        unStakeFee={unStakeFee}
        stakePressed={stakePressed}
        unStakePressed={unStakePressed}
        stakeMaxPressed={stakeMaxPressed}
        unStakeMaxPressed={unStakeMaxPressed}
        stakeInput={stakeInput}
        unStakeInput={unStakeInput}
        maxStake={maxStake}
        maxUnStake={maxUnStake}
        stakedToken={stakedToken}
      />
      <iframe
        ref={ref}
        frameBorder={0}
        scrolling="no"
        onLoad={resizeIframe}
        src="/ambassadorPage/index.html"
        title="Ambassador"
        className={classes.iframe}
        id="ambassadorIframe"
        style={{ height: height, display: 'none' }}
      />
    </Page>
  )
}

export default Ambassador

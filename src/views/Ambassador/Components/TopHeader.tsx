import React from 'react'
import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import BigNumber from 'bignumber.js/bignumber'
import CardValue from './CardValue'
import FarmIco from '../../../assets/images/busd-bnb.png'
import { useFarms, useTotalValue } from '../../../state/hooks'
import FarmCardNew from '../../Farms/components/FarmCard/FarmCardAmbassador';
// import Image from '../../../assets/images/ambassadorpage.png'
import Image from '../../../assets/images/ambassadorpage.svg'

const useStyles = makeStyles((theme) => ({
  heading: {
    color: '#F6D76A',
    fontWeight: 400,
    fontSize: 28,
    textAlign: 'center',
    letterSpacing: 2,
    marginBottom: 20,
    marginTop: 10,
  },
  subHeading: {
    color: '#dadbdc6b',
    fontWeight: 400,
    fontSize: 14,
    textAlign: 'center',
    letterSpacing: 2,
    marginBottom: 20,
    marginTop: 10,
  },
  text: {
    color: '#dadbdcb0',
    fontWeight: 400,
    fontSize: 14,
    textAlign: 'center',
    letterSpacing: 2,
    marginBottom: 20,
    marginTop: 10,
    marginLeft: 40,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    }
  },
  card: {
    background: 'linear-gradient(-45deg,#152E51,#23436E)',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexFlow: 'column',
    padding: 20,
    minHeight: 130,
  },
  cardHeading: {
    color: 'rgba(255,255,255,0.42)',
    fontSize: 14,
  },
  cardValue: {
    color: 'white',
    fontWeight: 600,
    fontSize: 24,
    marginTop: 10,
  },
  stakeBtn: {
    width: 130,
    height: 40,
    margin: 10,
    marginBottom: 30,
  },
  para: {
    color: 'rgba(255,255,255,0.8)',
    maxWidth: 600,
    textAlign: 'center',
    margin: 'auto',
  },
  topGrid: {
    // [theme.breakpoints.down('sm')]: {
    //   display: "block",
    //   // justifyContent:"space-between"
    // }
    textAlign: 'center',
  },
  connectBtn: {
    width: 150,
    height: "45px !important",
    marginBottom: 20,
    [theme.breakpoints.down('sm')]: {
      position: "relative",
      top: 'unset',
      right: 'unset',
      displayAlign: 'center',
    }
  },
  bottom: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      textAlign: 'center'
    }
  }
}))

const Ambassadors = ({ stakedToken, unStakeFee, stakeFee, connected, tvlValue, ambassadorValue, yfsiInWallet, connectPressed, stakePressed, unStakePressed, stakeInput, unStakeInput, maxStake, maxUnStake, stakeMaxPressed, unStakeMaxPressed }: Props) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.topGrid}>
        <Typography className={classes.heading}>Ambassadors</Typography>
        <Button variant="contained" color="primary" className={classes.connectBtn} onClick={connectPressed}>{connected ? "Wallet Connected" : "Unlock Wallet"}</Button>
        <Typography className={classes.subHeading}>Unlock your ethereum wallet to see all information in this page.</Typography>
      </div>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <div className={classes.card}>
            <Typography className={classes.cardHeading}>Total YFSI</Typography>
            <Typography className={classes.cardValue}>31,415</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className={classes.card}>
            <Typography className={classes.cardHeading}>YFSI in Wallet</Typography>
            <Typography className={classes.cardValue}>{yfsiInWallet}</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className={classes.card}>
            <Typography className={classes.cardHeading}>Number of Ambassadors</Typography>
            <Typography className={classes.cardValue}>{ambassadorValue}</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className={classes.card}>
            <Typography className={classes.cardHeading}>Total YFSI Locked</Typography>
            <Typography className={classes.cardValue}>{tvlValue}</Typography>
          </div>
        </Grid>

        <Grid item xs={12}>
          <FarmCardNew
            key='farm.pid'
            farm='farm'
            removed='removed'
            bnbPrice='bnbPrice'
            cakePrice='cakePrice'
            ethereum='ethereum'
            account='account'
            connected={connected}
            yfsiInWallet={yfsiInWallet}
            stakeFee={stakeFee}
            unStakeFee={unStakeFee}
            connectPressed={connectPressed}
            stakePressed={stakePressed}
            stakeInput={stakeInput}
            unStakeInput={unStakeInput}
            unStakePressed={unStakePressed}
            maxStake={maxStake}
            maxUnStake={maxUnStake}
            stakeMaxPressed={stakeMaxPressed}
            unStakeMaxPressed={unStakeMaxPressed}
            stakedToken={stakedToken}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.heading} style={{ marginTop: 40 }}>Become An Ambassador!</Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.bottom}>
            <img src={Image} alt='imageAmbassador' style={{ width: '250px', height: '280px' }} />
            <div className={classes.text} style={{ textAlign: 'left', lineHeight: 2 }}>
            Our Ambassador program is live!          

            <div >
            An Ambassador is anyone willing to stake a minimum of 50 YFSI tokens for six months or more.
            Ambassadors are being offered a number of incentives. Some of them are:
          </div>
          <div >
           - Exclusive Access to the small $BSCI Liquidity Gathering Event.
          </div>
          <div >
          - 33% of the fees generated on the BSCI/BNB and BSCI staking Pool, 
          paid out based on each Ambassador’s percentage of the overall Ambassador Pool.
          </div>

          <div >
          - Benefits as the NFT Launchpad & Marketplate launches(Q2 2021)          </div>
          <div >
          - Further incentives yet to be announced.         </div>
</div>

          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Ambassadors

interface Props {
  tvlValue?: number
  ambassadorValue?: number,
  yfsiInWallet?: number,
  stakeFee?: number,
  unStakeFee?: number,
  connectPressed?: any,
  connected?: any
  stakePressed?: any,
  unStakePressed?: any,
  stakeMaxPressed?: any,
  unStakeMaxPressed?: any,
  stakeInput?: any,
  unStakeInput?: any
  maxStake?: any,
  maxUnStake?: any
  stakedToken?: any
}
Ambassadors.defaultProps = {
  tvlValue: 0,
  ambassadorValue: 0,
  yfsiInWallet: 0,
  stakeFee: 0,
  unStakeFee: 0,
  stakedToken: 0,
  connectPressed: null,
  connected: false,
  stakePressed: null,
  unStakePressed: null,
  stakeMaxPressed: null,
  unStakeMaxPressed: null,
  stakeInput: null,
  unStakeInput: null,
  maxStake: null,
  maxUnStake: null,
}

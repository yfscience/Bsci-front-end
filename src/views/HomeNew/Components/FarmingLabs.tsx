import React from 'react'
import { Button, Grid, Hidden, makeStyles, Typography } from '@material-ui/core'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import BigNumber from 'bignumber.js/bignumber'
import { Link } from 'react-router-dom'
import { getBalanceNumber } from 'utils/formatBalance'
import useTokenBalance from 'hooks/useTokenBalance'
import { getCakeAddress } from 'utils/addressHelpers'
import CakeWalletBalance from 'views/Home/components/CakeWalletBalance'
import CakeHarvestBalance from 'views/Home/components/CakeHarvestBalance'
import CardValue from './CardValue'
import { useFarms, useTotalValue, usePriceCakeBusd } from '../../../state/hooks'
import FarmIco from '../../../assets/images/Potion.png'
import useAllEarnings from '../../../hooks/useAllEarnings'
import Harvest from './Harvest'

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
  card: {
    background: 'linear-gradient(-45deg,#152E51,#23436E)',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexFlow: 'column',
    padding: 20,
    height: '100%',
    minHeight: 200,
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
  farmBtn: {
    width: 130,
    height: 40,
  },
}))

const FarmingLabs = () => {
  const classes = useStyles()
  const totalValue = useTotalValue()
  const farms = useFarms()
  const eggPrice = usePriceCakeBusd().toNumber()
  const allEarnings = useAllEarnings()
  const cakeBalance = getBalanceNumber(useTokenBalance(getCakeAddress()))
  
  const earningsSum = allEarnings.reduce((accum, earning) => {
    return accum + new BigNumber(earning).div(new BigNumber(10).pow(18)).toNumber()
  }, 0)
  let eggPerBlock = 0
  
  if (farms && farms[0] && farms[0].eggPerBlock) {
    eggPerBlock = new BigNumber(farms[0].eggPerBlock).div(new BigNumber(10).pow(18)).toNumber()
  }
  
  return (
    <div>
      <Typography className={classes.heading}>Farming Labs</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.card}>
            <Typography className={classes.cardHeading}>Total Value Locked (TVL)</Typography>
            <Typography className={classes.cardValue}>
              <CardValue value={totalValue.toNumber()} prefix="$" decimals={2} />{' '}
            </Typography>
          </div>
        </Grid>
        {/* <Grid item xs={12} sm={6} md={4}>
          <div className={classes.card}>
            <img src={FarmIco} alt="" width="70px" style={{ marginBottom: 10 }} />
            <Link to="/farms">
              <Button variant="contained" color="primary" className={`farm_card_unlock_btn ${classes.farmBtn}`}>
                Farm Now <ChevronRightIcon fontSize="inherit" />
              </Button>
            </Link>
          </div>
        </Grid> */}
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.card}>
            <Typography className={classes.cardHeading}>BSCI to Harvest</Typography>
            <CakeHarvestBalance earningsSum={earningsSum}/>
            {/* <Typography className={classes.cardValue}>~${(eggPrice * cakeBalance).toFixed(2)}</Typography> */}
            <Typography className={classes.cardValue}>~${(eggPrice * earningsSum).toFixed(2)}</Typography>
            {/* <CakeWalletBalance cakeBalance={cakeBalance} /> */}
            {/* <Typography className={classes.cardValue}>~${(eggPrice * cakeBalance).toFixed(2)}</Typography> */}
            <Harvest />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.card}>
            <Typography className={classes.cardHeading}>New BSCI per block</Typography>
            <Typography className={classes.cardValue}>{eggPerBlock}</Typography>
          </div>
        </Grid>
        <Hidden smDown>
          <Grid item xs={4} />
        </Hidden>
        {/* <Grid item xs={12} sm={12} md={4}>
          <div className={classes.card}>
            <Typography className={classes.cardHeading}>BSCI to Harvest</Typography>
            <Typography className={classes.cardValue}>{(eggPrice * earningsSum).toFixed(2)}</Typography>
            <Harvest />
          </div>
        </Grid> */}
        <Hidden smDown>
          <Grid item xs={4} />
        </Hidden>
      </Grid>
    </div>
  )
}

export default FarmingLabs

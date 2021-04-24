import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import BigNumber from 'bignumber.js/bignumber'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { getBalanceNumber } from '../../../utils/formatBalance'
import useTokenBalance from '../../../hooks/useTokenBalance'
import { getCakeAddress } from '../../../utils/addressHelpers'
import CardValue from './CardValue'
import { usePriceCakeBusd } from '../../../state/hooks'

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
    justifyContent: 'space-evenly',
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
  },
}))

const Stack1 = () => {
  const classes = useStyles()
  const cakeBalance = getBalanceNumber(useTokenBalance(getCakeAddress()))
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0)
  const cakeSupply = getBalanceNumber(circSupply)
  const eggPrice = usePriceCakeBusd()
  const marketCap = eggPrice.times(circSupply)

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography className={classes.heading}>Overview</Typography>
      </Grid>
      <Grid item xs={6} md={3}>
        <div className={classes.card}>
          <Typography className={classes.cardHeading}>Your BSCI Balance</Typography>
          <Typography className={classes.cardValue}>
            {cakeBalance && <CardValue value={cakeBalance} decimals={0} />}
          </Typography>
        </div>
      </Grid>
      <Grid item xs={6} md={3}>
        <div className={classes.card}>
          <Typography className={classes.cardHeading}>BSCI Circulation</Typography>
          <Typography className={classes.cardValue}>
            {cakeSupply && <CardValue value={cakeSupply} decimals={0} />}
          </Typography>
        </div>
      </Grid>
      <Grid item xs={6} md={3}>
        <div className={classes.card}>
          <Typography className={classes.cardHeading}>BSCI Minted</Typography>
          <Typography className={classes.cardValue}>
            {totalSupply && <CardValue value={getBalanceNumber(totalSupply)} decimals={0} />}
          </Typography>
        </div>
      </Grid>
      <Grid item xs={6} md={3}>
        <div className={classes.card}>
          <Typography className={classes.cardHeading}>Market Cap</Typography>
          <Typography className={classes.cardValue}>
            <CardValue value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
          </Typography>
        </div>
      </Grid>
    </Grid>
  )
}

export default Stack1

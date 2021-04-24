import React from 'react'
import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { Link } from 'react-router-dom'
import BigNumber from 'bignumber.js/bignumber'
import CardValue from './CardValue'
import FarmIco from '../../../assets/images/busd-bnb.png'
import { useFarms, useTotalValue } from '../../../state/hooks'

const useStyles = makeStyles((theme) => ({
  heading: {
    color: '#F6D76A',
    fontWeight: 400,
    fontSize: 28,
    textAlign: 'center',
    letterSpacing: 2,
    marginBottom: 10,
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
    marginBottom: 30,
  },
  para: {
    color: 'rgba(255,255,255,0.8)',
    maxWidth: 600,
    textAlign: 'center',
    margin: 'auto',
  },
}))

const Ambassadors = () => {
  const classes = useStyles()

  return (
    <div>
      {/* <Typography className={classes.heading}>Ambassadors</Typography> */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography className={classes.heading}>Ambassadors</Typography>
        </Grid>
        {/* <Grid item xs={12} sm={6} md={4}>
          <div className={classes.card}>
            <Typography className={classes.cardHeading}>Total yfsi</Typography>
            <Typography className={classes.cardValue}>73,000</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.card}>
            <Typography className={classes.cardHeading}>Nubmer of ambassadors</Typography>
            <Typography className={classes.cardValue}>100</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.card}>
            <Typography className={classes.cardHeading}>TVL</Typography>
            <Typography className={classes.cardValue}>500,000$</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.card}>
            <Typography className={classes.cardHeading}>Minimum yfsi</Typography>
            <Typography className={classes.cardValue}>50 Yfsi</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.card}>
            <Typography className={classes.cardHeading}>Yfsi Price</Typography>
            <Typography className={classes.cardValue}>50$</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.card}>
            <Typography className={classes.cardHeading}>Total Rewards</Typography>
            <Typography className={classes.cardValue}>50,000 BSCI</Typography>
          </div>
        </Grid> */}
        <Grid item xs={12}>
          <Typography className={classes.para}>
            Our Ambassador Program is live! Become an Ambassador in order to receive rewards and unique benefits.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center">
            <Link to="/ambassador">
              <Button variant="contained" color="primary" className={`farm_card_unlock_btn ${classes.stakeBtn}`}>
                Learn more <ChevronRightIcon fontSize="inherit" />
              </Button>
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Ambassadors

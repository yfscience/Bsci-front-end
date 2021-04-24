import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import AmbassadorIco from '../../../assets/images/Ambassador.png'
import GroupIco from '../../../assets/images/group.png'
import NftIco from '../../../assets/images/Tradingbotimage.png'

const useStyles = makeStyles((theme) => ({
  card: {
    background: 'linear-gradient(-45deg,#152E51,#23436E)',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexFlow: 'column',
    padding: 20,
    height: '100%',
    minHeight: 280,
  },
  cardHeading: {
    color: 'white',
    fontWeight: 600,
    fontSize: 24,
    marginTop: 10,
    textAlign: 'center',
  },
  lightBg: {
    background: 'linear-gradient(-90deg,rgba(39,64,109,255),#506893)',
    width: '100%',
    borderRadius: 10,
    height: '70%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  readMore: {
    color: '#7a712e',
    fontSize: 14,
  },
}))

const Blogs = () => {
  const classes = useStyles()

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <div className={classes.card}>
            <div className={classes.lightBg}>
              <img src={AmbassadorIco} alt="" width="140px" />
            </div>
            <Typography className={classes.cardHeading}>Ambassadors Program</Typography>
            <Link to="/ambassador">
              <Typography className={classes.readMore}>Read More</Typography>
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.card}>
            <div className={classes.lightBg}>
              <img src={GroupIco} alt="" width="80%" />
            </div>
            <Typography className={classes.cardHeading}>Farming Labs</Typography>
            <Link to="/farms">
              <Typography className={classes.readMore}>Read More</Typography>
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.card}>
            <div className={classes.lightBg}>
              <img src={NftIco} alt="" width="80%" />
            </div>
            <Typography className={classes.cardHeading}>NFT Launchpad</Typography>
            <a href="http://bscience.finance/">
              <Typography className={classes.readMore}>Read More</Typography>
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Blogs

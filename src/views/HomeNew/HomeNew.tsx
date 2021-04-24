import { Grid } from '@material-ui/core'
import React from 'react'
import Page from '../../components/layout/Page'
import Ambassadors from './Components/Ambassadors'
import FarmingLabs from './Components/FarmingLabs'
import Stack1 from './Components/Stack1'
import Blogs from './Components/Blogs'
// import Harvest from './Components/Harvest'

const HomeNew = () => {
  return (
    <Page>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Stack1 />
        </Grid>
        <Grid item xs={12}>
          <FarmingLabs />
        </Grid>
        {/* <Grid item xs={12}>
          <Harvest />
        </Grid> */}
        <Grid item xs={12}>
          <Ambassadors />
        </Grid>
        <Grid item xs={12}>
          <Blogs />
        </Grid>
      </Grid>
    </Page>
  )
}

export default HomeNew

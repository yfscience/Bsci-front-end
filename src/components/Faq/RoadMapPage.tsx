
import React from 'react'
import { Box, Container, Paper, Grid, Typography, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { SteppedLineTo } from 'react-lineto'

const useStyles = makeStyles({
    card: {
        borderRadius: '5px',
        backgroundColor: '#2C5286',
        zIndex: 10
    },
    roundedImage: {
        border: '2px solid #D8CA84',
        textAlign: 'center',
        borderRadius: '50%',
        height: '80px',
        width: '80px',
        paddingTop: '15px',
    },
    roundedImageText: {
        color: '#D8CA84',
        fontSize: '18px',
    },
    features: {
        fontSize: '1rem',
        color: 'white',
        fontWeight: 'normal',
        margin: '3px 15px',
    },
    hr: {
        color: "white",
        position: 'absolute',
        top: "140px",
        left: "680px"
    },
    hr2: {
        color: "white",
        position: "absolute",
        left: "840px",
        top: "155px",
        transform: "rotate(90deg)"
    },
    hr3: {
        color: "white",
        position: "absolute",
        top: "300px",
        left: "500px"
    }
})
const RoadMap = () => {
    const classes = useStyles()
    return (
        <Box px={4} py={4}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Grid item lg={12} className={`${classes.card} A`}>
                        <Box p={5}>
                            <Grid container spacing={4} alignItems="center">
                                <Grid item lg={3} sm={3} xs={4}>
                                    <div className={classes.roundedImage}>
                                        <Typography variant="h5" color="initial" className={classes.roundedImageText}>
                                            Q1
                                        </Typography>
                                        <Typography variant="h5" color="initial" className={classes.roundedImageText}>
                                            2020
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item lg={9} sm={9} xs={8}>
                                    <Typography variant="h5" color="initial" className={classes.features}>
                                        - Liquidity Mining
                                    </Typography>
                                    <Typography variant="h5" color="initial" className={classes.features}>
                                        - BCSI token launch
                                    </Typography>
                                    <Typography variant="h5" color="initial" className={classes.features}>
                                        - YFSI Staking
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item lg={12} className={`${classes.card} B`}>
                        <Hidden mdUp>
                            <Box p={5} my={5}>
                                <Grid container spacing={5} alignItems="center">
                                    <Grid item lg={3} sm={4} xs={4}>
                                        <div className={classes.roundedImage}>
                                            <Typography variant="h5" color="initial" className={classes.roundedImageText}>
                                                Q1
                                            </Typography>
                                            <Typography variant="h5" color="initial" className={classes.roundedImageText}>
                                                2020
                                            </Typography>
                                        </div>
                                    </Grid>
                                    <Grid item lg={9} sm={8} xs={8}>
                                        <Typography variant="h5" color="initial" className={classes.features}>
                                            - BSCI Staking
                                        </Typography>
                                        <Typography variant="h5" color="initial" className={classes.features}>
                                            - Bridge
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Hidden>
                    </Grid>
                    <Grid item lg={12} className={classes.card}>
                        <Box p={5} my={5}>
                            <Grid container spacing={5} alignItems="center">
                                <Grid item lg={3} sm={4} xs={4}>
                                    <div className={classes.roundedImage}>
                                        <Typography variant="h5" color="initial" className={classes.roundedImageText}>
                                            Q1
                                        </Typography>
                                        <Typography variant="h5" color="initial" className={classes.roundedImageText}>
                                            2020
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item lg={9} sm={8} xs={8}>
                                    <Typography variant="h5" color="initial" className={classes.features}>
                                        - NFT Launchpad
                                    </Typography>
                                    <Typography variant="h5" color="initial" className={classes.features}>
                                        - Multichain Platform
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item lg={12} className={classes.card}>
                        <Hidden mdUp>
                            <Box p={5} my={3}>
                                <Grid container spacing={5} alignItems="center">
                                    <Grid item lg={3}>
                                        <div className={classes.roundedImage}>
                                            <Typography variant="h5" color="initial" className={classes.roundedImageText}>
                                                Q1
                                            </Typography>
                                            <Typography variant="h5" color="initial" className={classes.roundedImageText}>
                                                2020
                                            </Typography>
                                        </div>
                                    </Grid>
                                    <Grid item lg={9}>
                                        <Typography variant="h5" color="initial" className={classes.features}>
                                            - Governance
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Hidden>
                    </Grid>
                    <Grid item lg={12} className={classes.card}>
                        <Box p={5} my={5} style={{ marginBottom: 0 }}>
                            <Grid container spacing={5} alignItems="center">
                                <Grid item lg={3} sm={4} xs={4}>
                                    <div className={classes.roundedImage}>
                                        <Typography variant="h5" color="initial" className={classes.roundedImageText}>
                                            Q1
                                        </Typography>
                                        <Typography variant="h5" color="initial" className={classes.roundedImageText}>
                                            2020
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item lg={9} sm={8} xs={8}>
                                    <Typography variant="h5" color="initial" className={classes.features}>
                                        - Automated Trading Tool
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
                <Hidden smDown>
                    <Grid item xs={12} md={6}>
                        <Grid item lg={12} className={`${classes.card} C`}>
                            <Box p={5} my={5}>
                                <Grid container spacing={5} alignItems="center">
                                    <Grid item lg={3}>
                                        <div className={classes.roundedImage}>
                                            <Typography variant="h5" color="initial" className={classes.roundedImageText}>
                                                Q1
                                        </Typography>
                                            <Typography variant="h5" color="initial" className={classes.roundedImageText}>
                                                2020
                                        </Typography>
                                        </div>
                                    </Grid>
                                    <Grid item lg={9}>
                                        <Typography variant="h5" color="initial" className={classes.features}>
                                            - BSCI Staking
                                        </Typography>
                                        <Typography variant="h5" color="initial" className={classes.features}>
                                            - Bridge
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item lg={12} className={classes.card}>
                            <Box p={5} my={3}>
                                <Grid container spacing={5} alignItems="center">
                                    <Grid item lg={3}>
                                        <div className={classes.roundedImage}>
                                            <Typography variant="h5" color="initial" className={classes.roundedImageText}>
                                                Q1
                                            </Typography>
                                            <Typography variant="h5" color="initial" className={classes.roundedImageText}>
                                                2020
                                            </Typography>
                                        </div>
                                    </Grid>
                                    <Grid item lg={9}>
                                        <Typography variant="h5" color="initial" className={classes.features}>
                                            - Governance
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Hidden>
            </Grid>
        </Box>
    )
}

export default RoadMap
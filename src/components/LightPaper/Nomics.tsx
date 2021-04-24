import React from 'react'
import { Grid, Typography, createStyles, makeStyles } from "@material-ui/core";
import cake from '../../assets/images/cake.png';


const useStyles = makeStyles((theme) => ({
    mainHead: {
        textAlign: "center",
        marginTop: "40px",
        color: "#f6d76a",
        marginBottom: "30px",
    },
    cntnr: {
        // backgroundColor: "#23436e",
        // height: "100vh",
        // borderRadius: "0px 10px 10px 0px",
        padding: 20
    },
    txt: {
        marginTop: "70px",
        color: "white",
        opacity: "0.5"
    },
    txtdiv: {
        [theme.breakpoints.up('lg')]: {
            width: "85%"
        },
    },
    ulclr: {
        color: "white",
        opacity: "0.5",
        fontSize: "20px",
        marginBottom: "15px"
    },
    colordiv: {
        borderRadius: "50%",
        height: "30px"
    },
    listdiv: {
        display: "flex",
        justifyContent: "flex-start",
        [theme.breakpoints.down('md')]: {
            display: "flex",
            justifyContent: "center",
        },

    }
}))

const Nomics = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.cntnr} alignItems="center" style={{ display: "flex", justifyContent: "center" }}>
            <Grid item xs={12} sm={7} style={{ display: "flex", justifyContent: "center" }}>
                <img src={cake} alt="chart" width='70%' />
            </Grid>
            <Grid item className={classes.listdiv} xs={12} sm={5} >
                <ul style={{ listStyleType: "none" }}>
                    <li className={classes.ulclr}>60% ICO</li>
                    <li className={classes.ulclr}>15% Staking Rewards + Airdrops</li>
                    <li className={classes.ulclr}>10% Marketing</li>
                    <li className={classes.ulclr}>10% Uniswap locked for 1 month</li>
                    <li className={classes.ulclr}>5% Team locked for 1 year</li>
                </ul>
            </Grid>
        </Grid>
    )
}

export default Nomics
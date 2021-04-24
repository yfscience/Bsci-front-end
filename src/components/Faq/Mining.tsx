import React from 'react'
import { Grid, Typography, createStyles, makeStyles, Button } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
    mainHead: {
        textAlign: "center",
        marginTop: "40px",
        color: "#f6d76a",
        marginBottom: "30px",
    },
    cntnr: {
        // backgroundColor: "#23436e",
        // // height: "100vh",
        // borderRadius: "0px 10px 10px 0px",
        [theme.breakpoints.down('sm')]:{
            // height: 'unset'
        }
    },
    txt: {
        marginTop: "70px",
        color: "white",
        opacity: "0.5",
        [theme.breakpoints.down('md')]: {
            margin: '70px 20px 30px'
        }
    },
    txtdiv: {
        [theme.breakpoints.up('lg')]: {
            width: "65%"
        },
    },
    rounddiv: {
        borderRadius: "50%",
        border: "2px solid #f6d76a",
    },
    card: {
        backgroundColor: "#5478a9",
        display: "flex",
        justifyContent: "space-around",
    },
    ulclr: {
        color: "white",
        opacity: "0.5",
        fontSize: "15px",
        marginBottom: "15px",
        [theme.breakpoints.down('xs')]: {
            margin: '15px 20px 15px'
        }
    },
    scndtxt: {
        marginTop: "30px",
        color: "white",
        opacity: "0.5",
        marginBottom: "130px",
        [theme.breakpoints.down('md')]: {
            margin: '30px 20px 130px'
        },
        [theme.breakpoints.down('sm')]: {
            margin: '30px 20px 100px',
        },
    },
}))

const Mining = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container className={classes.cntnr} style={{ display: "flex", justifyContent: "center" }}>
                <div className={classes.txtdiv}>
                    <Typography paragraph className={classes.txt}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum
                    </Typography>
                </div>
                <ul>
                    <li className={classes.ulclr}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</li>
                    <li className={classes.ulclr}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</li>
                    <li className={classes.ulclr}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</li>
                    <li className={classes.ulclr}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</li>
                    <li className={classes.ulclr}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</li>
                    <li className={classes.ulclr}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</li>
                </ul>
                <div className={classes.txtdiv}>
                    <Typography paragraph className={classes.scndtxt}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum
                    </Typography>
                </div>
            </Grid>
        </div>
    )
}

export default Mining
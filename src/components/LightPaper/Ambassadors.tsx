import React from 'react'
import { Grid, Typography, createStyles, makeStyles } from "@material-ui/core";
import ambassadorpage from '../../assets/images/ambassadorpage.png';


const useStyles = makeStyles((theme) => ({
    mainHead: {
        textAlign: "center",
        marginTop: "40px",
        color: "#f6d76a",
        marginBottom: "30px",
    },
    cntnr: {
        marginTop: "40px",
        // backgroundColor: "#23436e",
        // minHeight: "500px",
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
    },
    paraclr: {
        color: "white",
        opacity: "0.5",
        fontSize: "13px",

    },
    paraclrf: {
        color: "white",
        opacity: "0.5",
        [theme.breakpoints.down('md')]: {
            // display: "flex",
            // justifyContent: "center",
        },
    },
    paraalign: {
        marginTop: 70,
        [theme.breakpoints.down('md')]: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: "15%",
            marginTop: 20,
        },
    }
}))

const Ambsdrs = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container className={classes.cntnr} style={{ display: "flex", justifyContent: "center" }}>
                {/* <Grid md={9} xs={12} style={{ marginRight: "40px", marginLeft: "10px" }}>
                    <Grid container alignItems="center" className={classes.cntnr}> */}
                <Grid item xs={10} md={7} style={{ display: "flex", justifyContent: "center" }}>
                    <img style={{ marginTop: "40px", width: '70%', height: '70%' }} src={ambassadorpage} alt="chart" />
                </Grid>
                <Grid item className={classes.listdiv} xs={10} md={5}>
                    <div className={classes.paraalign}>
                        <Typography className={classes.paraclr} style={{ marginBottom: "15px", }}>
                            YFScience has implemented an Ambassador program where any Ambassador
                            that stakes a minimum of 50 YFSI tokens for six months will share in 5% of all
                            $BSCI tokens. This pool will be distributed to the Ambassadors on a percentage
                            basis based on the total number of tokens staked and will be paid out to the
                            Ambassadors in six installments after launch is complete.
                        </Typography>
                        <Typography className={classes.paraclr} style={{ marginBottom: "15px" }}>
                            In addition, Ambassadors will be given access to the first round of the Presale
                            at a 10% discount just prior to Presale launching to the general public.
                            Additional incentives are in the works for Ambassadors who are willing to stake
                            their 50 YFSI tokens beyond the original 6 months time window. Further details
                            to follow.
                        </Typography>
                        <Typography className={classes.paraclr} style={{ marginBottom: "45px" }}>
                            Below are the various links to YFScience for those interested in becoming a YFSI
                            Ambassador
                        </Typography>
                    </div>
                </Grid>
                {/* </Grid>
                </Grid> */}
            </Grid>
        </div>
    )
}

export default Ambsdrs
import React from 'react'
import { Grid, Typography, createStyles, makeStyles } from "@material-ui/core";


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
        // borderRadius: "0px 10px 10px 0px"
    },
    txt: {
        marginTop: "70px",
        color: "white",
        opacity: "0.5",
        [theme.breakpoints.down('md')]:{
            margin: '70px 20px 30px'
        }
    },
    txtdiv: {
        [theme.breakpoints.up('lg')]: {
            width: "85%"
        },
    }
}))

const AboutScience = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container className={classes.cntnr} style={{ display: "flex", justifyContent: "center" }}>
                <div className={classes.txtdiv}>
                    <Typography paragraph className={classes.txt}>
                    Reward multipliers:

CAKE/BNB (20x Rewards)
BUSD/BNB (10x Rewards)
ADA/BNB (5x Rewards)
BAND/BNB (5x Rewards)
DOT/BNB (5x Rewards)
EOS/BNB (5x Rewards)
LINK/BNB (5x Rewards)
BAKE/BNB (1x Rewards) - For this one, you can use Bakery’s LP token directly.
BURGER/BNB (1x Rewards) 
                    </Typography>
                    <Typography paragraph className={classes.txt}>
                    Reward multipliers:

CAKE/BNB (20x Rewards)
BUSD/BNB (10x Rewards)
ADA/BNB (5x Rewards)
BAND/BNB (5x Rewards)
DOT/BNB (5x Rewards)
EOS/BNB (5x Rewards)
LINK/BNB (5x Rewards)
BAKE/BNB (1x Rewards) - For this one, you can use Bakery’s LP token directly.
BURGER/BNB (1x Rewards) 
                    </Typography>
                </div>
            </Grid>
        </div>
    )
}

export default AboutScience

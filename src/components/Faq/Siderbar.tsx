/* eslint-disable */


import React, { useEffect } from "react"
import { Container, Tabs, Tab, Box, Typography, Grid, Button, Hidden } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import AllPages from "./AllPages"
import ToggleButton from "./ToggleButton"

const useStyles = makeStyles({
    tab: {
        backgroundColor: "#162E50",
        color: "#7792B6",
        justifyContent: "flex-start",
        textTransform: "capitalize",
        fontSize: "16px",
        borderTopRightRadius: "0",
        borderBottomRightRadius: "0",
        borderTopLeftRadius: "10px",
        borderBottomLeftRadius: "10px",
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingRight: "35px",
        margin: "2px 0",
        boxShadow: "0",
        '&:hover': {
            backgroundColor: "#44699F",
            color: "#162E50"
        }
    },
    subMenu: {
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "column",
        paddingLeft: "40px"
    },
    subMenuTab: {
        fontSize: "14px",
        paddingRight: "20px !important"
    },
    active: {
        color: "#c5b57a"
    },
    rightBar: {
        backgroundColor: "#23426E",
        margin: "12px 0",
        borderRadius: '0 10px 10px 0'
    },
    topTitle: {
        color: "#D8CA84",
        fontSize: "32px",
        margin: "10px 0"
    }
})


const Sidebar = () => {
    const [pressedText, setPressedText] = React.useState("FAQ 1");
    const [topTitle, setTopTitle] = React.useState("FAQ 1")
    const [pageName, setPageName] = React.useState("FAQ 1")

    const changeClass = (text) => {
        setPressedText(text)
    }

    useEffect(() => {
        setPageName(pageName)
        setPressedText(pageName)
    })

    const classes = useStyles()
    return (
        <Container maxWidth="lg" style={{ padding: 0 }}>
            <Box my={2} mx={3}>
                <Grid container spacing={2}>
                    <Hidden lgUp>
                        <Grid item sm={2} xs={2}>
                            <ToggleButton pageName={pageName} handleSetPageName={setPageName} handleSetTopTitle={setTopTitle} />
                        </Grid>
                    </Hidden>
                    <Grid item lg={12} xs={10} sm={10}>
                        <Typography variant="h4" color="initial" align="center" className={classes.topTitle}>{topTitle}</Typography>
                    </Grid>
                    <Hidden mdDown>
                        <Grid item lg={3}>
                            <Button variant="contained" color="default" id="FAQ 1" onClick={() => {
                                changeClass("FAQ 1")
                                setTopTitle("FAQ 1")
                                setPageName("FAQ 1")
                            }} fullWidth className={`${classes.tab} ${pressedText === "FAQ 1" ? classes.active : ""}`}>
                                FAQ 1
                            </Button>
                            <Button variant="contained" color="default" id="FAQ 2" onClick={() => {
                                changeClass("FAQ 2")
                                setTopTitle("FAQ 2")
                                setPageName("FAQ 2")
                            }} fullWidth className={`${classes.tab} ${pressedText === "FAQ 2" ? classes.active : ""}`}>
                                FAQ 2
                            </Button>
                            <Button variant="contained" color="default" id="FAQ 3" onClick={() => {
                                changeClass("FAQ 3")
                                setTopTitle("FAQ 3")
                                setPageName("FAQ 3")

                            }} fullWidth className={`${classes.tab} ${pressedText.includes("FAQ 3") ? classes.active : ""}`}>
                                FAQ 3
                            </Button>
                        </Grid>
                    </Hidden>
                    <Grid item xs={12} lg={9} className={classes.rightBar}>
                        <AllPages pageName={pageName} />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}


export default Sidebar
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
    const [pressedText, setPressedText] = React.useState("about-bscience");
    const [topTitle, setTopTitle] = React.useState("About BScience")
    const [pageName, setPageName] = React.useState("about-bscience")

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
                            <Button variant="contained" color="default" id="about-bscience" onClick={() => {
                                changeClass("about-bscience")
                                setTopTitle("About BScience")
                                setPageName("about-bscience")
                            }} fullWidth className={`${classes.tab} ${pressedText === "about-bscience" ? classes.active : ""}`}>
                                About BScience
                            </Button>
                            <Button variant="contained" color="default" id="roadmap" onClick={() => {
                                changeClass("roadmap")
                                setTopTitle("Roadmap")
                                setPageName("roadmap")
                            }} fullWidth className={`${classes.tab} ${pressedText === "roadmap" ? classes.active : ""}`}>
                                Roadmap
                            </Button>
                            <Button variant="contained" color="default" id="bscience-features" onClick={() => {
                                changeClass("liquidity-mining")
                                setTopTitle("BScience Features")
                                setPageName("liquidity-mining")

                            }} fullWidth className={`${classes.tab} ${pressedText.includes("liquidity-mining") ? classes.active : ""}`}>
                                BScience Features
                            </Button>
                            <Box className={classes.subMenu}>
                                <Button variant="contained" color="default" id="liquidity-mining" onClick={() => {
                                    changeClass("liquidity-mining")
                                    setTopTitle("Liquidity mining")
                                    setPageName("liquidity-mining")
                                }} className={`${classes.tab} ${classes.subMenuTab} ${pressedText === "liquidity-mining" ? classes.active : ""}`}>
                                    Liquidity mining
                                </Button>
                                <Button variant="contained" color="default" id="staking" onClick={() => {
                                    changeClass("staking")
                                    setTopTitle("Staking")
                                    setPageName("staking")

                                }} className={`${classes.tab} ${pressedText === "staking" ? classes.active : ""} ${classes.subMenuTab}`}>
                                    Staking
                                </Button>
                                <Button variant="contained" color="default" id="NFT Launchpad" onClick={() => {
                                    changeClass("NFT Launchpad")
                                    setTopTitle("NFT Launchpad")
                                    setPageName("NFT Launchpad")
                                }} className={`${classes.tab} ${pressedText === "NFT Launchpad" ? classes.active : ""} ${classes.subMenuTab}`}>
                                    NFT Launchpad
                                </Button>
                                <Button variant="contained" color="default" id="NFT Marketplace" onClick={() => {
                                    changeClass("NFT Marketplace")
                                    setTopTitle("NFT Marketplace")
                                    setPageName("NFT Marketplace")
                                }} className={`${classes.tab} ${pressedText === "NFT Marketplace" ? classes.active : ""} ${classes.subMenuTab}`}>
                                    NFT Marketplace
                                </Button>
                                <Button variant="contained" color="default" id="NFT Mining" onClick={() => {
                                    changeClass("NFT Mining")
                                    setTopTitle("NFT Mining")
                                    setPageName("NFT Mining")
                                }} className={`${classes.tab} ${pressedText === "NFT Mining" ? classes.active : ""} ${classes.subMenuTab}`}>
                                    NFT Mining
                                </Button>
                                <Button variant="contained" color="default" id="Automated trading tool" onClick={() => {
                                    changeClass("bscience-features-6")
                                    setTopTitle("Automated trading tool")
                                    setPageName("Automated trading tool")
                                }} className={`${classes.tab} ${pressedText === "Automated trading tool" ? classes.active : ""} ${classes.subMenuTab}`}>
                                    Automated trading tool
                                </Button>
                            </Box>
                            <Button variant="contained" color="default" onClick={() => {
                                changeClass("YFScience")
                                setTopTitle("YFScience")
                                setPageName("YFScience")
                            }} fullWidth className={`${classes.tab} ${pressedText === "YFScience" ? classes.active : ""}`}>
                                YFScience
                                </Button>
                            <Button variant="contained" color="default" onClick={() => {
                                changeClass("Tokenomics")
                                setTopTitle("Tokenomics")
                                setPageName("Tokenomics")

                            }} fullWidth className={`${classes.tab} ${pressedText === "Tokenomics" ? classes.active : ""}`}>
                                Tokenomics
                                </Button>
                            <Button variant="contained" color="default" onClick={() => {
                                changeClass("Governance")
                                setTopTitle("Governance")
                                setPageName("Governance")
                            }} fullWidth className={`${classes.tab} ${pressedText === "Governance" ? classes.active : ""}`}>
                                Governance
                                </Button>
                            <Button variant="contained" color="default" onClick={() => {
                                changeClass("Ambassadors")
                                setTopTitle("Ambassadors")
                                setPageName("Ambassadors")

                            }} fullWidth className={`${classes.tab} ${pressedText === "Ambassadors" ? classes.active : ""}`}>
                                Ambassadors
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
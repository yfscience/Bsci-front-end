/* eslint-disable */
import React, { useEffect } from "react"
import { Container, Tabs, Tab, Box, Typography, Grid, Button, Drawer } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import AllPages from "./AllPages"


interface ToggleBtnProps {
    open?: boolean,
    handleClose?: any,
    handleSetPageName?: any
    handleSetTopTitle?: any
    pageName?: any
}



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
        margin: "12px 0"
    },
    topTitle: {
        color: "#D8CA84",
        fontSize: "32px",
        margin: "10px 0"
    },
    transparentDrawer: {
        backgroundColor: "#23436E"
    }
})


const ResponsiveSidebar: React.FC<ToggleBtnProps> = ({ open, pageName, handleClose, handleSetPageName, handleSetTopTitle }) => {
    const [value, setValue] = React.useState(0);
    const [pressedText, setPressedText] = React.useState("about-bscience");

    const changeClass = (text) => {
        console.log(text)
        setPressedText(text)
    }

    useEffect(()=>{
        console.log(pageName)
        setPressedText(pageName)
    })

    const classes = useStyles()
    return (

        <Drawer classes={{ paper: classes.transparentDrawer }} open={open} onClose={() => {
            handleClose()
        }}>
            <Button variant="contained" color="default" id="about-bscience" onClick={() => {
                changeClass("about-bscience")
                handleSetTopTitle("About BScience")
                handleSetPageName("about-bscience")
            }} fullWidth className={`${classes.tab} ${pressedText === "about-bscience" ? classes.active : ""}`}>
                About BScience
            </Button>
            <Button variant="contained" color="default" id="roadmap" onClick={() => {
                changeClass("roadmap")
                handleSetTopTitle("Roadmap")
                handleSetPageName("roadmap")
            }} fullWidth className={`${classes.tab} ${pressedText === "roadmap" ? classes.active : ""}`}>
                Roadmap
                    </Button>
            <Button variant="contained" color="default" id="bscience-features" onClick={() => {
                changeClass("liquidity-mining")
                handleSetTopTitle("Liquidity Mining")
                handleSetPageName("liquidity-mining")
            }} fullWidth className={`${classes.tab} ${pressedText.includes("liquidity-mining") ? classes.active : ""}`}>
                BScience Features
            </Button>
            <Box className={classes.subMenu}>
                <Button variant="contained" color="default" id="liquidity-mining" onClick={() => {
                    changeClass("liquidity-mining")
                    handleSetTopTitle("Liquidity Mining")
                    handleSetPageName("liquidity-mining")
                }} className={`${classes.tab} ${classes.subMenuTab} ${pressedText === "liquidity-mining" ? classes.active : ""}`}>
                    Liquidity mining
                    </Button>
                <Button variant="contained" color="default" id="staking" onClick={() => {
                    changeClass("staking")
                    handleSetTopTitle("Staking")
                    handleSetPageName("staking")

                }} className={`${classes.tab} ${pressedText === "staking" ? classes.active : ""} ${classes.subMenuTab}`}>
                    Staking
                    </Button>
                <Button variant="contained" color="default" id="NFT Launchpad" onClick={() => {
                    changeClass("NFT Launchpad")
                    handleSetTopTitle("NFT Launchpad")
                    handleSetPageName("NFT Launchpad")

                }} className={`${classes.tab} ${pressedText === "NFT Launchpad" ? classes.active : ""} ${classes.subMenuTab}`}>
                    NFT Launchpad
                    </Button>
                <Button variant="contained" color="default" id="NFT Marketplace" onClick={() => {
                    changeClass("NFT Marketplace")
                    handleSetTopTitle("NFT Marketplace")
                    handleSetPageName("NFT Marketplace")

                }} className={`${classes.tab} ${pressedText === "NFT Marketplace" ? classes.active : ""} ${classes.subMenuTab}`}>
                    NFT Marketplace
                    </Button>
                <Button variant="contained" color="default" id="NFT Mining" onClick={() => {
                    changeClass("NFT Mining")
                    handleSetTopTitle("NFT Mining")
                    handleSetPageName("NFT Mining")

                }} className={`${classes.tab} ${pressedText === "NFT Mining" ? classes.active : ""} ${classes.subMenuTab}`}>
                    NFT Mining
                    </Button>
                <Button variant="contained" color="default" id="Automated trading tool" onClick={() => {
                    changeClass("Automated trading tool")
                    handleSetTopTitle("Automated trading tool")
                    handleSetPageName("Automated trading tool")
                }} className={`${classes.tab} ${pressedText === "Automated trading tool" ? classes.active : ""} ${classes.subMenuTab}`}>
                    Automated trading tool
                    </Button>
            </Box>
            <Button variant="contained" color="default" onClick={() => {
                changeClass("YFScience")
                handleSetTopTitle("YFScience")
                handleSetPageName("YFScience")
            }} fullWidth className={`${classes.tab} ${pressedText === "YFScience" ? classes.active : ""}`}>
                YFScience
                    </Button>
            <Button variant="contained" color="default" onClick={() => {
                changeClass("Tokenomics")
                handleSetTopTitle("Tokenomics")
                handleSetPageName("Tokenomics")

            }} fullWidth className={`${classes.tab} ${pressedText === "Tokenomics" ? classes.active : ""}`}>
                Tokenomics
                    </Button>
            <Button variant="contained" color="default" onClick={() => {
                changeClass("Governance")
                handleSetTopTitle("Governance")
                handleSetPageName("Governance")
            }} fullWidth className={`${classes.tab} ${pressedText === "Governance" ? classes.active : ""}`}>
                Governance
            </Button>
            <Button variant="contained" color="default" onClick={() => {
                changeClass("Ambassadors")
                handleSetTopTitle("Ambassadors")
                handleSetPageName("Ambassadors")
            }} fullWidth className={`${classes.tab} ${pressedText === "Ambassadors" ? classes.active : ""}`}>
                Ambassadors
            </Button>

        </Drawer>

    )
}


export default ResponsiveSidebar
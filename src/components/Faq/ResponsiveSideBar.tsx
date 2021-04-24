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
    const [pressedText, setPressedText] = React.useState("FAQ 1");

    const changeClass = (text) => {
        console.log(text)
        setPressedText(text)
    }

    useEffect(() => {
        console.log(pageName)
        setPressedText(pageName)
    })

    const classes = useStyles()
    return (

        <Drawer classes={{ paper: classes.transparentDrawer }} open={open} onClose={() => {
            handleClose()
        }}>
            <Button variant="contained" color="default" id="FAQ 1" onClick={() => {
                changeClass("FAQ 1")
                handleSetTopTitle("FAQ 1")
                handleSetPageName("FAQ 1")
            }} fullWidth className={`${classes.tab} ${pressedText === "FAQ 1" ? classes.active : ""}`}>
                FAQ 1
            </Button>
            <Button variant="contained" color="default" id="FAQ 2" onClick={() => {
                changeClass("FAQ 2")
                handleSetTopTitle("FAQ 2")
                handleSetPageName("FAQ 2")
            }} fullWidth className={`${classes.tab} ${pressedText === "FAQ 2" ? classes.active : ""}`}>
                FAQ 2
            </Button>
            <Button variant="contained" color="default" id="FAQ 3" onClick={() => {
                changeClass("FAQ 3")
                handleSetTopTitle("FAQ 3")
                handleSetPageName("FAQ 3")
            }} fullWidth className={`${classes.tab} ${pressedText.includes("FAQ 3") ? classes.active : ""}`}>
                FAQ 3
            </Button>
        </Drawer>

    )
}


export default ResponsiveSidebar
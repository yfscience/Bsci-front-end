import React from "react"
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from "@material-ui/icons/Menu"
import ResponsiveSidebar from "./ResponsiveSideBar"


interface SideBarProp {
    handleSetPageName?: any
    handleSetTopTitle?: any
    pageName?: any
}

const ToggleButton: React.FC<SideBarProp> = ({ handleSetPageName, handleSetTopTitle, pageName }) => {

    const [toggle, setToggle] = React.useState(false)

    return (
        <div>
            <IconButton aria-label="" onClick={() => setToggle(!toggle)} style={{ color: "white" }}>
                <MenuIcon />
            </IconButton>

            <ResponsiveSidebar open={toggle} pageName={pageName} handleSetPageName={handleSetPageName} handleSetTopTitle={handleSetTopTitle} handleClose={() => setToggle(!toggle)} />
        </div>
    )
}

export default ToggleButton
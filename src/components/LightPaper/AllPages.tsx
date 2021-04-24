import React from "react"
import AboutPage from "./AboutScience"
import RoadMap from "./RoadMapPage"
import Mining from "./Mining"
import Nomics from "./Nomics"
import Ambassadors from "./Ambassadors"


interface SidebarProps {
    pageName?: string
}


const AllPages: React.FC<SidebarProps> = ({ pageName }) => {

    return (
        <>
            {pageName === 'about-bscience' && <AboutPage />}
            {pageName === 'roadmap' && <RoadMap />}
            {pageName === 'liquidity-mining' && <Mining />}
            {pageName === 'staking' && <Mining />}
            {pageName === 'NFT Launchpad' && <Mining />}
            {pageName === 'NFT Marketplace' && <Mining />}
            {pageName === 'NFT Mining' && <Mining />}
            {pageName === 'Automated trading tool' && <Mining />}
            {pageName === 'YFScience' && <Mining />}
            {pageName === 'Tokenomics' && <Nomics />}
            {pageName === 'Governance' && <Mining />}
            {pageName === 'Ambassadors' && <Ambassadors />}
            {/* {pageName==="about-bscience"?<PageOne />:""}
        {pageName==="roadmap"?<PageTwo />: ""}
        {pageName==="liquidity-mining"?<PageThree />:""}     
        {pageName==="staking"?<PageFour />:""}   
        {pageName==="NFT Launchpad"?<PageFive />:""}   
        {pageName==="NFT Marketplace"?<PageSix />:""}   
        {pageName==="NFT Mining"?<PageSeven />:""}   
        {pageName==="Automated trading tool"?<PageEight />:""}   
        {pageName==="YFScience"?<PageNine />:""}   
        {pageName==="Tokenomics"?<PageTen />:""}   
        {pageName==="Governance"?<PageEleven />:""}
        {pageName==="Ambassadors"?<PageTwelve />:""} */}




        </>
    )
}

export default AllPages
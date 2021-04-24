import React from "react"
import AboutPage from "./AboutScience"
import RoadMap from "./RoadMapPage"
import Mining from "./Mining"


interface SidebarProps {
    pageName?: string
}


const AllPages: React.FC<SidebarProps> = ({ pageName }) => {

    return (
        <>
            {pageName === 'FAQ 1' && <AboutPage />}
            {pageName === 'FAQ 2' && <RoadMap />}
            {pageName === 'FAQ 3' && <Mining />}
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
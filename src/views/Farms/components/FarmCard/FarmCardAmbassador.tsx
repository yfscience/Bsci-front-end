import React, { useEffect, useMemo, useState } from 'react'
import BigNumber from 'bignumber.js'
import styled, { keyframes } from 'styled-components'
import { Flex, Text, Skeleton } from '@pancakeswap-libs/uikit'
import { communityFarms } from 'config/constants'
import { Farm } from 'state/types'
import { provider } from 'web3-core'
import useI18n from 'hooks/useI18n'
import ExpandableSectionButton from 'components/ExpandableSectionButton'
import { QuoteToken } from 'config/constants/types'
import DetailsSection from './DetailsSectionAmbassador'
import CardHeading from './CardHeadingAmbassador'
import CardActionsContainer from './CardActionsContainerAmbassador'
import ApyButton from './ApyButton'

export interface FarmWithStakedValue extends Farm {
  apy?: BigNumber
}

const RainbowLight = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

const StyledCardAccent = styled.div`
  background: linear-gradient(
    45deg,
    #3CA597 0%,
    #3CA597 10%,
    #3CA597 20%,
    #3CA597 30%,
    #3CA597 40%,
    #3CA597 50%,
    #3CA597 60%,
    #3CA597 70%,
    #f6d76a 80%,
    #f6d76a 90%,
    #f6d76a 100%
  );
  background-size: 300% 300%;
  animation: ${RainbowLight} 2s linear infinite;
  border-radius: 16px;
  filter: blur(6px);
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  z-index: -1;
`

const FCard = styled.div`
  align-self: baseline;
  background: ${(props) => props.theme.card.background};
  border-radius: 10px;
  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 24px;
  position: relative;
  text-align: center;
  margin: 10px !important;
  // max-width: 470px;
`

const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.borderColor};
  height: 1px;
  margin: 28px auto;
  width: 100%;
`

const ExpandingWrapper = styled.div<{ expanded: boolean }>`
  height: ${(props) => (props.expanded ? '100%' : '0px')};
  overflow: hidden;
`

interface FarmCardProps {
  farm: string
  removed: string
  cakePrice?: string
  bnbPrice?: string
  ethereum?: string
  account?: string
  yfsiInWallet?: any
  stakeFee?: any
  unStakeFee?: any
  connected?: any
  connectPressed?: any
  stakePressed?: any
  stakeInput?: any
  unStakeInput?: any
  unStakePressed?: any
  maxStake?: any
  maxUnStake?: any
  stakeMaxPressed?: any
  unStakeMaxPressed?: any
  stakedToken?: any
}

const FarmCard: React.FC<FarmCardProps> = ({ stakedToken, farm, removed, cakePrice, bnbPrice, unStakeFee, stakeFee, yfsiInWallet, connected, connectPressed, ethereum, account, stakePressed, stakeInput, unStakeInput, unStakePressed, maxStake, maxUnStake, stakeMaxPressed, unStakeMaxPressed }) => {
  // const FarmCard: React.FC<FarmCardProps> = () => {
  const TranslateString = useI18n()

  const [showExpandableSection, setShowExpandableSection] = useState(false)
  // const isCommunityFarm = communityFarms.includes(farm.tokenSymbol)
  // We assume the token name is coin pair + lp e.g. CAKE-BNB LP, LINK-BNB LP,
  // NAR-CAKE LP. The images should be cake-bnb.svg, link-bnb.svg, nar-cake.svg
  // const farmImage = farm.lpSymbol.split(' ')[0].toLocaleLowerCase()
  const farmImage = 'Circular';
  //   ? farm.tokenSymbol.toLowerCase()
  //   : `${farm.tokenSymbol.toLowerCase()}-${farm.quoteTokenSymbol.toLowerCase()}`

  // const totalValue: BigNumber = useMemo(() => {
  //   if (!farm.lpTotalInQuoteToken) {
  //     return null
  //   }
  //   if (farm.quoteTokenSymbol === QuoteToken.BNB) {
  //     return bnbPrice.times(farm.lpTotalInQuoteToken)
  //   }
  //   if (farm.quoteTokenSymbol === QuoteToken.CAKE) {
  //     return cakePrice.times(farm.lpTotalInQuoteToken)
  //   }
  //   return farm.lpTotalInQuoteToken
  // }, [bnbPrice, cakePrice, farm.lpTotalInQuoteToken, farm.quoteTokenSymbol])

  // const totalValueFormated = totalValue
  //   ? `$${Number(totalValue).toLocaleString(undefined, { maximumFractionDigits: 0 })}`
  //   : '-'

  // const lpLabel = farm.lpSymbol
  // const earnLabel = 'BSCI'
  // const farmAPY =
  //   farm.apy &&
  //   farm.apy.times(new BigNumber(100)).toNumber().toLocaleString(undefined, {
  //     minimumFractionDigits: 2,
  //     maximumFractionDigits: 2,
  //   })

  // const { quoteTokenAdresses, quoteTokenSymbol, tokenAddresses, risk } = farm

  return (
    <div className="farm_card_wrapper2">
      <FCard>
        <StyledCardAccent />
        <CardHeading
          lpLabel='lpLabel'
          multiplier='farm.multiplier'
          risk='risk'
          depositFee='farm.depositFeeBP'
          farmImage={farmImage}
          tokenSymbol='farm.tokenSymbol'
        />
        <div className="farm_card_table_grid">
          <div>
            <div className="farm_card_table_divider" />
            <div className="farm_card_table_row">
              <p className="farm_card_deposit_heading">{TranslateString(729, 'Rewards')}</p>
              <p className="farm_card_deposit_heading" style={{ marginLeft: 0 }}>Deposit Fees</p>
            </div>
            <div className="farm_card_table_divider" />
          </div>
          <div className="farm_card_table_row">
            <p className="farm_card_table_left">{TranslateString(730, 'Stake')}</p>
            <p className="farm_card_table_right">min 50 YFSI</p>
          </div>
          <div className="farm_card_table_divider" />
          <div className="farm_card_table_row">
            <p className="farm_card_table_left">{TranslateString(10006, 'Withdraw Fee')}</p>
            <p className="farm_card_table_right">{unStakeFee}%</p>
          </div>
          <div className="farm_card_table_divider" />
          <div className="farm_card_table_row">
            <p className="farm_card_table_left">{TranslateString(10001, 'Deposit Fee')}</p>
            <p className="farm_card_table_right">{stakeFee}%</p>
          </div>
          <div className="farm_card_table_divider" />
        </div>

        <CardActionsContainer
          stakedToken={stakedToken}
          yfsiInWallet={yfsiInWallet}
          farm={farm} ethereum={ethereum}
          connectPressed={connectPressed}
          connected={connected}
          maxStake={maxStake}
          maxUnStake={maxUnStake}
          unStakePressed={unStakePressed}
          stakePressed={stakePressed}
          stakeInput={stakeInput}
          unStakeInput={unStakeInput}
          stakeMaxPressed={stakeMaxPressed}
          unStakeMaxPressed={unStakeMaxPressed}
        />
        <ExpandableSectionButton
          onClick={() => setShowExpandableSection(!showExpandableSection)}
          expanded={showExpandableSection}
        />
        <ExpandingWrapper expanded={showExpandableSection}>
          <DetailsSection
            removed='removed'
            isTokenOnly='farm.isTokenOnly'
            bscScanAddress={
              // farm.isTokenOnly
              false
                ? `https://etherscan.io/token/0x1df6f1bb7454e5e4ba3bca882d3148fbf9b5697a`
                : `https://etherscan.io/token/0x1df6f1bb7454e5e4ba3bca882d3148fbf9b5697a`
            }
            totalValueFormated='totalValueFormated'
            lpLabel='YFSI'
            quoteTokenAdresses='quoteTokenAdresses'
            quoteTokenSymbol='quoteTokenSymbol'
            tokenAddresses='tokenAddresses'
          />
        </ExpandingWrapper>
      </FCard>
    </div>
  )
}

export default FarmCard

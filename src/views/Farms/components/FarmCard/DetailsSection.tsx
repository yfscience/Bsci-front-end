import React from 'react'
import useI18n from 'hooks/useI18n'
import styled from 'styled-components'
import { Text, Flex, Link, LinkExternal } from '@pancakeswap-libs/uikit'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { Address } from 'config/constants/types'

export interface ExpandableSectionProps {
  isTokenOnly?: boolean
  bscScanAddress?: string
  removed?: boolean
  totalValueFormated?: string
  lpLabel?: string
  quoteTokenAdresses?: Address
  quoteTokenSymbol?: string
  tokenAddresses: Address
}

const Wrapper = styled.div`
  margin-top: 24px;
`

const StyledLinkExternal = styled(LinkExternal)`
  text-decoration: none;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;

  svg {
    padding-left: 4px;
    height: 18px;
    width: auto;
    fill: ${({ theme }) => theme.colors.primary};
  }
`

const DetailsSection: React.FC<ExpandableSectionProps> = ({
  isTokenOnly,
  bscScanAddress,
  removed,
  totalValueFormated,
  lpLabel,
  quoteTokenAdresses,
  quoteTokenSymbol,
  tokenAddresses,
}) => {
  const TranslateString = useI18n()
  const liquidityUrlPathParts = getLiquidityUrlPathParts({ quoteTokenAdresses, quoteTokenSymbol, tokenAddresses })

  return (
    <Wrapper>
      <Flex justifyContent="space-between">
        <p className="farm_card_table_left">{TranslateString(316, 'Stake')}</p>
        <a
          className="farm_card_table_right"
          href={
            isTokenOnly
              ? `https://exchange.pancakeswap.finance/#/swap/${tokenAddresses[process.env.REACT_APP_CHAIN_ID]}`
              : `https://exchange.pancakeswap.finance/#/add/${liquidityUrlPathParts}`
          }
        >
          <p className="farm_card_table_right farm_card_view_on_link" style={{marginTop: 0}}>{lpLabel}</p>
        </a>
      </Flex>
      {!removed && (
        <Flex justifyContent="space-between" style={{ marginTop: '10px' }}>
          <p className="farm_card_table_left">{TranslateString(23, 'Total Value')}</p>
          <p className="farm_card_table_right">{totalValueFormated}</p>
        </Flex>
      )}
      <Flex justifyContent="flex-start">
        <a href={bscScanAddress} className="farm_card_view_on_link">
          <p>{TranslateString(356, 'View on BscScan')}</p>
        </a>
      </Flex>
    </Wrapper>
  )
}

export default DetailsSection

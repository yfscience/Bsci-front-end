import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import { Flex, Button } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useHarvest } from 'hooks/useHarvest'
import { getBalanceNumber } from 'utils/formatBalance'
import styled from 'styled-components'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { Button as Button2 } from '@material-ui/core'
import useStake from '../../../../hooks/useStake'

interface FarmCardActionsProps {
  earnings?: BigNumber
  pid?: number
}

const BalanceAndCompound = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`

const HarvestAction: React.FC<FarmCardActionsProps> = ({ earnings, pid }) => {
  const TranslateString = useI18n()
  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useHarvest(pid)
  const { onStake } = useStake(pid)

  const rawEarningsBalance = getBalanceNumber(earnings)
  const displayBalance = rawEarningsBalance.toLocaleString()

  return (
    <Flex mb="8px" justifyContent="space-between" alignItems="center">
      <p style={{ color: 'white' }}>{displayBalance}</p>
      {/* <Heading color={rawEarningsBalance === 0 ? 'textDisabled' : 'text'}>{displayBalance}</Heading> */}
      <BalanceAndCompound>
        {pid === 12 ? (
          <Button2
            disabled={rawEarningsBalance === 0 || pendingTx}
            variant="outlined"
            color="primary"
            className="farm_card_harvest_btn"
            onClick={async () => {
              setPendingTx(true)
              await onStake(rawEarningsBalance.toString())
              setPendingTx(false)
            }}
            style={{marginBottom:8,}}
          >
            {TranslateString(999, 'Compound')}
          </Button2>
        ) : null}
        <Button2
          disabled={rawEarningsBalance === 0 || pendingTx}
          variant="outlined"
          color="primary"
          className="farm_card_harvest_btn"
          onClick={async () => {
            setPendingTx(true)
            await onReward()
            setPendingTx(false)
          }}
        >
          <p>
            {TranslateString(999, 'Harvest')} <ChevronRightIcon fontSize="inherit" />
          </p>
        </Button2>
      </BalanceAndCompound>
    </Flex>
  )
}

export default HarvestAction

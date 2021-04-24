
/* eslint-disable */

import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Button, Flex, Heading, IconButton, AddIcon, MinusIcon, useModal } from '@pancakeswap-libs/uikit'
import { Button as Button2 } from '@material-ui/core'
import useI18n from 'hooks/useI18n'
import useStake from 'hooks/useStake'
import useUnstake from 'hooks/useUnstake'
import { getBalanceNumber } from 'utils/formatBalance'
import StackModal from '../StackModal'
import UnStackModal from '../UnStackModal'

interface FarmCardActionsProps {
  stakedBalance?: string
  tokenBalance?: string
  tokenName?: string
  pid?: string
  depositFeeBP?: string
  stakePressed?: any
  stakeInput?: any
  unStakeInput?: any,
  unStakePressed?: any,
  maxStake?: any,
  maxUnStake?: any,
  stakeMaxPressed?: any,
  unStakeMaxPressed?: any,
}

const IconButtonWrapper = styled.div`
  display: flex;
  svg {
    width: 20px;
  }
`

const StakeAction: React.FC<FarmCardActionsProps> = ({ stakedBalance, tokenBalance, tokenName, pid, depositFeeBP, stakePressed, stakeInput, unStakeInput, unStakePressed, maxStake, maxUnStake, stakeMaxPressed, unStakeMaxPressed }) => {
  const TranslateString = useI18n()
  const { onStake } = useStake(0)
  const { onUnstake } = useUnstake(0)
  const [val, setVal] = useState('')
  const [keyStake, setKeyStake] = useState(100)
  const [keyUnStake, setKeyUnStake] = useState(100)

  // const rawStakedBalance = getBalanceNumber(stakedBalance)
  // const displayBalance = rawStakedBalance.toLocaleString()

  const handleSelectMaxStake = () => {
    stakeMaxPressed();
    setKeyStake(Math.random);
  }

  const handleSelectMaxUnStake = () => {
    unStakeMaxPressed();
    setKeyUnStake(Math.random);
  }

  useEffect(() => {
    if (keyStake !== 100) {
      onPresentDeposit();
    }
  }, [keyStake])

  useEffect(() => {
    if (keyUnStake !== 100) {
      onPresentWithdraw();
    }
  }, [keyUnStake])

  const [onPresentDeposit] = useModal(
    <StackModal
      max={maxStake}
      stakeInput={stakeInput}
      onConfirm={stakePressed}
      tokenName='YFSI'
      depositFeeBP={10}
    />
  )
  const [onPresentWithdraw] = useModal(
    <UnStackModal
      max={maxUnStake}
      unStakeInput={unStakeInput}
      onConfirm={unStakePressed}
      tokenName='YFSI'
    />
  )

  return (
    <div>
      <Flex justifyContent="space-between" alignItems="center">
        <Button2
          style={{ padding: '0 40px', borderRadius: 180 }}
          variant="contained"
          color="primary"
          className="farm_card_unlock_btn"
          onClick={() => {
            handleSelectMaxStake();
          }}
        >
          {TranslateString(999, 'Stake')}
        </Button2>
        <Button2
          style={{ padding: '0 40px', borderRadius: 180 }}
          variant="contained"
          color="primary"
          className="farm_card_unlock_btn"
          onClick={() => {
            handleSelectMaxUnStake();
          }}
        >
          {TranslateString(588, 'UnStake')}
        </Button2>
      </Flex>
    </div >
  )
}

export default StakeAction

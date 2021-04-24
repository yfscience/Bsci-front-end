import React, { useMemo, useState, useCallback, useEffect } from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { provider } from 'web3-core'
import { getContract } from 'utils/erc20'
import { Button, Flex, Heading, Text } from '@pancakeswap-libs/uikit'
import { Farm } from 'state/types'
import { useFarmFromPid, useFarmFromSymbol, useFarmUser } from 'state/hooks'
import useI18n from 'hooks/useI18n'
import UnlockButton from 'components/UnlockButtonAmbassador'
import { useApprove } from 'hooks/useApprove'
import { Button as Button2 } from '@material-ui/core'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import StakeAction from './StakeActionAmbassador'
import HarvestAction from './HarvestAction'

const Action = styled.div`
  padding-top: 16px;
`
export interface FarmWithStakedValue extends Farm {
  apy?: BigNumber
}

interface FarmCardActionsProps {
  farm: string
  ethereum?: string
  account?: string
  yfsiInWallet?: any
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

const CardActions: React.FC<FarmCardActionsProps> = ({ stakedToken, yfsiInWallet, connected, connectPressed, farm, ethereum, account, stakePressed, stakeInput, unStakeInput, unStakePressed, maxStake, maxUnStake, stakeMaxPressed, unStakeMaxPressed }) => {
  const TranslateString = useI18n()
  // // const [requestedApproval, setRequestedApproval] = useState(false)
  // // const { pid, lpAddresses, tokenAddresses, isTokenOnly, depositFeeBP } = useFarmFromPid(farm.pid)
  // // const { allowance, tokenBalance, stakedBalance, earnings } = useFarmUser(pid)
  // // const lpAddress = lpAddresses[process.env.REACT_APP_CHAIN_ID]
  // // const tokenAddress = tokenAddresses[process.env.REACT_APP_CHAIN_ID];
  // // const lpName = farm.lpSymbol.toUpperCase()
  // // const isApproved = account && allowance && allowance.isGreaterThan(0)

  // const lpContract = useMemo(() => {
  //   if (isTokenOnly) {
  //     return getContract(ethereum as provider, tokenAddress);
  //   }
  //   return getContract(ethereum as provider, lpAddress);
  // }, [ethereum, lpAddress, tokenAddress, isTokenOnly])

  // const { onApprove } = useApprove(lpContract)

  // const handleApprove = useCallback(async () => {
  //   try {
  //     setRequestedApproval(true)
  //     await onApprove()
  //     setRequestedApproval(false)
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }, [onApprove])

  const renderApprovalOrStakeButton = () => {
    return (
      <StakeAction
        stakePressed={stakePressed}
        stakeInput={stakeInput}
        unStakeInput={unStakeInput}
        unStakePressed={unStakePressed}
        maxStake={maxStake}
        maxUnStake={maxUnStake}
        stakeMaxPressed={stakeMaxPressed}
        unStakeMaxPressed={unStakeMaxPressed}
        stakedBalance='stakedBalance'
        tokenBalance='tokenBalance'
        tokenName='lpName'
        pid='pid'
        depositFeeBP='depositFeeBP'
      />
    );
  }

  return (
    <Action>
      <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 11, textAlign: 'left', marginBottom: 10 }}>
        {/* {TranslateString(731, 'Lookedup Period 6 months')} */}
        YFSI{TranslateString(999, ' Staked')}
      </p>
      <Heading color='text' style={{ textAlign: 'left' }}>{stakedToken}</Heading>
      {!connected ? <UnlockButton fullWidth connectPressed={connectPressed} /> : renderApprovalOrStakeButton()}
    </Action>
  )
}

export default CardActions

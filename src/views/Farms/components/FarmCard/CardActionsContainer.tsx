import React, { useMemo, useState, useCallback } from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { provider } from 'web3-core'
import { getContract } from 'utils/erc20'
import { Button, Flex, Text } from '@pancakeswap-libs/uikit'
import { Farm } from 'state/types'
import { useFarmFromPid, useFarmFromSymbol, useFarmUser } from 'state/hooks'
import useI18n from 'hooks/useI18n'
import UnlockButton from 'components/UnlockButton'
import { useApprove } from 'hooks/useApprove'
import { Button as Button2 } from '@material-ui/core'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import StakeAction from './StakeAction'
import HarvestAction from './HarvestAction'

const Action = styled.div`
  padding-top: 16px;
`
export interface FarmWithStakedValue extends Farm {
  apy?: BigNumber
}

interface FarmCardActionsProps {
  farm: FarmWithStakedValue
  ethereum?: provider
  account?: string
}

const CardActions: React.FC<FarmCardActionsProps> = ({ farm, ethereum, account }) => {
  const TranslateString = useI18n()
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { pid, lpAddresses, tokenAddresses, isTokenOnly, depositFeeBP } = useFarmFromPid(farm.pid)
  const { allowance, tokenBalance, stakedBalance, earnings } = useFarmUser(pid)
  const lpAddress = lpAddresses[process.env.REACT_APP_CHAIN_ID]
  const tokenAddress = tokenAddresses[process.env.REACT_APP_CHAIN_ID];
  const lpName = farm.lpSymbol.toUpperCase()
  const isApproved = account && allowance && allowance.isGreaterThan(0)

  const lpContract = useMemo(() => {
    if (isTokenOnly) {
      return getContract(ethereum as provider, tokenAddress);
    }
    return getContract(ethereum as provider, lpAddress);
  }, [ethereum, lpAddress, tokenAddress, isTokenOnly])

  const { onApprove } = useApprove(lpContract)

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      await onApprove()
      setRequestedApproval(false)
    } catch (e) {
      console.error(e)
    }
  }, [onApprove])

  const renderApprovalOrStakeButton = () => {
    return isApproved ? (
      <StakeAction stakedBalance={stakedBalance} tokenBalance={tokenBalance} tokenName={lpName} pid={pid} depositFeeBP={depositFeeBP} />
    ) : (
      <Button2 variant="contained" color="primary" fullWidth className="farm_card_unlock_btn" disabled={requestedApproval} onClick={handleApprove}>
        {TranslateString(999, 'Approve Contract')} <ChevronRightIcon fontSize="inherit" />
      </Button2>
    )
  }

  return (
    <Action>
      <Flex>
        <p className="farm_card_table_left" style={{ fontSize: 12 }}>
          BSCI&nbsp;
        </p>

        <p className="farm_card_table_left" style={{ fontSize: 12 }}>
          {TranslateString(999, 'Earned')}
        </p>

      </Flex>
      <HarvestAction earnings={earnings} pid={pid} />

      <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 11, marginTop: 20, textAlign: 'left' }}>
        {lpName}{TranslateString(999, ' Staked')}
      </p>

      {/* {account ? <UnlockButton fullWidth /> : renderApprovalOrStakeButton()} */}
      {!account ? <UnlockButton fullWidth /> : renderApprovalOrStakeButton()}
    </Action>
  )
}

export default CardActions

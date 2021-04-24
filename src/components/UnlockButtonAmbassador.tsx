import React from 'react'
import {  useWalletModal } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import { Button } from '@material-ui/core'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

const UnlockButton = (props) => {
  const TranslateString = useI18n()
  const { connect, reset } = useWallet()
  const { onPresentConnectModal } = useWalletModal(connect, reset)
  const { connectPressed } = props;

  return (
    <Button className="farm_card_unlock_btn" variant="contained" color="primary" onClick={connectPressed} {...props}>
      {TranslateString(292, 'Unlock Wallet')} <ChevronRightIcon fontSize="inherit" />
    </Button>
  )
}

export default UnlockButton

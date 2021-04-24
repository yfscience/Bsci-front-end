import BigNumber from 'bignumber.js'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Button, Modal } from '@pancakeswap-libs/uikit'
import { Button as Button2, makeStyles } from '@material-ui/core'
import ModalActions from 'components/ModalActions'
import TokenInput from 'components/TokenInput'
import useI18n from 'hooks/useI18n'
import { getFullDisplayBalance } from 'utils/formatBalance'

interface StackModalProps {
  max: number
  onConfirm: (amount: string) => void
  stakeInput: (amount: string) => void
  onDismiss?: () => void
  tokenName?: string
  depositFeeBP?: number,
  handleStakeMax?: any
}

const useStyles = makeStyles({
  button: {
    padding: '25px 40px',
    color: '#ffffffc7 !important'
  }
})

const StackModal: React.FC<StackModalProps> = ({
  max,
  stakeInput,
  onConfirm,
  onDismiss,
  tokenName = 'YFSI',
  depositFeeBP = 0,
}) => {
  const [val, setVal] = useState('')
  const [pendingTx, setPendingTx] = useState(false)
  const TranslateString = useI18n()
  const classes = useStyles()

  const fullBalance = useMemo(() => {
    return (max).toString();
  }, [max])

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setVal(e.currentTarget.value)
    },
    [setVal],
  )

  useEffect(() => {
    stakeInput(val)
  }, [stakeInput, val])

  const handleSelectMax = useCallback(() => {
    setVal(fullBalance)
  }, [setVal, fullBalance])

  return (
    <Modal title={`${TranslateString(316, 'Deposit')} ${tokenName} Tokens`} onDismiss={onDismiss}>
      <TokenInput
        value={val}
        onSelectMax={handleSelectMax}
        onChange={handleChange}
        onChange2={stakeInput}
        max={fullBalance}
        symbol={tokenName}
        depositFeeBP={depositFeeBP}
      />
      <ModalActions>
        <Button2
          style={{ padding: '25px 40px' }}
          variant="contained"
          color="primary"
          className={`farm_card_unlock_btn ${classes.button}`}
          onClick={onDismiss}>
          {TranslateString(462, 'Cancel')}
        </Button2>
        <Button2
          style={{ padding: '25px 40px' }}
          variant="contained"
          color="primary"
          className="farm_card_unlock_btn"
          disabled={pendingTx}
          onClick={async () => {
            setPendingTx(true)
            await onConfirm(val)
            setPendingTx(false)
            onDismiss()
          }}
        >
          {pendingTx ? TranslateString(488, 'Pending Confirmation') : TranslateString(464, 'Confirm')}
        </Button2>
      </ModalActions>
    </Modal>
  )
}

export default StackModal
